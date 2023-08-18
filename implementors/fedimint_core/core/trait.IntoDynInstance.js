(function() {var implementors = {
"fedimint_client":[["impl&lt;S&gt; IntoDynInstance for <a class=\"struct\" href=\"fedimint_client/sm/state/struct.OperationState.html\" title=\"struct fedimint_client::sm::state::OperationState\">OperationState</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"fedimint_client/sm/state/trait.State.html\" title=\"trait fedimint_client::sm::state::State\">State</a>,</span>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_client/transaction/sm/struct.TxSubmissionContext.html\" title=\"struct fedimint_client::transaction::sm::TxSubmissionContext\">TxSubmissionContext</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_client/transaction/sm/enum.TxSubmissionStates.html\" title=\"enum fedimint_client::transaction::sm::TxSubmissionStates\">TxSubmissionStates</a>"],["impl&lt;O, S&gt; IntoDynInstance for <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientOutput.html\" title=\"struct fedimint_client::transaction::builder::ClientOutput\">ClientOutput</a>&lt;O, S&gt;<span class=\"where fmt-newline\">where\n    O: IntoDynInstance&lt;DynType = DynOutput&gt; + 'static,\n    S: IntoDynInstance&lt;DynType = <a class=\"struct\" href=\"fedimint_client/sm/state/struct.DynState.html\" title=\"struct fedimint_client::sm::state::DynState\">DynState</a>&lt;<a class=\"struct\" href=\"fedimint_client/struct.DynGlobalClientContext.html\" title=\"struct fedimint_client::DynGlobalClientContext\">DynGlobalClientContext</a>&gt;&gt; + 'static,</span>"],["impl&lt;I, S&gt; IntoDynInstance for <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientInput.html\" title=\"struct fedimint_client::transaction::builder::ClientInput\">ClientInput</a>&lt;I, S&gt;<span class=\"where fmt-newline\">where\n    I: IntoDynInstance&lt;DynType = DynInput&gt; + 'static,\n    S: IntoDynInstance&lt;DynType = <a class=\"struct\" href=\"fedimint_client/sm/state/struct.DynState.html\" title=\"struct fedimint_client::sm::state::DynState\">DynState</a>&lt;<a class=\"struct\" href=\"fedimint_client/struct.DynGlobalClientContext.html\" title=\"struct fedimint_client::DynGlobalClientContext\">DynGlobalClientContext</a>&gt;&gt; + 'static,</span>"]],
"fedimint_dummy_client":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_dummy_client/states/enum.DummyStateMachine.html\" title=\"enum fedimint_dummy_client::states::DummyStateMachine\">DummyStateMachine</a>"]],
"fedimint_dummy_common":[["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_dummy_common/struct.DummyOutputOutcome.html\" title=\"struct fedimint_dummy_common::DummyOutputOutcome\">DummyOutputOutcome</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_dummy_common/struct.DummyOutput.html\" title=\"struct fedimint_dummy_common::DummyOutput\">DummyOutput</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_dummy_common/struct.DummyInput.html\" title=\"struct fedimint_dummy_common::DummyInput\">DummyInput</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_dummy_common/enum.DummyConsensusItem.html\" title=\"enum fedimint_dummy_common::DummyConsensusItem\">DummyConsensusItem</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_dummy_common/config/struct.DummyClientConfig.html\" title=\"struct fedimint_dummy_common::config::DummyClientConfig\">DummyClientConfig</a>"]],
"fedimint_ln_client":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_ln_client/enum.LightningClientStateMachines.html\" title=\"enum fedimint_ln_client::LightningClientStateMachines\">LightningClientStateMachines</a>"]],
"fedimint_ln_common":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_ln_common/enum.LightningOutputOutcome.html\" title=\"enum fedimint_ln_common::LightningOutputOutcome\">LightningOutputOutcome</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_ln_common/enum.LightningOutput.html\" title=\"enum fedimint_ln_common::LightningOutput\">LightningOutput</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_ln_common/enum.LightningConsensusItem.html\" title=\"enum fedimint_ln_common::LightningConsensusItem\">LightningConsensusItem</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_ln_common/config/struct.LightningClientConfig.html\" title=\"struct fedimint_ln_common::config::LightningClientConfig\">LightningClientConfig</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_ln_common/struct.LightningInput.html\" title=\"struct fedimint_ln_common::LightningInput\">LightningInput</a>"]],
"fedimint_mint_client":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_mint_client/enum.MintClientStateMachines.html\" title=\"enum fedimint_mint_client::MintClientStateMachines\">MintClientStateMachines</a>"]],
"fedimint_mint_common":[["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_mint_common/struct.MintInput.html\" title=\"struct fedimint_mint_common::MintInput\">MintInput</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_mint_common/struct.MintOutputOutcome.html\" title=\"struct fedimint_mint_common::MintOutputOutcome\">MintOutputOutcome</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_mint_common/struct.MintConsensusItem.html\" title=\"struct fedimint_mint_common::MintConsensusItem\">MintConsensusItem</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_mint_common/struct.MintOutput.html\" title=\"struct fedimint_mint_common::MintOutput\">MintOutput</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_mint_common/config/struct.MintClientConfig.html\" title=\"struct fedimint_mint_common::config::MintClientConfig\">MintClientConfig</a>"]],
"fedimint_wallet_client":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_wallet_client/enum.WalletClientStates.html\" title=\"enum fedimint_wallet_client::WalletClientStates\">WalletClientStates</a>"]],
"fedimint_wallet_common":[["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_wallet_common/config/struct.WalletClientConfig.html\" title=\"struct fedimint_wallet_common::config::WalletClientConfig\">WalletClientConfig</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_wallet_common/struct.WalletInput.html\" title=\"struct fedimint_wallet_common::WalletInput\">WalletInput</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_wallet_common/enum.WalletOutput.html\" title=\"enum fedimint_wallet_common::WalletOutput\">WalletOutput</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_wallet_common/struct.WalletOutputOutcome.html\" title=\"struct fedimint_wallet_common::WalletOutputOutcome\">WalletOutputOutcome</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_wallet_common/enum.WalletConsensusItem.html\" title=\"enum fedimint_wallet_common::WalletConsensusItem\">WalletConsensusItem</a>"]],
"ln_gateway":[["impl <a class=\"trait\" href=\"fedimint_core/core/trait.IntoDynInstance.html\" title=\"trait fedimint_core::core::IntoDynInstance\">IntoDynInstance</a> for <a class=\"enum\" href=\"ln_gateway/ng/enum.GatewayClientStateMachines.html\" title=\"enum ln_gateway::ng::GatewayClientStateMachines\">GatewayClientStateMachines</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()