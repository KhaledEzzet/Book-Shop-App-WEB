'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "55c3769e8e1a153e010caa44fbc17694",
".git/config": "091ed88472cea85be0a69c09e192ebe0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a16c3bb6cf50eb7745fdbfc7125ac6bc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b64b1fc4cd283529ff43cfd25f85a73a",
".git/logs/refs/heads/main": "21a3428c0c5578565424a22e58092b01",
".git/logs/refs/remotes/origin/main": "44548461dee2ae058b9fdd59605cc850",
".git/objects/00/4ac4f69f83bce9514399ad7809d4b10c041986": "ef2393cb8c6c211d2e2090fda5a4e20d",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/05/a7a6fe2d795f1bd6882ab2c8974456dbb6d97e": "e4403e08ef42722c085d8db93a7adf27",
".git/objects/06/785c563e681a6c802dee0fb2a94dfce733cee4": "7bfef54ff7555b642453c097e8bfbd7e",
".git/objects/0c/db4c7ed2350ca2821f85fd595d090f2c0628f3": "48b9a9f3d307177c55a9fa497099748b",
".git/objects/0c/e8882719381c6be746bf6eaa56b9641aa4c0b6": "0efb48ba320e1c9a636e129de27a3fe2",
".git/objects/0c/fa46e060f6b0187b1cd11aa310bfcdb682c88a": "379adcdf572f6bef98a148bb14457633",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/cab9c8e0ec071708c672d89aa0f93595faf15c": "8f1dc4983fcc2e8b3d4df9b49acba547",
".git/objects/11/d2bf5a56055439a6d2832b381457685976bd12": "4ece30af11249d94cbbb1c8908585091",
".git/objects/13/37cf0a991cca868bbdf61a227ba2c42f6514dd": "49a21e9c04eefeb75ad85d570d3ae2f7",
".git/objects/15/b609a5ed7e0d998e23d14c9f00a588f027f81b": "849eaa1545b206a13d1fa1cfdb41234c",
".git/objects/19/0c2a94ab5b54a28f57470618eceb71c4a5dba7": "b9b9e657316b2e53bc63d5970474f6ad",
".git/objects/1a/8fe6413935ea635921bc35151bd3ea69c22e88": "19e60f5bc6222b1b9323c8f1c22f3eab",
".git/objects/1b/916a3c51ae10d335e974080d826f0adcfdf673": "bcdd4429286f718c8b300fa2f622c1b6",
".git/objects/1c/6d9c9b62f1851ca6a454fc3455bb924b77b4be": "1c8843ec5841b577c0d6c088bbaa06ef",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/14daabf9623e9d389c5366186987a6b5f6da65": "1dcac1dfcd3a4ed7977e6a6b0c43c4a0",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/31/9a87bd441de0c1546bd78831ba7f2a483f6a21": "6d821ba6f0a6207cdba133c3731c8af5",
".git/objects/32/6f2f19d42ebb4120a60488f338d5ee6458614b": "d2e875daaac94ab16ea43d6b95450ea4",
".git/objects/33/3d6f65f1ac61c69618aee87a83336206cb3d6f": "4a4090e0252eb0bf7247dcfc2e0e7f21",
".git/objects/35/a7bf4f88fd57885448070b2452d33cf0a47e89": "faaafdf50e6df33c8e06a27fc6da698b",
".git/objects/3d/7a9f7337490bbb46ed6c8da9041f1abb4a5dfe": "59caf57342bdbecb3cace3cdb005c201",
".git/objects/48/2a901db2a9903430f99d9e3951b378a43831eb": "21371cd21545d27b2c122e7992cd0648",
".git/objects/4b/38bbad77cc4808c6c6fe27e36a4c27e25b8ee1": "6d8012da1950e597e7ee38ed2f76df1a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/c4f6e80156ac8aa2cafdaad8f478af7a7c62a5": "9d01629fd5817d4a92be61f880deb227",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4d/df8eaca3557bf0ba9ff0b931e39158e6fdfeca": "b655a2b8b32a16bb7a0bf6668abae747",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/7e7bb598696b410b77f9b41e87d2d6a587666c": "ac42d4cdec84bc25d2abeef99aea4d94",
".git/objects/50/4f892b97faca3430f1123aa6163a190cbe0c08": "a9739536e3423dfb95dc634aca7e9d90",
".git/objects/53/724f0ee0b0877100057b14cb547eece1e77659": "cfd7ce3316ac6ce81353f6cebb02bb0f",
".git/objects/54/3c359e0b9df4922ca995d1f2f4f9fbe785a59d": "51bbf42e8792178f314f255b58ea76c6",
".git/objects/56/6db266381a89463126356fa492c3cf2938ff22": "4d7b64215e3352d85f280b0466142029",
".git/objects/57/6a94f6ab65036d861cd9b9883806942f6c2218": "06772297725d184b4c1f83c6d2b21a79",
".git/objects/5c/fbae1e414394d37f4b9e665ffba2852e7ac138": "eff1a99b44cd3e31fba44b70349430d8",
".git/objects/61/25401ce154ceecb8f7bc3a9602c14f405a94fe": "2b8141025e72859d6f41b0cd5d0919c9",
".git/objects/64/ae2259302138ae36b4f908b49f9ddda55a05b7": "5ab4b14929640c28395e0b82a27aabed",
".git/objects/65/294c8d345d9a9f6fd759d7c8aaa5712fdb2a28": "562bcf7e749c9adb3cbd0b05b31168c9",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/71/0d1693c3bb457b7377eeaec32880a1b007af9b": "91eb2972e1419a37ffa9c1a3d03226ff",
".git/objects/72/feab05bfd26345f02fcc46604cb86248162648": "c30cef65dafb46bad2c5a920333c6c3b",
".git/objects/74/9cdaf82af1d016ab9eb1808e4984b0f1e7a081": "52900a33972b947d672cb1016cda1557",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/e67ed5e44726568a5c68799b43c76323eaac6b": "b483deff585e5d76f4541c326f02c130",
".git/objects/77/e58760cbcba27e78c6739607c83aa56f55f9ed": "e3a854772bddd6793f54067b2b9bea5b",
".git/objects/78/aaed97f9e1a3f91d75fdd25e8f91ef9b0d3246": "6f2a10dba37aee7e335592d47b78290c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/8b36ba3436c3bd4b20dfcc46950180c9e3ce1c": "781ba80c94c3b2306565ee12e75f171e",
".git/objects/7f/38f9be5601cf8456bae4b559e68f77606e556b": "de8af1ff60799b43ca468c1e66b38638",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/472464b4ab24b8b6bbbca4a1e30cfd389658c2": "3a63963aaad5bc00ee2bdeef1497a0b6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/0562ef941c3a4c28023ee03c761408fe4e1b45": "0d4dd04ffe15567f4a419f990f92a1b8",
".git/objects/8f/734da912cb1269edc1e1733635f5222f2b36f4": "4e50657627b37ad28343a071742d333c",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/92/006f622bd85601cb5372ca6da53059bcf79b66": "26311308e152df0a84fe8b4b54eb5722",
".git/objects/95/54e10e86dc9fa482a6af68f90c08e0e5503e7b": "eb925eb82e7ada3ceee8cece9ec50f79",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/aece2b2285d1483171d37b1c0772b30b0a94e3": "dc8520d5243c08e69f26228db17792aa",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/001306eaf6a6a43ae828fbcb117ba0641933a0": "ec797bf6e8143ba83cf1e019979ac18f",
".git/objects/a4/cedee864b14a0bbd47d5d1ffc5aa379fafab8b": "530cafa66c17e569fca2b9ef611a1a3c",
".git/objects/a5/0f63296359183a79aec747244fa1185c27b860": "a7456215e69f7f5f9349266360b2a3f8",
".git/objects/a5/7b2e999045a185f28ba211643f8d4535057e30": "018219273c065162f9d3d7b8d5dafdb2",
".git/objects/a9/e2e7ab5b8ac4bb8e2b762311e96c18bce66203": "8cc5d2ee2bee781c6f0625dd9981a0cd",
".git/objects/aa/7cc029082ba129b8a7ecbac0e7d3a396466c51": "f03c79c10e0f4c2bf6eca1bb511eb632",
".git/objects/ac/b34d92fdb1c9aac2d46281e42d5de0e932270c": "a36cce7bf61165dff26c8b43b830611b",
".git/objects/ad/b674e210a721037688014eefbe1a588e82ef55": "93e1773d10dd8d3de4bdd548fd01bba4",
".git/objects/ae/aa5bed41d7124bf3d2908dcd2ad556cbb68b86": "f1945f15872dde249993d13febb30836",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/5446424a14a2581f28e37ce7096903dd9ee1e7": "f519ff08c5436715cd103efa5c52a144",
".git/objects/bc/a7d8a8c01d0c01b7bf40f48cf219aaa3e48f90": "d40d8a5b74cf73d041ecfc1419bf6132",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/bf/7d9257a4e113ff824fc5eaea2cd64cfe48cab4": "73f565104845037c88c50641f7d96474",
".git/objects/bf/a1d9ca6df962d508834c169cf0c73b943bcdf5": "85d4a35d7bc72db1ed8a00a7945ac4e2",
".git/objects/c0/6f13c827c5caa1f667118ac41e58371c699004": "b8b0a0abb3ec5038dd9fee38aaaa3072",
".git/objects/ca/1c4e4a6a2901f341d51c1f0329dcfb355e9c97": "7f49c3b9b8ae4a3b0a3079e3c5be63ed",
".git/objects/cb/8b58f2bfb9d9509132e0152d49170c5ab2afc0": "5cfe21714a1a29b056ecf9d6162f58ff",
".git/objects/cc/5b967287fdab5575a809f6203ab0ff9f53422f": "381ffb8ae3a0cf0b87c20f2656a6c8e4",
".git/objects/cc/aba1a86ca13fa394bfc3fa511bc5be0a20bb18": "8cc46accc2a7993da7a897c24d70cdd6",
".git/objects/cc/dccd56c936d1f8a10193377a8f727417209736": "9ad8b47f7dff38c7b8b8ba12837bde35",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/fbf679ea6d372bc8c2cf4f9fa7683679e67cdd": "0f8eacb2100a5556bd6eb10debfdbd26",
".git/objects/d2/e92a6818cd0b93caa07c6424e792cfae72b22f": "939d36282ddc3eb596d9ce71bb4591eb",
".git/objects/d4/1437b99e62455d3c377a693c1eca5ba8505b7f": "9553e03344b770ad0280f1679afc6930",
".git/objects/d4/6fabf59cf7e311be45fc1485afc6cc248db54e": "5647efab7cf32e1ebe787e295fe4a50f",
".git/objects/d6/2b2047a98fed8a2e31f089f616dd948303474c": "421ad587c2cc79f4fd47ad22be562d49",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/86e036f786f1c23f18791fbe0fb307cb88c8ff": "c5acf6b8b59f3390fe671014c7dc67fe",
".git/objects/dc/daf012610b05fa59b5372e2093ad69ca86bca6": "281de0dbb37adf9ddb77146281f53edf",
".git/objects/dd/6f5e507f403f7051bb0a5e328e2b86ddd343b0": "f04ecac5fd0b811e74e8fb851106c3a4",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/fff0551445879c4fcd7cc4659b5d2339a58162": "2dfc38710ef4348fd3ac9d82df7f0201",
".git/objects/e2/2716ba9a607a93c530b6d8b3ec3696c63f15cf": "fd75993cb5407b27014b1bae691ad7ff",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/0f6d45d4731206c6098b5eb5037a88af6c2465": "a29a5f1e289ea2783d57197aedf32bde",
".git/objects/ee/5a6802226ddb41cd77fb163f6e9c71243ed68d": "54a913b7ab7430d56644031cc40fa5de",
".git/objects/f3/5aaf66f047b777b0c3c899729211d393c7dee0": "bad721149b097a5ae5218cb82a865071",
".git/objects/f6/f325eaafd06971773d758aeb61f1331e2ca577": "d85e8145ed94e4b57ce5b2bcc4ddb78f",
".git/objects/f9/4bb417ea224694b9ed6448fcfe77d5ac9cb13f": "c694dd1aafdfc20a00e1cea058944d76",
".git/objects/f9/acfb9add617e2d7a300a4bb9f1162f19fbe8db": "0146e01f93875c1ff3b92f71106cb50c",
".git/objects/fd/9116d7b986760cb3c2423e7c876b4387d145f6": "75bcf82cde4ffc7e8ad8f70b71e4f3c8",
".git/refs/heads/main": "93e284c815146f606827b53b2889ce58",
".git/refs/remotes/origin/main": "93e284c815146f606827b53b2889ce58",
"assets/AssetManifest.json": "af69824bea9782fa753ef5d01876ae81",
"assets/assets/1.jpeg": "b7c2f1c0889652a666402f0222ae38bc",
"assets/assets/10.jpeg": "c360f2b0de6b0c291164d67d7f21f95d",
"assets/assets/11.jpeg": "568e85208d7393f8011a318cc61831aa",
"assets/assets/1_book.png": "5f2817a8b5b5679dec967576b508525a",
"assets/assets/2.jpeg": "146f171acc1ab9ff4dc312349e7a7ae3",
"assets/assets/2_reading.png": "5c37cf71dec807338ba4c83d2e840b4a",
"assets/assets/3.jpeg": "9b52416343d1ab6eba88d5905df9ec4e",
"assets/assets/3_listening.png": "678b980c016b58105093878464a51877",
"assets/assets/4.jpeg": "add0d2c07179b6eb8057bc05dc87c432",
"assets/assets/4_watching.png": "6cb26b7ee317ec96895ca0b43c6f37e5",
"assets/assets/5.jpeg": "0dfe185f4c56f1be60c830405dc13300",
"assets/assets/5_visualizing.png": "b2d193a2a31bf62d73d2430bbff5e6ed",
"assets/assets/6.jpeg": "202ff0dcfacfd10236a9deb9994279b6",
"assets/assets/7.jpeg": "0acf466c1f74acee775e6aa49ee0b0ad",
"assets/assets/8.jpeg": "6342a3a35c3d8f2166579238b1e0cc92",
"assets/assets/9.jpeg": "9125f4ba6e1f11516ff45767fd18488c",
"assets/assets/about.png": "36092f442ba3bcda8a69b4dd8497a446",
"assets/assets/apple.png": "f5ecf7d9b77b8b9df52a67cb63d2976c",
"assets/assets/app_icon.png": "a68d022d251c745ccb13e0d33494b54d",
"assets/assets/arrow_left.png": "84e699f0e294769e4a803bc09803e270",
"assets/assets/arrow_left_dark.png": "84e699f0e294769e4a803bc09803e270",
"assets/assets/arrow_left_light.png": "d98c5a5e1afa93afed71ff4a11b58551",
"assets/assets/avatar.png": "d0ee6b7d1f16a43ccc34d7e35115d3e2",
"assets/assets/business.png": "5530b1e44e8760996558a9da0ec57e5e",
"assets/assets/buy.png": "23ebb0247988dab759483b0b73df44ee",
"assets/assets/email.png": "3e08a0f573b1d2c8aa78b452ae61ac9d",
"assets/assets/empty_library.png": "6930f5212507c1e2667a4d7cecc0a573",
"assets/assets/facebook.png": "910597bb8ade4f583b55705fc91f7ce1",
"assets/assets/financial_education.png": "0bf3377cbcf231859dde49e7810ac08a",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "7ffeec2b4edb434d393875ffbe633c30",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/google.png": "a7237f2df7a79b512d05dd941071fdd0",
"assets/assets/heart.png": "0f54161e27e881140b23ee9ffc203de8",
"assets/assets/home_off.png": "44f51afdb280c31e593fbea1018b1443",
"assets/assets/home_on.png": "347bcee197dcc62f95499ad86274b9a1",
"assets/assets/library_off.png": "a189de449893bbd3246c0dc400e7f54c",
"assets/assets/library_on.png": "5c633a104b84df6cab691a7672556906",
"assets/assets/listen.png": "40cb5c1419afea332c7b0cfa5724ae12",
"assets/assets/lock.png": "3bc2f5fba7a5128fc892f240fe13237a",
"assets/assets/logout.png": "030c1d0a1882bde7c50ecc4b1faf7667",
"assets/assets/o_listen.png": "f0de2e544b2af3229a2d3c988f8fd4bc",
"assets/assets/o_mindmap.png": "41f296e4c1d4559f7d3c92ce7cc43a66",
"assets/assets/o_read.png": "454bb6f8f87d0389803bd0ca6aa67e01",
"assets/assets/o_watch.png": "08cbfda07efa31573c133370e953a342",
"assets/assets/personal_education.png": "240c0bacb50fc7c3317aa3162e61cf11",
"assets/assets/play.png": "7193bccc4c9dbd0f9f15f79bfe578140",
"assets/assets/pricing.png": "80f80939a373cc6e74b30a062dd86141",
"assets/assets/productivity.png": "7507d5a7611f38428bd678e627df9b11",
"assets/assets/promo.png": "8717d8cac85d66819daded723f38d2ec",
"assets/assets/read.png": "5ee5b07b070b045bbb7e2a4ff4ac0fe0",
"assets/assets/refer.png": "724b6ebb3f131db33f1fa6cdfb41c0e8",
"assets/assets/search.png": "46ebc037a827552c05b53a26cc3f80f4",
"assets/assets/search_light.png": "9683bc04a85e4ea8718efd621e6fc122",
"assets/assets/settings.png": "ea05b55127779baf7c9112c9bd7aac88",
"assets/assets/settings_off.png": "452ee5f3be34ba884b500ad3338f2f51",
"assets/assets/settings_on.png": "5bcc42f37f82443e38b2532cc00cb177",
"assets/assets/share_icon.png": "e1258d909417c7cf1c7ce89f86c29dd9",
"assets/assets/watch.png": "32064bfdca93dd9c19cc5cb93881414d",
"assets/FontManifest.json": "39be9010a6e1b80877f94243453b8ea2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ac8a9f95fe6d3b1acb24f69beff6b7d6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4ca1170523b116df48929423dc1d7896",
"/": "4ca1170523b116df48929423dc1d7896",
"main.dart.js": "8a883e0dbceae332c92ed76f2bb942be",
"manifest.json": "7cf1661ecd50125ecc4a326c0861cf48",
"version.json": "b7386a882e41fdca20a2f3fcc672e8d3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
