var data = {lines:[
{"lineNum":"    1","line":"# Copyright 2019-2022 Afr Schoe @q9f"},
{"lineNum":"    2","line":"#"},
{"lineNum":"    3","line":"# Licensed under the Apache License, Version 2.0 (the \"License\");"},
{"lineNum":"    4","line":"# you may not use this file except in compliance with the License."},
{"lineNum":"    5","line":"# You may obtain a copy of the License at"},
{"lineNum":"    6","line":"#"},
{"lineNum":"    7","line":"#     http://www.apache.org/licenses/LICENSE-2.0"},
{"lineNum":"    8","line":"#"},
{"lineNum":"    9","line":"# Unless required by applicable law or agreed to in writing, software"},
{"lineNum":"   10","line":"# distributed under the License is distributed on an \"AS IS\" BASIS,"},
{"lineNum":"   11","line":"# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied."},
{"lineNum":"   12","line":"# See the License for the specific language governing permissions and"},
{"lineNum":"   13","line":"# limitations under the License."},
{"lineNum":"   14","line":""},
{"lineNum":"   15","line":"require \"./secp256k1\""},
{"lineNum":"   16","line":"include Secp256k1"},
{"lineNum":"   17","line":""},
{"lineNum":"   18","line":"# An example implementation of a `Bitcoin` account using an `Secp256k1`"},
{"lineNum":"   19","line":"# key-pair and a Bitcoin network version identifier; only for educational"},
{"lineNum":"   20","line":"# purposes and should not be used in production."},
{"lineNum":"   21","line":"module Bitcoin"},
{"lineNum":"   22","line":"  # The Base-58 alphabet for `Bitcoin` addresses is a Base-64 alphabet without"},
{"lineNum":"   23","line":"  # `0`, `O`, `I`, and `l` to omit similar-looking letters."},
{"lineNum":"   24","line":"  BASE_58 = \"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz\""},
{"lineNum":"   25","line":""},
{"lineNum":"   26","line":"  # An example implementation of a `Bitcoin` account using an `Secp256k1`"},
{"lineNum":"   27","line":"  # key-pair and a Bitcoin network version identifier; only for educational"},
{"lineNum":"   28","line":"  # purposes and should not be used in production."},
{"lineNum":"   29","line":"  class Account"},
{"lineNum":"   30","line":"    # The `Secp256k1` keypair for the account."},
{"lineNum":"   31","line":"    getter key : Key"},
{"lineNum":"   32","line":"    # The network version indicator."},
{"lineNum":"   33","line":"    getter version : Num"},
{"lineNum":"   34","line":"    # The public, uncompressed Bitcoin account address."},
{"lineNum":"   35","line":"    getter address : String"},
{"lineNum":"   36","line":"    # The public, compressed Bitcoin account address."},
{"lineNum":"   37","line":"    getter address_compressed : String"},
{"lineNum":"   38","line":"    # The private, uncompressed wallet-import format."},
{"lineNum":"   39","line":"    getter wif : String"},
{"lineNum":"   40","line":"    # The private, compressed wallet-import format."},
{"lineNum":"   41","line":"    getter wif_compressed : String"},
{"lineNum":"   42","line":""},
{"lineNum":"   43","line":"    # Creates a Bitcoin account from a given `Secp256k1::Key` keypay and for the"},
{"lineNum":"   44","line":"    # specified network version, e.g., `00` for Bitcoin main network. It creates"},
{"lineNum":"   45","line":"    # a random account if no parameters are supplied."},
{"lineNum":"   46","line":"    #"},
{"lineNum":"   47","line":"    # Parameters:"},
{"lineNum":"   48","line":"    # * `key` (`Secp256k1::Key`): the `Secp256k1` keypair for the account."},
{"lineNum":"   49","line":"    # * `version` (`Secp256k1::Num`): the network version indicator."},
{"lineNum":"   50","line":"    #"},
{"lineNum":"   51","line":"    # ```"},
{"lineNum":"   52","line":"    # priv = Secp256k1::Num.new \"18e14a7b6a307f426a94f8114701e7c8e774e7f9a47e2c2035db29a206321725\""},
{"lineNum":"   53","line":"    # key = Secp256k1::Key.new priv"},
{"lineNum":"   54","line":"    # account = Bitcoin::Account.new key"},
{"lineNum":"   55","line":"    # # => #<Bitcoin::Account:0x7f2611dcab40"},
{"lineNum":"   56","line":"    # #         @key=#<Secp256k1::Key:0x7f261ae90ee0"},
{"lineNum":"   57","line":"    # #               @private_key=#<Secp256k1::Num:0x7f261ae93300"},
{"lineNum":"   58","line":"    # #                   @hex=\"18e14a7b6a307f426a94f8114701e7c8e774e7f9a47e2c2035db29a206321725\","},
{"lineNum":"   59","line":"    # #                   @dec=11253563012059685825953619222107823549092147699031672238385790369351542642469,"},
{"lineNum":"   60","line":"    # #                   @bin=Bytes[24, 225, 74, 123, 106, 48, 127, 66, 106, 148, 248, 17, 71, 1, 231, 200, 231, 116, 231, 249, 164, 126, 44, 32, 53, 219, 41, 162, 6, 50, 23, 37]>,"},
{"lineNum":"   61","line":"    # #               @public_key=#<Secp256k1::Point:0x7f261ae90d20"},
{"lineNum":"   62","line":"    # #                   @x=#<Secp256k1::Num:0x7f2611dcabc0"},
{"lineNum":"   63","line":"    # #                       @hex=\"50863ad64a87ae8a2fe83c1af1a8403cb53f53e486d8511dad8a04887e5b2352\","},
{"lineNum":"   64","line":"    # #                       @dec=36422191471907241029883925342251831624200921388586025344128047678873736520530,"},
{"lineNum":"   65","line":"    # #                       @bin=Bytes[80, 134, 58, 214, 74, 135, 174, 138, 47, 232, 60, 26, 241, 168, 64, 60, 181, 63, 83, 228, 134, 216, 81, 29, 173, 138, 4, 136, 126, 91, 35, 82]>,"},
{"lineNum":"   66","line":"    # #                   @y=#<Secp256k1::Num:0x7f2611dcab80"},
{"lineNum":"   67","line":"    # #                       @hex=\"2cd470243453a299fa9e77237716103abc11a1df38855ed6f2ee187e9c582ba6\","},
{"lineNum":"   68","line":"    # #                       @dec=20277110887056303803699431755396003735040374760118964734768299847012543114150,"},
{"lineNum":"   69","line":"    # #                       @bin=Bytes[44, 212, 112, 36, 52, 83, 162, 153, 250, 158, 119, 35, 119, 22, 16, 58, 188, 17, 161, 223, 56, 133, 94, 214, 242, 238, 24, 126, 156, 88, 43, 166]>>>,"},
{"lineNum":"   70","line":"    # #         @version=#<Secp256k1::Num:0x7f2611dcab00"},
{"lineNum":"   71","line":"    # #               @hex=\"00\","},
{"lineNum":"   72","line":"    # #               @dec=0,"},
{"lineNum":"   73","line":"    # #               @bin=Bytes[0]>,"},
{"lineNum":"   74","line":"    # #         @address=\"16UwLL9Risc3QfPqBUvKofHmBQ7wMtjvM\","},
{"lineNum":"   75","line":"    # #         @address_compressed=\"1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs\","},
{"lineNum":"   76","line":"    # #         @wif=\"5J1F7GHadZG3sCCKHCwg8Jvys9xUbFsjLnGec4H125Ny1V9nR6V\","},
{"lineNum":"   77","line":"    # #         @wif_compressed=\"Kx45GeUBSMPReYQwgXiKhG9FzNXrnCeutJp4yjTd5kKxCitadm3C\">"},
{"lineNum":"   78","line":"    # ```"},
{"lineNum":"   79","line":"    def initialize(key = Key.new, version = Num.new \"0x00\")","class":"linePartCov","hits":"7","order":"89","possible_hits":"8",},
{"lineNum":"   80","line":"      if version.to_big < 0 || version.to_big > 127","class":"linePartCov","hits":"1","order":"94","possible_hits":"2",},
{"lineNum":"   81","line":"        raise \"Invalid version byte provided (out of range: #{version.to_prefixed_hex})\"","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   82","line":"      end"},
{"lineNum":"   83","line":"      @key = key","class":"lineCov","hits":"1","order":"95","possible_hits":"1",},
{"lineNum":"   84","line":"      @version = version","class":"lineCov","hits":"1","order":"96","possible_hits":"1",},
{"lineNum":"   85","line":"      @address = get_address","class":"lineCov","hits":"1","order":"97","possible_hits":"1",},
{"lineNum":"   86","line":"      @address_compressed = get_address true","class":"lineCov","hits":"1","order":"147","possible_hits":"1",},
{"lineNum":"   87","line":"      @wif = get_wif","class":"lineCov","hits":"1","order":"155","possible_hits":"1",},
{"lineNum":"   88","line":"      @wif_compressed = get_wif true","class":"lineCov","hits":"1","order":"168","possible_hits":"1",},
{"lineNum":"   89","line":"    end"},
{"lineNum":"   90","line":""},
{"lineNum":"   91","line":"    # Generates the public address for this account."},
{"lineNum":"   92","line":"    private def get_address(compressed = false) : String","class":"lineCov","hits":"4","order":"98","possible_hits":"4",},
{"lineNum":"   93","line":"      pub_key = Num.new @key.public_bytes","class":"lineCov","hits":"1","order":"99","possible_hits":"1",},
{"lineNum":"   94","line":"      if compressed","class":"lineCov","hits":"1","order":"112","possible_hits":"1",},
{"lineNum":"   95","line":"        pub_key = Num.new @key.public_bytes_compressed","class":"lineCov","hits":"1","order":"148","possible_hits":"1",},
{"lineNum":"   96","line":"      end"},
{"lineNum":"   97","line":"      hash_0 = Util.sha256 pub_key.to_zpadded_bytes pub_key.bin.size","class":"lineCov","hits":"1","order":"113","possible_hits":"1",},
{"lineNum":"   98","line":"      hash_1 = Util.ripemd160 hash_0.to_zpadded_bytes","class":"lineCov","hits":"1","order":"120","possible_hits":"1",},
{"lineNum":"   99","line":"      versioned = Util.concat_bytes @version.to_bytes, hash_1.to_zpadded_bytes 20","class":"lineCov","hits":"1","order":"124","possible_hits":"1",},
{"lineNum":"  100","line":"      hash_2 = Util.sha256 versioned","class":"lineCov","hits":"1","order":"130","possible_hits":"1",},
{"lineNum":"  101","line":"      hash_3 = Util.sha256 hash_2.to_zpadded_bytes","class":"lineCov","hits":"1","order":"131","possible_hits":"1",},
{"lineNum":"  102","line":"      binary = Util.concat_bytes versioned, hash_3.to_zpadded_bytes[0, 4]","class":"lineCov","hits":"1","order":"132","possible_hits":"1",},
{"lineNum":"  103","line":"      encode_base58 Num.new binary","class":"lineCov","hits":"1","order":"133","possible_hits":"1",},
{"lineNum":"  104","line":"    end"},
{"lineNum":"  105","line":""},
{"lineNum":"  106","line":"    # Generates the private wallet-import format for this account."},
{"lineNum":"  107","line":"    private def get_wif(compressed = false) : String","class":"lineCov","hits":"4","order":"156","possible_hits":"4",},
{"lineNum":"  108","line":"      wif_version = Num.new @version.dec + 128","class":"lineCov","hits":"1","order":"157","possible_hits":"1",},
{"lineNum":"  109","line":"      compression_byte = \"\"","class":"lineCov","hits":"1","order":"158","possible_hits":"1",},
{"lineNum":"  110","line":"      if compressed","class":"lineCov","hits":"1","order":"159","possible_hits":"1",},
{"lineNum":"  111","line":"        compression_byte = \"01\"","class":"lineCov","hits":"1","order":"169","possible_hits":"1",},
{"lineNum":"  112","line":"      end"},
{"lineNum":"  113","line":"      versioned = Num.new \"#{wif_version.to_hex}#{@key.private_hex}#{compression_byte}\"","class":"lineCov","hits":"1","order":"160","possible_hits":"1",},
{"lineNum":"  114","line":"      hash_0 = Util.sha256 versioned","class":"lineCov","hits":"1","order":"163","possible_hits":"1",},
{"lineNum":"  115","line":"      hash_1 = Util.sha256 hash_0","class":"lineCov","hits":"1","order":"165","possible_hits":"1",},
{"lineNum":"  116","line":"      binary = Util.concat_bytes versioned.to_bytes, hash_1.to_zpadded_bytes[0, 4]","class":"lineCov","hits":"1","order":"166","possible_hits":"1",},
{"lineNum":"  117","line":"      encode_base58 Num.new binary","class":"lineCov","hits":"1","order":"167","possible_hits":"1",},
{"lineNum":"  118","line":"    end"},
{"lineNum":"  119","line":""},
{"lineNum":"  120","line":"    # Encode a given numeric with BASE58."},
{"lineNum":"  121","line":"    private def encode_base58(num : Num) : String","class":"lineCov","hits":"1","order":"134","possible_hits":"1",},
{"lineNum":"  122","line":"      big = num.to_big","class":"lineCov","hits":"1","order":"135","possible_hits":"1",},
{"lineNum":"  123","line":"      hex = num.to_hex","class":"lineCov","hits":"1","order":"136","possible_hits":"1",},
{"lineNum":"  124","line":"      encoded = String.new","class":"lineCov","hits":"1","order":"137","possible_hits":"1",},
{"lineNum":"  125","line":"      while big > 0","class":"lineCov","hits":"1","order":"138","possible_hits":"1",},
{"lineNum":"  126","line":"        big, rem = big.divmod 58","class":"lineCov","hits":"1","order":"139","possible_hits":"1",},
{"lineNum":"  127","line":"        encoded += BASE_58[rem.to_i % 58]","class":"lineCov","hits":"1","order":"140","possible_hits":"1",},
{"lineNum":"  128","line":"      end"},
{"lineNum":"  129","line":"      i, s = 0, 2","class":"lineCov","hits":"1","order":"141","possible_hits":"1",},
{"lineNum":"  130","line":"      current_byte = hex[i, s]","class":"lineCov","hits":"1","order":"142","possible_hits":"1",},
{"lineNum":"  131","line":"      while current_byte.to_i(16) === 0","class":"lineCov","hits":"1","order":"143","possible_hits":"1",},
{"lineNum":"  132","line":"        encoded = \"#{encoded}1\"","class":"lineCov","hits":"1","order":"144","possible_hits":"1",},
{"lineNum":"  133","line":"        i += s","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"  134","line":"        current_byte = hex[i, s]","class":"lineCov","hits":"2","order":"145","possible_hits":"2",},
{"lineNum":"  135","line":"      end"},
{"lineNum":"  136","line":"      encoded.reverse","class":"lineCov","hits":"1","order":"146","possible_hits":"1",},
{"lineNum":"  137","line":"    end"},
{"lineNum":"  138","line":"  end"},
{"lineNum":"  139","line":"end"},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "run_coverage", "date" : "2022-04-06 14:26:02", "instrumented" : 44, "covered" : 42,};
var merged_data = [];
