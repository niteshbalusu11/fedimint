window.SIDEBAR_ITEMS = {"attr":[["apply",""]],"enum":[["CoreError",""],["ParseAmountError",""]],"fn":[["msats","Shorthand for [`Amount::from_msats`]"],["sats","Shorthand for [`Amount::from_sats`]"]],"macro":[["__api_endpoint","Example"],["_dyn_newtype_define_inner",""],["_dyn_newtype_define_with_instance_id_inner",""],["_dyn_newtype_impl_deref_mut",""],["async_trait_maybe_send","async trait that use MaybeSend"],["deserialize_as_encodable_hex",""],["dyn_newtype_define","Define “dyn newtype” (a newtype over `dyn Trait`)"],["dyn_newtype_display_passthrough","Implements the `Display` trait for dyn newtypes whose traits implement `Display`"],["dyn_newtype_impl_dyn_clone_passhthrough","Implement `Clone` on a “dyn newtype”"],["erased_eq_no_instance_id",""],["impl_db_lookup",""],["impl_db_record","This is a helper macro that generates the implementations of `DatabaseRecord` necessary for reading/writing to the database and fetching by prefix."],["maybe_add_send","MaybeSync can not be used in `dyn $Trait + MaybeSend`"],["maybe_add_send_sync","See `maybe_add_send`"],["module_plugin_dyn_newtype_clone_passhthrough",""],["module_plugin_dyn_newtype_define","Define a “module plugin dyn-newtype” which is like a standard “dyn newtype”, but with associated “module_instance_id”."],["module_plugin_dyn_newtype_display_passthrough",""],["module_plugin_dyn_newtype_encode_decode","Implement `Encodable` and `Decodable` for a “module dyn newtype”"],["module_plugin_dyn_newtype_eq_passthrough",""],["module_plugin_static_trait_define","Define a “plugin” trait"],["plugin_types_trait_impl_common","Implements the necessary traits for all associated types of a `FederationServer` module."],["plugin_types_trait_impl_config","Implements the necessary traits for all configuration related types of a `FederationServer` module."],["push_db_key_items",""],["push_db_pair_items",""],["push_db_pair_items_no_serde",""],["serde_as_encodable_hex",""],["serialize_as_encodable_hex",""]],"mod":[["admin_client",""],["api",""],["backup",""],["bitcoinrpc",""],["cancellable",""],["config",""],["core","Fedimint Core API (common) module interface"],["db",""],["encoding","This module defines a binary encoding interface which is more suitable for consensus critical encoding than e.g. `bincode`. Over time all structs that need to be encoded to binary will be migrated to this interface."],["epoch",""],["fmt_utils",""],["hex",""],["macros",""],["module",""],["net",""],["outcome",""],["query",""],["task",""],["tiered",""],["tiered_multi",""],["time",""],["timing",""],["transaction",""],["txoproof",""],["util",""]],"struct":[["Amount","Represents an amount of BTC inside the system. The base denomination is milli satoshi for now, this is also why the amount type from rust-bitcoin isn’t used instead."],["Feerate",""],["OutPoint","`OutPoint` represents a globally unique output in a transaction"],["PeerId",""],["TransactionId","A transaction id for peg-ins, peg-outs and reissuances"]],"trait":[["BitcoinHash","Trait which applies to hashes of all types."],["NumPeers","for consensus-related calculations given the number of peers"]]};