use async_trait::async_trait;
use ethers_contract::abigen;
use ethers_core::types::{Address, H256, U256};
use std::sync::Arc;

use optics_core::{
    traits::{ChainCommunicationError, Common, Home, Replica, State, TxOutcome},
    Encode, Message, SignedUpdate, Update,
};

abigen!(
    ReplicaContractInternal,
    "optics-base/src/abis/ProcessingReplica.abi.json"
);

#[derive(Debug)]
pub struct ReplicaContract<M>
where
    M: ethers_providers::Middleware,
{
    contract: ReplicaContractInternal<M>,
    slip44: u32,
}

impl<M> ReplicaContract<M>
where
    M: ethers_providers::Middleware,
{
    pub fn at(slip44: u32, address: Address, provider: Arc<M>) -> Self {
        Self {
            contract: ReplicaContractInternal::new(address, provider),
            slip44,
        }
    }
}

#[async_trait]
impl<M> Common for ReplicaContract<M>
where
    M: ethers_providers::Middleware + 'static,
{
    async fn status(&self, txid: H256) -> Result<Option<TxOutcome>, ChainCommunicationError> {
        let receipt_opt = self
            .contract
            .client()
            .get_transaction_receipt(txid)
            .await
            .map_err(|e| ChainCommunicationError::CustomError(Box::new(e)))?;

        Ok(receipt_opt.map(Into::into))
    }

    fn origin_slip44(&self) -> u32 {
        self.slip44
    }

    async fn updater(&self) -> Result<H256, ChainCommunicationError> {
        Ok(self.contract.updater().call().await?.into())
    }

    async fn state(&self) -> Result<State, ChainCommunicationError> {
        let state = self.contract.state().call().await?;
        match state {
            0 => Ok(State::Waiting),
            1 => Ok(State::Failed),
            _ => unreachable!(),
        }
    }

    async fn current_root(&self) -> Result<H256, ChainCommunicationError> {
        Ok(self.contract.current().call().await?.into())
    }

    async fn update(&self, update: &SignedUpdate) -> Result<TxOutcome, ChainCommunicationError> {
        Ok(self
            .contract
            .update(
                update.update.previous_root.to_fixed_bytes(),
                update.update.new_root.to_fixed_bytes(),
                update.signature.to_vec(),
            )
            .send()
            .await?
            .await?
            .into())
    }

    async fn double_update(
        &self,
        left: &SignedUpdate,
        right: &SignedUpdate,
    ) -> Result<TxOutcome, ChainCommunicationError> {
        Ok(self
            .contract
            .double_update(
                [
                    left.update.previous_root.to_fixed_bytes(),
                    right.update.previous_root.to_fixed_bytes(),
                ],
                [
                    left.update.new_root.to_fixed_bytes(),
                    right.update.new_root.to_fixed_bytes(),
                ],
                left.signature.to_vec(),
                right.signature.to_vec(),
            )
            .send()
            .await?
            .await?
            .into())
    }
}

#[async_trait]
impl<M> Replica for ReplicaContract<M>
where
    M: ethers_providers::Middleware + 'static,
{
    async fn pending(&self) -> Result<Option<(H256, U256)>, ChainCommunicationError> {
        let pending = self.contract.pending();
        let confirm_at = self.contract.confirm_at();

        let res = tokio::try_join!(pending.call(), confirm_at.call());
        let (pending, confirm_at) = res?;

        if confirm_at.is_zero() {
            Ok(None)
        } else {
            Ok(Some((pending.into(), confirm_at)))
        }
    }

    async fn confirm(&self) -> Result<TxOutcome, ChainCommunicationError> {
        Ok(self.contract.confirm().send().await?.await?.into())
    }

    async fn previous_root(&self) -> Result<H256, ChainCommunicationError> {
        Ok(self.contract.previous().call().await?.into())
    }

    async fn prove(
        &self,
        leaf: H256,
        index: u32,
        proof: [H256; 32],
    ) -> Result<TxOutcome, ChainCommunicationError> {
        let mut sol_proof: [[u8; 32]; 32] = Default::default();
        sol_proof
            .iter_mut()
            .enumerate()
            .for_each(|(i, elem)| *elem = proof[i].to_fixed_bytes());

        Ok(self
            .contract
            .prove(leaf.into(), sol_proof, index.into())
            .send()
            .await?
            .await?
            .into())
    }

    async fn process(&self, message: &Message) -> Result<TxOutcome, ChainCommunicationError> {
        Ok(self
            .contract
            .process(message.to_vec())
            .send()
            .await?
            .await?
            .into())
    }
}

abigen!(HomeContractInternal, "optics-base/src/abis/Home.abi.json");

#[derive(Debug)]
pub struct HomeContract<M>
where
    M: ethers_providers::Middleware,
{
    contract: HomeContractInternal<M>,
    slip44: u32,
}

impl<M> HomeContract<M>
where
    M: ethers_providers::Middleware,
{
    pub fn at(slip44: u32, address: Address, provider: Arc<M>) -> Self {
        Self {
            contract: HomeContractInternal::new(address, provider),
            slip44,
        }
    }
}

#[async_trait]
impl<M> Common for HomeContract<M>
where
    M: ethers_providers::Middleware + 'static,
{
    async fn status(&self, txid: H256) -> Result<Option<TxOutcome>, ChainCommunicationError> {
        let receipt_opt = self
            .contract
            .client()
            .get_transaction_receipt(txid)
            .await
            .map_err(|e| ChainCommunicationError::CustomError(Box::new(e)))?;

        Ok(receipt_opt.map(Into::into))
    }

    fn origin_slip44(&self) -> u32 {
        self.slip44
    }

    async fn updater(&self) -> Result<H256, ChainCommunicationError> {
        Ok(self.contract.updater().call().await?.into())
    }

    async fn state(&self) -> Result<State, ChainCommunicationError> {
        let state = self.contract.state().call().await?;
        match state {
            0 => Ok(State::Waiting),
            1 => Ok(State::Failed),
            _ => unreachable!(),
        }
    }

    async fn current_root(&self) -> Result<H256, ChainCommunicationError> {
        Ok(self.contract.current().call().await?.into())
    }

    async fn update(&self, update: &SignedUpdate) -> Result<TxOutcome, ChainCommunicationError> {
        Ok(self
            .contract
            .update(
                update.update.previous_root.to_fixed_bytes(),
                update.update.new_root.to_fixed_bytes(),
                update.signature.to_vec(),
            )
            .send()
            .await?
            .await?
            .into())
    }

    async fn double_update(
        &self,
        left: &SignedUpdate,
        right: &SignedUpdate,
    ) -> Result<TxOutcome, ChainCommunicationError> {
        Ok(self
            .contract
            .double_update(
                [
                    left.update.previous_root.to_fixed_bytes(),
                    right.update.previous_root.to_fixed_bytes(),
                ],
                [
                    left.update.new_root.to_fixed_bytes(),
                    right.update.new_root.to_fixed_bytes(),
                ],
                left.signature.to_vec(),
                right.signature.to_vec(),
            )
            .send()
            .await?
            .await?
            .into())
    }
}

#[async_trait]
impl<M> Home for HomeContract<M>
where
    M: ethers_providers::Middleware + 'static,
{
    async fn lookup_message(
        &self,
        destination: u32,
        sequence: u32,
    ) -> Result<Option<Vec<u8>>, ChainCommunicationError> {
        let filters = self
            .contract
            .dispatch_filter()
            .topic1(U256::from(destination))
            .topic2(U256::from(sequence))
            .query()
            .await?;

        Ok(filters.into_iter().next().map(|f| f.message))
    }

    async fn sequences(&self, destination: u32) -> Result<u32, ChainCommunicationError> {
        Ok(self.contract.sequences(destination).call().await?)
    }

    async fn enqueue(&self, message: &Message) -> Result<TxOutcome, ChainCommunicationError> {
        Ok(self
            .contract
            .enqueue(
                message.destination,
                message.recipient.to_fixed_bytes(),
                message.body.clone(),
            )
            .send()
            .await?
            .await?
            .into())
    }

    async fn improper_update(
        &self,
        update: &SignedUpdate,
    ) -> Result<TxOutcome, ChainCommunicationError> {
        Ok(self
            .contract
            .improper_update(
                update.update.previous_root.to_fixed_bytes(),
                update.update.new_root.to_fixed_bytes(),
                update.signature.to_vec(),
            )
            .send()
            .await?
            .await?
            .into())
    }

    async fn produce_update(&self) -> Result<Update, ChainCommunicationError> {
        let (a, b) = self.contract.suggest_update().call().await?;
        Ok(Update {
            origin_chain: self.origin_slip44(),
            previous_root: a.into(),
            new_root: b.into(),
        })
    }
}
