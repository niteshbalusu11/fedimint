(function() {var implementors = {
"fedimint_api":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"fedimint_api/cancellable/struct.Cancelled.html\" title=\"struct fedimint_api::cancellable::Cancelled\">Cancelled</a>"],["impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"fedimint_api/db/enum.AutocommitError.html\" title=\"enum fedimint_api::db::AutocommitError\">AutocommitError</a>&lt;E&gt;<span class=\"where fmt-newline\">where<br>    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"fedimint_api/db/enum.DecodingError.html\" title=\"enum fedimint_api::db::DecodingError\">DecodingError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"fedimint_api/encoding/struct.DecodeError.html\" title=\"struct fedimint_api::encoding::DecodeError\">DecodeError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"fedimint_api/encoding/struct.StrError.html\" title=\"struct fedimint_api::encoding::StrError\">StrError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"fedimint_api/module/enum.ModuleError.html\" title=\"enum fedimint_api::module::ModuleError\">ModuleError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"fedimint_api/task/struct.Elapsed.html\" title=\"struct fedimint_api::task::Elapsed\">Elapsed</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"fedimint_api/enum.ParseAmountError.html\" title=\"enum fedimint_api::ParseAmountError\">ParseAmountError</a>"]],
"fedimint_cli":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"fedimint_cli/struct.CliError.html\" title=\"struct fedimint_cli::CliError\">CliError</a>"]],
"fedimint_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"fedimint_core/transaction/enum.TransactionError.html\" title=\"enum fedimint_core::transaction::TransactionError\">TransactionError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"fedimint_core/enum.CoreError.html\" title=\"enum fedimint_core::CoreError\">CoreError</a>"]],
"fedimint_dummy":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"fedimint_dummy/enum.DummyError.html\" title=\"enum fedimint_dummy::DummyError\">DummyError</a>"]],
"fedimint_ln":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"fedimint_ln/enum.LightningError.html\" title=\"enum fedimint_ln::LightningError\">LightningError</a>"]],
"fedimint_mint":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"fedimint_mint/enum.CombineError.html\" title=\"enum fedimint_mint::CombineError\">CombineError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"fedimint_mint/enum.MintError.html\" title=\"enum fedimint_mint::MintError\">MintError</a>"]],
"fedimint_server":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"fedimint_server/consensus/enum.TransactionSubmissionError.html\" title=\"enum fedimint_server::consensus::TransactionSubmissionError\">TransactionSubmissionError</a>"]],
"fedimint_wallet":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"fedimint_wallet/txoproof/enum.PegInProofError.html\" title=\"enum fedimint_wallet::txoproof::PegInProofError\">PegInProofError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"fedimint_wallet/enum.WalletError.html\" title=\"enum fedimint_wallet::WalletError\">WalletError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"fedimint_wallet/enum.ProcessPegOutSigError.html\" title=\"enum fedimint_wallet::ProcessPegOutSigError\">ProcessPegOutSigError</a>"]],
"gateway_cln_extension":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"gateway_cln_extension/enum.ClnExtensionError.html\" title=\"enum gateway_cln_extension::ClnExtensionError\">ClnExtensionError</a>"]],
"ln_gateway":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"ln_gateway/enum.LnGatewayError.html\" title=\"enum ln_gateway::LnGatewayError\">LnGatewayError</a>"]],
"mint_client":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"mint_client/api/enum.MemberError.html\" title=\"enum mint_client::api::MemberError\">MemberError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"mint_client/api/struct.FederationError.html\" title=\"struct mint_client::api::FederationError\">FederationError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"mint_client/api/enum.OutputOutcomeError.html\" title=\"enum mint_client::api::OutputOutcomeError\">OutputOutcomeError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"mint_client/ln/enum.LnClientError.html\" title=\"enum mint_client::ln::LnClientError\">LnClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"mint_client/mint/enum.NoteFinalizationError.html\" title=\"enum mint_client::mint::NoteFinalizationError\">NoteFinalizationError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"mint_client/mint/enum.MintClientError.html\" title=\"enum mint_client::mint::MintClientError\">MintClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"mint_client/wallet/enum.WalletClientError.html\" title=\"enum mint_client::wallet::WalletClientError\">WalletClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"mint_client/enum.ConfigVerifyError.html\" title=\"enum mint_client::ConfigVerifyError\">ConfigVerifyError</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()