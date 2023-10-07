(function() {var implementors = {
"fedimint_client":[["impl&lt;GC&gt; <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_client/sm/executor/struct.InactiveStateKey.html\" title=\"struct fedimint_client::sm::executor::InactiveStateKey\">InactiveStateKey</a>&lt;GC&gt;<span class=\"where fmt-newline\">where\n    GC: <a class=\"trait\" href=\"fedimint_client/sm/trait.GlobalContext.html\" title=\"trait fedimint_client::sm::GlobalContext\">GlobalContext</a>,</span>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_client/db/struct.CachedApiVersionSetKey.html\" title=\"struct fedimint_client::db::CachedApiVersionSetKey\">CachedApiVersionSetKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_client/db/struct.OperationLogKey.html\" title=\"struct fedimint_client::db::OperationLogKey\">OperationLogKey</a>"],["impl&lt;GC&gt; <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_client/sm/executor/struct.ActiveStateKey.html\" title=\"struct fedimint_client::sm::executor::ActiveStateKey\">ActiveStateKey</a>&lt;GC&gt;<span class=\"where fmt-newline\">where\n    GC: <a class=\"trait\" href=\"fedimint_client/sm/trait.GlobalContext.html\" title=\"trait fedimint_client::sm::GlobalContext\">GlobalContext</a>,</span>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_client/db/struct.ClientConfigKey.html\" title=\"struct fedimint_client::db::ClientConfigKey\">ClientConfigKey</a>"],["impl&lt;S&gt; <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_client/db/struct.ClientSecretKey.html\" title=\"struct fedimint_client::db::ClientSecretKey\">ClientSecretKey</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"fedimint_client/secret/trait.RootSecretStrategy.html\" title=\"trait fedimint_client::secret::RootSecretStrategy\">RootSecretStrategy</a>,</span>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_client/db/struct.ChronologicalOperationLogKey.html\" title=\"struct fedimint_client::db::ChronologicalOperationLogKey\">ChronologicalOperationLogKey</a>"]],
"fedimint_core":[],
"fedimint_dummy_client":[["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_dummy_client/db/struct.DummyClientFundsKeyV0.html\" title=\"struct fedimint_dummy_client::db::DummyClientFundsKeyV0\">DummyClientFundsKeyV0</a>"]],
"fedimint_dummy_server":[["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_dummy_server/db/struct.DummySignatureKey.html\" title=\"struct fedimint_dummy_server::db::DummySignatureKey\">DummySignatureKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_dummy_server/db/struct.DummySignatureShareKey.html\" title=\"struct fedimint_dummy_server::db::DummySignatureShareKey\">DummySignatureShareKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_dummy_server/db/struct.DummyFundsKeyV1.html\" title=\"struct fedimint_dummy_server::db::DummyFundsKeyV1\">DummyFundsKeyV1</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_dummy_server/db/struct.DummyFundsKeyV0.html\" title=\"struct fedimint_dummy_server::db::DummyFundsKeyV0\">DummyFundsKeyV0</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_dummy_server/db/struct.DummyOutcomeKey.html\" title=\"struct fedimint_dummy_server::db::DummyOutcomeKey\">DummyOutcomeKey</a>"]],
"fedimint_ln_client":[["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_ln_client/db/struct.LightningGatewayKey.html\" title=\"struct fedimint_ln_client::db::LightningGatewayKey\">LightningGatewayKey</a>"]],
"fedimint_ln_common":[["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_ln_common/db/struct.ProposeDecryptionShareKey.html\" title=\"struct fedimint_ln_common::db::ProposeDecryptionShareKey\">ProposeDecryptionShareKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_ln_common/db/struct.ContractUpdateKey.html\" title=\"struct fedimint_ln_common::db::ContractUpdateKey\">ContractUpdateKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_ln_common/db/struct.BlockCountVoteKey.html\" title=\"struct fedimint_ln_common::db::BlockCountVoteKey\">BlockCountVoteKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"enum\" href=\"fedimint_ln_common/db/enum.LightningAuditItemKey.html\" title=\"enum fedimint_ln_common::db::LightningAuditItemKey\">LightningAuditItemKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_ln_common/db/struct.LightningGatewayKey.html\" title=\"struct fedimint_ln_common::db::LightningGatewayKey\">LightningGatewayKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_ln_common/db/struct.OfferKey.html\" title=\"struct fedimint_ln_common::db::OfferKey\">OfferKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_ln_common/db/struct.EncryptedPreimageIndexKey.html\" title=\"struct fedimint_ln_common::db::EncryptedPreimageIndexKey\">EncryptedPreimageIndexKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_ln_common/db/struct.AgreedDecryptionShareKey.html\" title=\"struct fedimint_ln_common::db::AgreedDecryptionShareKey\">AgreedDecryptionShareKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_ln_common/db/struct.ContractKey.html\" title=\"struct fedimint_ln_common::db::ContractKey\">ContractKey</a>"]],
"fedimint_mint_client":[["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_mint_client/client_db/struct.NoteKey.html\" title=\"struct fedimint_mint_client::client_db::NoteKey\">NoteKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_mint_client/client_db/struct.NextECashNoteIndexKey.html\" title=\"struct fedimint_mint_client::client_db::NextECashNoteIndexKey\">NextECashNoteIndexKey</a>"]],
"fedimint_mint_common":[["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"enum\" href=\"fedimint_mint_common/db/enum.MintAuditItemKey.html\" title=\"enum fedimint_mint_common::db::MintAuditItemKey\">MintAuditItemKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_mint_common/db/struct.ReceivedPartialSignatureKey.html\" title=\"struct fedimint_mint_common::db::ReceivedPartialSignatureKey\">ReceivedPartialSignatureKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_mint_common/db/struct.NonceKey.html\" title=\"struct fedimint_mint_common::db::NonceKey\">NonceKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_mint_common/db/struct.EcashBackupKey.html\" title=\"struct fedimint_mint_common::db::EcashBackupKey\">EcashBackupKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_mint_common/db/struct.ProposedPartialSignatureKey.html\" title=\"struct fedimint_mint_common::db::ProposedPartialSignatureKey\">ProposedPartialSignatureKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_mint_common/db/struct.OutputOutcomeKey.html\" title=\"struct fedimint_mint_common::db::OutputOutcomeKey\">OutputOutcomeKey</a>"]],
"fedimint_server":[["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_server/db/struct.SignedBlockKey.html\" title=\"struct fedimint_server::db::SignedBlockKey\">SignedBlockKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_server/db/struct.AcceptedItemKey.html\" title=\"struct fedimint_server::db::AcceptedItemKey\">AcceptedItemKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_server/db/struct.AcceptedTransactionKey.html\" title=\"struct fedimint_server::db::AcceptedTransactionKey\">AcceptedTransactionKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_server/db/struct.AlephUnitsKey.html\" title=\"struct fedimint_server::db::AlephUnitsKey\">AlephUnitsKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_server/db/struct.ClientConfigSignatureKey.html\" title=\"struct fedimint_server::db::ClientConfigSignatureKey\">ClientConfigSignatureKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_server/db/struct.ClientConfigDownloadKey.html\" title=\"struct fedimint_server::db::ClientConfigDownloadKey\">ClientConfigDownloadKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_server/db/struct.ClientConfigSignatureShareKey.html\" title=\"struct fedimint_server::db::ClientConfigSignatureShareKey\">ClientConfigSignatureShareKey</a>"]],
"fedimint_wallet_client":[["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_wallet_client/client_db/struct.NextPegInTweakIndexKey.html\" title=\"struct fedimint_wallet_client::client_db::NextPegInTweakIndexKey\">NextPegInTweakIndexKey</a>"]],
"fedimint_wallet_common":[["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_wallet_common/db/struct.UTXOKey.html\" title=\"struct fedimint_wallet_common::db::UTXOKey\">UTXOKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_wallet_common/db/struct.PegOutBitcoinTransaction.html\" title=\"struct fedimint_wallet_common::db::PegOutBitcoinTransaction\">PegOutBitcoinTransaction</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_wallet_common/db/struct.BlockHashKey.html\" title=\"struct fedimint_wallet_common::db::BlockHashKey\">BlockHashKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_wallet_common/db/struct.FeeRateVoteKey.html\" title=\"struct fedimint_wallet_common::db::FeeRateVoteKey\">FeeRateVoteKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_wallet_common/db/struct.PegOutNonceKey.html\" title=\"struct fedimint_wallet_common::db::PegOutNonceKey\">PegOutNonceKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_wallet_common/db/struct.UnsignedTransactionKey.html\" title=\"struct fedimint_wallet_common::db::UnsignedTransactionKey\">UnsignedTransactionKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_wallet_common/db/struct.PegOutTxSignatureCI.html\" title=\"struct fedimint_wallet_common::db::PegOutTxSignatureCI\">PegOutTxSignatureCI</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_wallet_common/db/struct.BlockCountVoteKey.html\" title=\"struct fedimint_wallet_common::db::BlockCountVoteKey\">BlockCountVoteKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"fedimint_wallet_common/db/struct.PendingTransactionKey.html\" title=\"struct fedimint_wallet_common::db::PendingTransactionKey\">PendingTransactionKey</a>"]],
"ln_gateway":[["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"ln_gateway/db/struct.GatewayConfigurationKey.html\" title=\"struct ln_gateway::db::GatewayConfigurationKey\">GatewayConfigurationKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"ln_gateway/db/struct.FederationIdKey.html\" title=\"struct ln_gateway::db::FederationIdKey\">FederationIdKey</a>"],["impl <a class=\"trait\" href=\"fedimint_core/db/trait.DatabaseRecord.html\" title=\"trait fedimint_core::db::DatabaseRecord\">DatabaseRecord</a> for <a class=\"struct\" href=\"ln_gateway/db/struct.GatewayPublicKey.html\" title=\"struct ln_gateway::db::GatewayPublicKey\">GatewayPublicKey</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()