'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c71214956197bc0052398b6f52a7c16d",
"assets/AssetManifest.bin.json": "1842414f793dc1e271b0e5f91f6dfa51",
"assets/AssetManifest.json": "f5c7514ebee8d579399c3ebb546ede10",
"assets/assets/audio/downsampled/101.mp3": "701556f905f54d8b590ca2f09c14e703",
"assets/assets/audio/downsampled/202_biosf%25C3%25A6ren.mp3": "8be05e9d974da8cca6b297a3cc6fa2f2",
"assets/assets/audio/downsampled/202_biosf%25C3%25A6ren_-_ny.mp3": "c224304e50564f0cdb63b6ef8a2d3b6a",
"assets/assets/audio/downsampled/324.mp3": "9e327db91533d4775b758d7ecfad3bb0",
"assets/assets/audio/downsampled/340_Fotonik.mp3": "da342816179c62634e5ee65d70a09f92",
"assets/assets/audio/downsampled/Auditorier_303A.mp3": "d2dc67a2db7b9b13a6c6a5f616575573",
"assets/assets/audio/downsampled/A_careful_experimentalist.mp3": "29cb67e13a92a4c4def8005506820df9",
"assets/assets/audio/downsampled/A_leading_star_intro.mp3": "4eb30a322d64972edfc6013cd4fe788f",
"assets/assets/audio/downsampled/Carl_Henning_Pedersen.mp3": "45cfd97c45782191b610f6a8fc2c110c",
"assets/assets/audio/downsampled/Forskning_Til_Lyt(4).mp3": "67c6f0f4caff52d0763e83c65fa1c738",
"assets/assets/audio/downsampled/Introduktion.mp3": "db5784eb08a8312b9acedd7134a6f118",
"assets/assets/audio/downsampled/Introduktion_2.mp3": "35e6ec213ced5b4cb1f4f0a4f3213924",
"assets/assets/audio/downsampled/JacobKirkegaard(5).mp3": "e0f855be3176d86e128a49170774ae2b",
"assets/assets/audio/downsampled/Kunst_i_det_off_rum_uden_hund.mp3": "92becad3d4c41eac2c21954200a21cf9",
"assets/assets/audio/downsampled/Lars_N%25C3%25B8rgaards_muldvarper.mp3": "2e1c59ce80d8c2d93998851e909ba829",
"assets/assets/audio/downsampled/Lydlab.mp3": "4eb172fa8d025ec07fa83d69963c0197",
"assets/assets/audio/downsampled/Lysning_i_skov.mp3": "d0c656ef9693bcc033828d0ed9d4ae1f",
"assets/assets/audio/downsampled/Naturfilosofi_og_guldalder(3).mp3": "840e143bb5b3f04fecb812b889566518",
"assets/assets/audio/downsampled/Normalhuse.mp3": "bf55358ce62dc92c47833d5eac9e8234",
"assets/assets/audio/downsampled/Olau_Breinbjerg(6).mp3": "ce57c0cc66608a6452c64a41d08cbc34",
"assets/assets/audio/downsampled/Outro_Til_Lyt(7).mp3": "a1ab1b4c66244d9155d9dbac72d2f34e",
"assets/assets/audio/downsampled/Robert_Jacobsen.mp3": "adfda6c01e713a42b7cc4d16ba34dc8c",
"assets/assets/audio/downsampled/Skylab.mp3": "ef97c5388432bac9c32342e54ac96505",
"assets/assets/audio/downsampled/Varmev%25C3%25A6rket.mp3": "8c48afc091b86531e5ad1ecc846bf0ae",
"assets/assets/audio/downsampled/Viera_Collaro.mp3": "37e9748337288fd555b00a5849844f85",
"assets/assets/images/logos/Arkitekturruten.png": "cb44b6cc485daa8f82bdc936b78faa3c",
"assets/assets/images/logos/ArkitekturrutenNext.png": "543417093811f8896469e50cf80f89fa",
"assets/assets/images/logos/dtulogored.png": "48143960fe847982f3cda39620ab9aec",
"assets/assets/images/logos/HCO_route.png": "7787d0b30eff6aa333ff4a54b6f70a55",
"assets/assets/images/logos/HCO_routeNext.png": "7787d0b30eff6aa333ff4a54b6f70a55",
"assets/assets/images/logos/Kunstruten.png": "a13e8fcd79947d74b08a39082077702e",
"assets/assets/images/logos/KunstrutenNext.png": "c6118a92c690198d10ee21dc72aebc39",
"assets/assets/images/logos/playstore-icon.png": "483c142825bf9d5e53992c244e0f9c12",
"assets/assets/images/logos/playstore-icon_nice.png": "d2de91407211214fb7eb01aeef18d624",
"assets/assets/images/logos/playstore-icon_nice_white_bg.png": "55b1bd72dcefb934dd6faea1f6ac2362",
"assets/assets/images/logos/playstore-icon_white_bg.png": "9e7cce80e30bced361edd435e77e1a2c",
"assets/assets/images/mobile/14508606_10154539035696499_229954581_n.jpg": "b8eac1e0bf38f0c5dd87b011e4444457",
"assets/assets/images/mobile/30002041-101.jpg": "459eb4e47911e119f0b0606ae46dcde0",
"assets/assets/images/mobile/303A_studiemilj%25C3%25B8.Kristian_Ridder-Nielsen.jpg": "69948fb2d6e864a173e36da1a0c7161a",
"assets/assets/images/mobile/340.fotonik-lysfacade.jpg": "08778225f9f00a876f612463bbeabcf9",
"assets/assets/images/mobile/340.Fotonik_facade._Adam_M%25C3%25B8rk.jpg": "a686d8dad0e5e8aeb5167412feeba989",
"assets/assets/images/mobile/340.Indend%25C3%25B8rs.Adam_M%25C3%25B8rk.jpg": "d14e051c231f4b126d15427def5470b0",
"assets/assets/images/mobile/340.Materialer.Adam_M%25C3%25B8rk.jpg": "50749562cb00f9c2690657cd12169a61",
"assets/assets/images/mobile/Administrationshallen.jpg": "f492238dbb2da422cc972cdf030e0563",
"assets/assets/images/mobile/auditoriebygning_303A.2.Mikal_Schlosser.jpg": "e552c7dcea776f311c8c96f72e9dc2c6",
"assets/assets/images/mobile/auditoriebygning_303A.Mikal_Schlosser.jpg": "82f44eb9693843e2b758151fc0238663",
"assets/assets/images/mobile/Byg.201-205.Tjorbj%25C3%25B8rn_Hansen_Kontraframe.jpg": "92e89db95ca4c4fdc0f75076a767324b",
"assets/assets/images/mobile/Byg201-205.Stamers_Kontor.jpg": "08ae47fcaeede79c18caf474ccbfe825",
"assets/assets/images/mobile/Byg324.Ude.Stamers_Kontor.jpg": "da3b88e2b03f9af38300ba77c8efb4aa",
"assets/assets/images/mobile/Byg340.facade.Thjorbj%25C3%25B8rn_Hansen_Kontraframe.jpg": "221958fb6b356ffcb98ab1579ae43064",
"assets/assets/images/mobile/Bygning303A.Stamers_Kontor.jpg": "11f528e5931034c271a75da53a954782",
"assets/assets/images/mobile/Bygning_101A.jpg": "582fa0aab7361a3c63748b2f0ed9b24f",
"assets/assets/images/mobile/Bygning_324.milj%25C3%25B8.Stamers_Kontor.jpg": "bc27032cea551219a3341da473bd05be",
"assets/assets/images/mobile/Bygning_324.Stamers_Kontor.jpg": "ac62ca265fe7899a2d19c696d5d4b898",
"assets/assets/images/mobile/Bygning_373.Skylab.Stamers_Kontor.jpg": "27f05ab58ade3fd34b25ea179399bff6",
"assets/assets/images/mobile/Bygning_373.ude.Stamers_Kontor.jpg": "4626b9792eebb6a27e6d58d2aa7a5506",
"assets/assets/images/mobile/Det_Lydd%25C3%25B8de_Rum_DTU_byg354.Thorkild_Amdi_Christensen.jpg": "6df91dec97b2dbd9da7c2c15059e19f6",
"assets/assets/images/mobile/DTU.byg101.Kaare_Smith.jpg": "744d855cd773043c76da06718ca90d7a",
"assets/assets/images/mobile/DTU.fritk%25C3%25B8bt.jpg": "dbf343331d7e40c187d096479abb269b",
"assets/assets/images/mobile/DTU.fritk%25C3%25B8bt2.jpg": "35a9032d2ce088af73649eb668af50fb",
"assets/assets/images/mobile/DTU.sportshal.fritk%25C3%25B8bt.jpg": "d5cdd34390c63a7bfa01de310d8e96b8",
"assets/assets/images/mobile/DTU.varmecentral.fritk%25C3%25B8bt.jpg": "ec196808a86ee8bacca2130b56448bf8",
"assets/assets/images/mobile/DTU_Bibliotek_Thorkild_Amdi_Christensen.jpg": "e46aad16a2c8997b3b412b34e191a2f7",
"assets/assets/images/mobile/DTU_Skylab2.Stamers_Kontor.jpg": "f1ad5bb2948fdb0754b7523338ed2f95",
"assets/assets/images/mobile/Ehrhorn__Hummerston.jpg": "74b3a929901fceca323594c8b59944ad",
"assets/assets/images/mobile/Ehrhorn__Hummerston1.jpg": "a31aa90504741388d5bd90aad397f214",
"assets/assets/images/mobile/Luftfoto_Lyngby.Mikkel_Barker.jpg": "253881b6bcbad4143d46fe49e9cbde4c",
"assets/assets/images/mobile/lydlaboratorium.254.Stamers_kontor.jpg": "fef3c4c13bea99d387bd4f9d228510ba",
"assets/assets/images/mobile/lydlaboratoriumStamerskontor.jpg": "9d59f71b39041523de54cdb7e2df910b",
"assets/assets/images/mobile/lysning.jpeg": "b4430017cd6f79e3bfd5711d94d35d60",
"assets/assets/images/mobile/Normalhuse.DTU.jpg": "ca83d3313521f7e535079df8cabd7f0a",
"assets/assets/images/mobile/overdragelse_bygning_201.2.Thorkild_Christensen.jpg": "c2e107300602b181dbab682c7c4a2025",
"assets/assets/images/mobile/overdragelse_bygning_201.Thorkild_Christensen.jpg": "a06d5a5fe3f0fd913ee7923595da4567",
"assets/assets/images/mobile/PIC3.jpg": "30be1d82b1a035a226f021adfdcc80ba",
"assets/assets/images/mobile/PIC4.jpg": "278ea44f38ef1bc79c2c42a0dbb32f7f",
"assets/assets/images/mobile/PIC5.jpg": "afd9e8e2aaaa07aa9e0e39e8c734f1b7",
"assets/assets/images/mobile/PIC6.jpg": "288d71d7ae75d7ddbd5df83a7403bb81",
"assets/assets/images/mobile/PIC7.jpg": "32deb7c41a3d814bd6bf9d4af2bf4463",
"assets/assets/images/mobile/Visualisering.R%25C3%25B8rb%25C3%25A6kogM%25C3%25B8ller.byg340.jpg": "0235beddab08341ccb66b9857788abf9",
"assets/assets/images/mobile/_MG_2444.S%25C3%25B8renGeorgJensen.jpg": "05f6c49e2167d433a5337ce472832f36",
"assets/assets/images/mobile/_MG_2449.S%25C3%25B8renGeorgJensen.2.jpg": "f9843e4242f159c8eb1502111173256f",
"assets/assets/images/mobile/_MG_2467.MogensAndersen.jpg": "ffeef7ad90bc3eb51c954e8ac73e2556",
"assets/assets/images/mobile/_MG_2471.MogensAndersen.2.jpg": "3d94f2e6058cacf316bc3f7c4474cc02",
"assets/assets/images/mobile/_MG_2472.MogensAndersen.3.jpg": "525ad4ea35106920f392e5786a403179",
"assets/assets/images/mobile/_MG_2483.ErikStyrbj%25C3%25B8rn.jpg": "9d347ea28d73f5435a5aa01f997aecd7",
"assets/assets/images/mobile/_MG_2485.ErikStyrbj%25C3%25B8rn.2.jpg": "c0104d1b3b430469262b53fff28214ec",
"assets/assets/images/mobile/_MG_2491.PeterNyborg.2.jpg": "50e8aa71397ddfe06cc22b0fd02d4063",
"assets/assets/images/mobile/_MG_2499.TonningRasmussen.jpg": "ddc1b06559669e135c00046b1f3aace4",
"assets/assets/images/mobile/_MG_2513.TonningRasmussen.2.jpg": "db934696adfd4ec59df340b2b8734aac",
"assets/assets/images/mobile/_MG_2534.CarlHenningPedersen.maleri.jpg": "e42cd0bc098c80b4b723906ad9c68e7d",
"assets/assets/images/mobile/_MG_2548.LarsN%25C3%25B8rgard.jpg": "d941c11356c4572acb657884747e699a",
"assets/assets/images/mobile/_MG_2550.LarsN%25C3%25B8rgard.2.jpg": "3ffb8232817697cf9def03cd4b8c18b0",
"assets/assets/images/mobile/_MG_2553.Robert_Jacobsen.jpg": "5edae7a88419ede58611f37bd4db48ed",
"assets/assets/images/mobile/_MG_2559.Robert_Jacobsen.2.jpg": "615a6b9fc94fcf77e35d21a3346f5086",
"assets/assets/images/mobile/_MG_2562.SvendWiig.2..jpg": "656562f090ca3abf1739df593c9f9aa7",
"assets/assets/images/mobile/_MG_2582.SvendWiig.jpg": "fae31f068a270f40f62eae5961c3c780",
"assets/assets/images/mobile/_MG_2591.JuliusThomsen.statue.jpg": "121f13b4c8e7e53829bd0ec8e49c5307",
"assets/assets/images/mobile/_MG_2593.AnjaBache.jpg": "b3b456541e597800452e2489bb4091a3",
"assets/assets/images/mobile/_MG_2596.AnjaBache.2.jpg": "d747c66098bb96ef9c2447c8d1150c22",
"assets/assets/images/mobile/_MG_2614.StigBr%25C3%25B8gger.3.jpg": "c12ff25c060db6901cbe571cba89b002",
"assets/assets/images/mobile/_MG_2636.VieraCollaro.jpg": "3fa6971ac241a9493a64255b0fee6c00",
"assets/assets/images/mobile/_MG_2640.VieraCollaro.2.jpg": "692f4057551ad64fccc374c348916416",
"assets/assets/images/mobile/_MG_2641.VieraCollaro.3.jpg": "0aed7afde5b6e2f3a91c4f6f1f864e52",
"assets/assets/images/mobile/_MG_3145.JuliusThomsen.2.jpg": "f6c7095a9919a342997deac554ad8717",
"assets/assets/images/mobile/_MG_3150.JuliusThomsen.3.jpg": "96a3f7dc140349a7410cb3eafba7af89",
"assets/assets/images/mobile/_MG_3158.StigBr%25C3%25B8gger.jpg": "ca4ac59831d190457fb71315209ca481",
"assets/assets/images/mobile/_MG_3163.StigBr%25C3%25B8gger.2.jpg": "5a39574db26356ec88c02ae664d6fa98",
"assets/assets/images/mobile/_MG_3172.CarlHenningPedersen.mur.jpg": "a119542b3a9f8b5a36ac8c6d12c7e67e",
"assets/assets/images/mobile/_MG_3179.PeterNyborg.jpg": "f8d105394c5b45bbf5fa208dfb9bbc29",
"assets/assets/images/mobile/_W6A5528.CarlHenningPedersen.mur2.jpg": "dc032dce94a77f9f9af810c54cc22a4a",
"assets/assets/routes/data_DA.json": "ac1a964e003110ff3488f230ddb30d18",
"assets/assets/routes/data_EN.json": "2e133a08a3aaa3253badb2fd0d9f7099",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "c88f8aac54ca82d30bd3a81da5ea598f",
"assets/NOTICES": "bcadeca35b7cab53593fc2d278741704",
"assets/packages/country_flags/res/si/ac.si": "084b17449dd0ba76474f133039ee68d3",
"assets/packages/country_flags/res/si/ad.si": "c3ccb8e3cf8b3ce384280c687c94ed53",
"assets/packages/country_flags/res/si/ae.si": "600a0ce358d82ca58155a6298524084f",
"assets/packages/country_flags/res/si/af.si": "9fb0d66778b5afe46c5750f6b2de0a06",
"assets/packages/country_flags/res/si/ag.si": "f2607a0fcfd1aeecb45e1ea7d17979a0",
"assets/packages/country_flags/res/si/ai.si": "98108de6fc34688b9281b6040f855730",
"assets/packages/country_flags/res/si/al.si": "3a10d259f602c6832ed5316403f6fe91",
"assets/packages/country_flags/res/si/am.si": "f1c0decc96d76ecce7dda29e1b0a3048",
"assets/packages/country_flags/res/si/ao.si": "042c2a03c013acf928449dbaf2a4affe",
"assets/packages/country_flags/res/si/aq.si": "e15ec1a740dfd94250faaf3a04c3e009",
"assets/packages/country_flags/res/si/ar.si": "4ce98d701be0d5607ec3f0d62e5c7ff8",
"assets/packages/country_flags/res/si/as.si": "f12705f23ac102cc4fa8e85c3a780040",
"assets/packages/country_flags/res/si/at.si": "da9709351758847fbf187e9947fd44a5",
"assets/packages/country_flags/res/si/au.si": "93810e1a767ca77d78fa8d70ef89878a",
"assets/packages/country_flags/res/si/aw.si": "bac854c7bbf50dd71fc643f9197f4587",
"assets/packages/country_flags/res/si/ax.si": "a456e36511e13498fa3d610a026d79b8",
"assets/packages/country_flags/res/si/az.si": "203fdb6be0df02e0b86e1ab468a84588",
"assets/packages/country_flags/res/si/ba.si": "6719180c7b4f5d76a1c41fd76668cc69",
"assets/packages/country_flags/res/si/bb.si": "a0f7ccd01c2e5eee48607b53d0791941",
"assets/packages/country_flags/res/si/bd.si": "18bcbe7c5cd7ef99faf8e581dcf6f2db",
"assets/packages/country_flags/res/si/be.si": "6d9dd724fd5dd06b3cff71955bf03728",
"assets/packages/country_flags/res/si/bf.si": "36c828d75ffb1b1ee0c074f08dbd162e",
"assets/packages/country_flags/res/si/bg.si": "75bcf4b187601813fcf6008da5ef3625",
"assets/packages/country_flags/res/si/bh.si": "637d8c9177fdc8bf98d2afb4de3a3cbe",
"assets/packages/country_flags/res/si/bi.si": "4e22a5fa7d3657998c6424ee89ba328f",
"assets/packages/country_flags/res/si/bj.si": "e356b737969b4d0413d0d17781f5476f",
"assets/packages/country_flags/res/si/bl.si": "b319560213233391af1170881595344f",
"assets/packages/country_flags/res/si/bm.si": "2c1effe65d4c9c6ea846536f9ebcac93",
"assets/packages/country_flags/res/si/bn.si": "1334a282f886a35989ab2d1fee8b3acc",
"assets/packages/country_flags/res/si/bo.si": "1491a562f1ee0f5fdf512a72821dc3b1",
"assets/packages/country_flags/res/si/bq.si": "130b5b1f64baa8e002dc668b0d3d589f",
"assets/packages/country_flags/res/si/br.si": "dc32cd1c578da0b7106bd15a74434692",
"assets/packages/country_flags/res/si/bs.si": "5818730530c519e134452e41830a7d4b",
"assets/packages/country_flags/res/si/bt.si": "9b9f54fdaeb57d27628dd7318c23d632",
"assets/packages/country_flags/res/si/bv.si": "d2e12ff6011d4fc76d0044e61abbd8a1",
"assets/packages/country_flags/res/si/bw.si": "50b6724787e9b206d8998f747748f133",
"assets/packages/country_flags/res/si/by.si": "045e4e447111a76bb834bd9e969756b4",
"assets/packages/country_flags/res/si/bz.si": "3fad74bf2e5948e1556c8048e65e084e",
"assets/packages/country_flags/res/si/ca.si": "a911aefa8694f795f4066047492134be",
"assets/packages/country_flags/res/si/cc.si": "831df80000b0c6d12f0c37f696a11e31",
"assets/packages/country_flags/res/si/cd.si": "092862ef3f988f301bf81d937d0b2251",
"assets/packages/country_flags/res/si/cefta.si": "4a619e7166e3a91fd3333a0aa9a7f212",
"assets/packages/country_flags/res/si/cf.si": "00cce9e9924e59417fd640f22ff3c068",
"assets/packages/country_flags/res/si/cg.si": "a9df20410076c50e9abbd11b324712c3",
"assets/packages/country_flags/res/si/ch.si": "25b5af40c1ed5254d8a5c9286a235a78",
"assets/packages/country_flags/res/si/ci.si": "2dd6886cd9b611e8301f347233f275db",
"assets/packages/country_flags/res/si/ck.si": "30d75fc50470f00d7fc590c058b7a4c1",
"assets/packages/country_flags/res/si/cl.si": "1765b8d051900505b51ca7149756b62e",
"assets/packages/country_flags/res/si/cm.si": "d89b50b2a1e7c5814a53894ddf6842f6",
"assets/packages/country_flags/res/si/cn.si": "a629d6ea2863bc2e2783ed86427fccdf",
"assets/packages/country_flags/res/si/co.si": "471a020ee0695a4be6867c76e3e4fcdf",
"assets/packages/country_flags/res/si/cp.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/cr.si": "7385af5d3c967dad1c62027ece383dd6",
"assets/packages/country_flags/res/si/cu.si": "b561ce782460b38c99795d3891be4bd8",
"assets/packages/country_flags/res/si/cv.si": "1d61ed1ebf59c2a571f54da09340b52b",
"assets/packages/country_flags/res/si/cw.si": "8c2327f9686e6183f85b4141294f7944",
"assets/packages/country_flags/res/si/cx.si": "8d7a59ff653f34ab3323c39c5c5b2f75",
"assets/packages/country_flags/res/si/cy.si": "f4f95412e75e3e82b62b140f1fb4d327",
"assets/packages/country_flags/res/si/cz.si": "722387eee039fb858312120170af2ba7",
"assets/packages/country_flags/res/si/de.si": "aaabd585b21d0960b60d05acf4c54cd3",
"assets/packages/country_flags/res/si/dg.si": "3469f709b852fa25f3d735d4e7ee88a2",
"assets/packages/country_flags/res/si/dj.si": "c39ebb82ae2414d5b42b0c78d7db1626",
"assets/packages/country_flags/res/si/dk.si": "23b9112d01b91326804b173427d0a991",
"assets/packages/country_flags/res/si/dm.si": "114b039b7de692af992aa75bdfd324d9",
"assets/packages/country_flags/res/si/do.si": "0c12349ea290f3e7d6bd3c7eba8ec556",
"assets/packages/country_flags/res/si/dz.si": "74f32a3036da03823454cf8c2fbcc22f",
"assets/packages/country_flags/res/si/ea.si": "c59363bf0d9a595df07cfe238f9cc16a",
"assets/packages/country_flags/res/si/ec.si": "87d4beb1830c8746d02bd3eb81daa1cf",
"assets/packages/country_flags/res/si/ee.si": "d1d0e6c483ec14291ccafc69c4390f07",
"assets/packages/country_flags/res/si/eg.si": "eb6351aaa487d5e422ecd8f1160ada0d",
"assets/packages/country_flags/res/si/eh.si": "99373a71bd21ee4d5ce37dd840fa8bc5",
"assets/packages/country_flags/res/si/er.si": "1f32851695ad06a33b607cbfe96cbe5c",
"assets/packages/country_flags/res/si/es-ct.si": "9d497fc098e8ac8eb94576ca2b72a65a",
"assets/packages/country_flags/res/si/es-ga.si": "c128cec2feffaff7aab7940dadcd9ccd",
"assets/packages/country_flags/res/si/es.si": "c59363bf0d9a595df07cfe238f9cc16a",
"assets/packages/country_flags/res/si/et.si": "6020d43892ed1096172d0d01a00afe89",
"assets/packages/country_flags/res/si/eu.si": "0c7acf5338eb131940e6a2d53022fda7",
"assets/packages/country_flags/res/si/fi.si": "6ed37987c4dee7606f35b1f3ef2f4352",
"assets/packages/country_flags/res/si/fj.si": "5315abdde8d2a5274a621a7d1fdb92a6",
"assets/packages/country_flags/res/si/fk.si": "bcdc2242f7af2a72255f8d89d2642fe8",
"assets/packages/country_flags/res/si/fm.si": "d195abb2e8d6961f6ffa0da23d8b2813",
"assets/packages/country_flags/res/si/fo.si": "c074164f5875cc2ac648caa3461a4ffa",
"assets/packages/country_flags/res/si/fr.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/ga.si": "863042bec1c7781b8245d2fec2961835",
"assets/packages/country_flags/res/si/gb-eng.si": "c23da032fa2a18ca5390c2cab903ac80",
"assets/packages/country_flags/res/si/gb-nir.si": "70756040e8747ea10547485c1b5493dd",
"assets/packages/country_flags/res/si/gb-sct.si": "c1e2452023ede8ca68306f9360bec03f",
"assets/packages/country_flags/res/si/gb-wls.si": "bb7216967d97426e1d684b2745118f89",
"assets/packages/country_flags/res/si/gb.si": "b875cc97c8e2a1a41fd3ccbbdb63d291",
"assets/packages/country_flags/res/si/gd.si": "2bd89cc35d9a35aa6b5c7dfa8888e769",
"assets/packages/country_flags/res/si/ge.si": "6f700846562325e1e647946a9b7e26f6",
"assets/packages/country_flags/res/si/gf.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/gg.si": "57b684be8b0e0fa86e1dae5100f3c0ee",
"assets/packages/country_flags/res/si/gh.si": "21e46cb3743f96b4e47de0c0b277c604",
"assets/packages/country_flags/res/si/gi.si": "1d4b7516dbef91dd53a3223786433468",
"assets/packages/country_flags/res/si/gl.si": "f447d0f9f9e95027def4b4a333f59393",
"assets/packages/country_flags/res/si/gm.si": "b764f5bed08b62f0c908d224b61c62ce",
"assets/packages/country_flags/res/si/gn.si": "ebb9409ab8449de9d040549ffcef1321",
"assets/packages/country_flags/res/si/gp.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/gq.si": "e8e087ae91048f042fa212b5f79a496c",
"assets/packages/country_flags/res/si/gr.si": "a7ffe39d3dbd0f7e2d7cf03b38ebce8b",
"assets/packages/country_flags/res/si/gs.si": "d6e2a1be23c5e70fced629d467e0a1f7",
"assets/packages/country_flags/res/si/gt.si": "2841eca17a032575b20e97e3c4c0977e",
"assets/packages/country_flags/res/si/gu.si": "f47c5abf0b2dd4b8b717e87c82e1f328",
"assets/packages/country_flags/res/si/gw.si": "9c6f62e2963f012b571dad989416a1f3",
"assets/packages/country_flags/res/si/gy.si": "6373d2b94878202fd94563aeea4fd8ca",
"assets/packages/country_flags/res/si/hk.si": "cdc28623f40113eb4227c9ed796b6201",
"assets/packages/country_flags/res/si/hm.si": "93810e1a767ca77d78fa8d70ef89878a",
"assets/packages/country_flags/res/si/hn.si": "bf1d541bc8c0b4826c3cf7f2d36e1b87",
"assets/packages/country_flags/res/si/hr.si": "dc0efaf40fb58a21f52fd9a86c7ddfdc",
"assets/packages/country_flags/res/si/ht.si": "2f82778ff6d4910a677170a08545bfd6",
"assets/packages/country_flags/res/si/hu.si": "379f70d867e53920ef1105ae9d3dc5e1",
"assets/packages/country_flags/res/si/ic.si": "5459bbd72389b2300c7da170cd528f23",
"assets/packages/country_flags/res/si/id.si": "9cf3c91fee39a1ff1d93cbbe385d7bbf",
"assets/packages/country_flags/res/si/ie.si": "58082f0739794c2562fbd21b9700a0a9",
"assets/packages/country_flags/res/si/il.si": "5926479ae8ffa09647b9c20feceb9415",
"assets/packages/country_flags/res/si/im.si": "3bca9cb89673cd2c1837c69f72038bde",
"assets/packages/country_flags/res/si/in.si": "335a5837f0d2b45527db4e60087b4221",
"assets/packages/country_flags/res/si/io.si": "3469f709b852fa25f3d735d4e7ee88a2",
"assets/packages/country_flags/res/si/iq.si": "a0be6279c1905893dcbcbe0c7ce44302",
"assets/packages/country_flags/res/si/ir.si": "84eb55b574dd390d8fc86b185d182578",
"assets/packages/country_flags/res/si/is.si": "6a75ef472e3b3674cb992a6c1a2d8656",
"assets/packages/country_flags/res/si/it.si": "c472c6bc7844cc6633d4e41d139b282c",
"assets/packages/country_flags/res/si/je.si": "5fb5c37d3e7469ad537882debd8c4f33",
"assets/packages/country_flags/res/si/jm.si": "db4e387e95c824cefb80b16ae8f8af9f",
"assets/packages/country_flags/res/si/jo.si": "3c4f0683e2fe5e5d9b1424a5865c1e59",
"assets/packages/country_flags/res/si/jp.si": "ee22ac07312690001d82c27ed0fab0a8",
"assets/packages/country_flags/res/si/ke.si": "87ce4c55414a8c5d29f23ca16310a01c",
"assets/packages/country_flags/res/si/kg.si": "1f1f0daac400da3f36e873982f002844",
"assets/packages/country_flags/res/si/kh.si": "711d8494963708be2a01a1dfc5a002db",
"assets/packages/country_flags/res/si/ki.si": "80c4adc8b03b18055be571a612fa3f79",
"assets/packages/country_flags/res/si/km.si": "6cc50d7456a351984bae778298741591",
"assets/packages/country_flags/res/si/kn.si": "cd16cb0ce86ecb131422414a132352bb",
"assets/packages/country_flags/res/si/kp.si": "863f41ba80f1b3f9c794aaeafafb02d6",
"assets/packages/country_flags/res/si/kr.si": "0fc0217454ce0fac5d5b0ed0e19051ce",
"assets/packages/country_flags/res/si/kw.si": "fae7c5f1138fcb68b76b6bf1ecb5f422",
"assets/packages/country_flags/res/si/ky.si": "498424ad28f6c9e005ae14e8d66c3e2f",
"assets/packages/country_flags/res/si/kz.si": "f5aad35a9ce49a2a17f165d4761d8ace",
"assets/packages/country_flags/res/si/la.si": "161dccf57b198768b6c95fd585966156",
"assets/packages/country_flags/res/si/lb.si": "d2268cc1967d63699bb1ff2a87264c75",
"assets/packages/country_flags/res/si/lc.si": "981c9cb18294152ac0423aa64039f6e0",
"assets/packages/country_flags/res/si/li.si": "08d65db7ba158c62f8b70240985fbbe9",
"assets/packages/country_flags/res/si/lk.si": "c8f0c394d54b1618603d89307e6cd127",
"assets/packages/country_flags/res/si/lr.si": "8ea704b8b395abcb8dbd13a7fb738b3e",
"assets/packages/country_flags/res/si/ls.si": "f469f1632ad300b4fb00db8328f9b844",
"assets/packages/country_flags/res/si/lt.si": "8ef10e2712fa997ca06742fc1d79c095",
"assets/packages/country_flags/res/si/lu.si": "0ac3af11df6af8b90ca8f8078902fc9a",
"assets/packages/country_flags/res/si/lv.si": "d61111f2dcbc8b2c84e644f7288b1fd7",
"assets/packages/country_flags/res/si/ly.si": "b99bf6af3ded37ca4b35c612bfe98721",
"assets/packages/country_flags/res/si/ma.si": "9ced8447a0a9b2e720d870bc5aef87cf",
"assets/packages/country_flags/res/si/mc.si": "0cb03fed360c4c1401b0e9cff5dea505",
"assets/packages/country_flags/res/si/md.si": "074b41437a23811d27d4db98bedd56d8",
"assets/packages/country_flags/res/si/me.si": "d87206186e9601dcfabdd0d38b655899",
"assets/packages/country_flags/res/si/mf.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/mg.si": "f6406a9d332acb29115b31235c49c920",
"assets/packages/country_flags/res/si/mh.si": "88c8196c37481de5021237e01ccb95a1",
"assets/packages/country_flags/res/si/mk.si": "0aee6cc90fb321101c9d4afd923c2d85",
"assets/packages/country_flags/res/si/ml.si": "e583b41ed5e4f9508970265999bf47bf",
"assets/packages/country_flags/res/si/mm.si": "3ab23c7fcc44e249de75e6019af32611",
"assets/packages/country_flags/res/si/mn.si": "d7d59010e2822958f8390d72bfbf0072",
"assets/packages/country_flags/res/si/mo.si": "4a369319962984183cfed7f0bf4d60a5",
"assets/packages/country_flags/res/si/mp.si": "48f591d6c4a1e7aab511bcc750536836",
"assets/packages/country_flags/res/si/mq.si": "b319560213233391af1170881595344f",
"assets/packages/country_flags/res/si/mr.si": "73d5e7f3158beeb1e09e294cc2cc3b79",
"assets/packages/country_flags/res/si/ms.si": "e04ef3545afb3927de3aff13640ff6b9",
"assets/packages/country_flags/res/si/mt.si": "2c7e94cc8b51a7ce1c1958a00f880398",
"assets/packages/country_flags/res/si/mu.si": "9f4070ad133e7380edb48cb11cffaef1",
"assets/packages/country_flags/res/si/mv.si": "47d6de70a92bb16bc0284187d12dfb47",
"assets/packages/country_flags/res/si/mw.si": "529e2edb7b4f71261a4d8c52de450f5d",
"assets/packages/country_flags/res/si/mx.si": "add64001e4e654f95a36c24e5b212b80",
"assets/packages/country_flags/res/si/my.si": "017ea1b80814ba715985331e8ff494fc",
"assets/packages/country_flags/res/si/mz.si": "65389bae62f6de08c93ff93fe61e7b24",
"assets/packages/country_flags/res/si/na.si": "d49f748db27e5d6f63293f41c2e8361e",
"assets/packages/country_flags/res/si/nc.si": "8760c0e60c7ab868ea1577de40a8dd04",
"assets/packages/country_flags/res/si/ne.si": "5323700b3b0dc68916ffe048c4afc2b1",
"assets/packages/country_flags/res/si/nf.si": "1473b829023248dbbd77f49b9e6e5ede",
"assets/packages/country_flags/res/si/ng.si": "d2764e808010a6d2389cfc1e83e3b710",
"assets/packages/country_flags/res/si/ni.si": "8af49cf35b72204052de6fab8322afc8",
"assets/packages/country_flags/res/si/nl.si": "130b5b1f64baa8e002dc668b0d3d589f",
"assets/packages/country_flags/res/si/no.si": "6b6efedb50f0a7b05a9afe882924fe99",
"assets/packages/country_flags/res/si/np.si": "aac703fec2d68d1f05f0b368bcd05b5c",
"assets/packages/country_flags/res/si/nr.si": "7762af79a081de69557b7611eaf93bf9",
"assets/packages/country_flags/res/si/nu.si": "dac0a569e83a73006b8600fa1f1f8ac5",
"assets/packages/country_flags/res/si/nz.si": "95a431faf2077c36c314e060d3565e11",
"assets/packages/country_flags/res/si/om.si": "8d23e422f6191c117e764aa17c80e195",
"assets/packages/country_flags/res/si/pa.si": "3231c2af8957eddd456819783df37ef5",
"assets/packages/country_flags/res/si/pe.si": "978e662d337e34163ef3dbc28cf35f11",
"assets/packages/country_flags/res/si/pf.si": "29e59d85bfa9cc1ed50424098c4577b5",
"assets/packages/country_flags/res/si/pg.si": "51e824f62d970ad02c7afa9cc70330d8",
"assets/packages/country_flags/res/si/ph.si": "c8899c0eb2232931f49fa35de57f5d09",
"assets/packages/country_flags/res/si/pk.si": "afa64ff88820436b4ec66b1043a1ca7d",
"assets/packages/country_flags/res/si/pl.si": "034643869bc1b14ad2af44cc9aa24b9f",
"assets/packages/country_flags/res/si/pm.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/pn.si": "4df57b8f366ab9d559a134e25fa92201",
"assets/packages/country_flags/res/si/pr.si": "ccb19936defb882dea166d865f8ee5ff",
"assets/packages/country_flags/res/si/ps.si": "e91b4cc92cc8629f42c9d8fb11d028ba",
"assets/packages/country_flags/res/si/pt.si": "04c1755d12a50d7524a66124c8d725cc",
"assets/packages/country_flags/res/si/pw.si": "e658e7c8cdf0e27c4d9ccb084768f383",
"assets/packages/country_flags/res/si/py.si": "a05eb3d105fde5507180087464bc282b",
"assets/packages/country_flags/res/si/qa.si": "534abea02d79321b510b2a3fb040ffbc",
"assets/packages/country_flags/res/si/re.si": "b319560213233391af1170881595344f",
"assets/packages/country_flags/res/si/ro.si": "ec81c7e1014f2b8584ddd07d0fad9c43",
"assets/packages/country_flags/res/si/rs.si": "f231dce72ce3243a624eb723d200a63e",
"assets/packages/country_flags/res/si/ru.si": "677089233d82298520fd2b176f8003a8",
"assets/packages/country_flags/res/si/rw.si": "8b075359fc5a06224acf83d24b058752",
"assets/packages/country_flags/res/si/sa.si": "cf93fcbb04c97fac13136e80fd27ade9",
"assets/packages/country_flags/res/si/sb.si": "b6160f674954161619f0f57d4039e010",
"assets/packages/country_flags/res/si/sc.si": "65a3e456a8f0cfb400f7a4b354fd1839",
"assets/packages/country_flags/res/si/sd.si": "c6e5b30fafc73d2d84b45a10c6053568",
"assets/packages/country_flags/res/si/se.si": "64f75927796e3bcf418a7f1bce12cf39",
"assets/packages/country_flags/res/si/sg.si": "3e20b9387970793f6b3db62609820d4a",
"assets/packages/country_flags/res/si/sh.si": "084b17449dd0ba76474f133039ee68d3",
"assets/packages/country_flags/res/si/si.si": "11367d866b110a2971aae42dbc72b47f",
"assets/packages/country_flags/res/si/sj.si": "04dcac0249ab5999520c35c8e7f3ce38",
"assets/packages/country_flags/res/si/sk.si": "009a8dbaf2bc675683650d84bde81643",
"assets/packages/country_flags/res/si/sl.si": "a0d669d7821909f6b73d73ebd29e77e7",
"assets/packages/country_flags/res/si/sm.si": "e29d9a0493a72947dfc5e5668bcdcc30",
"assets/packages/country_flags/res/si/sn.si": "e283672331f67926294d3609b6317d82",
"assets/packages/country_flags/res/si/so.si": "ee4702222805ec60fe47cca5500fced8",
"assets/packages/country_flags/res/si/sr.si": "c996e0d2b46e4afc13b18a5abe492fe7",
"assets/packages/country_flags/res/si/ss.si": "cd22425520f63dac39be3dbfdb49465b",
"assets/packages/country_flags/res/si/st.si": "201fdb14910faacd6ce8c30c0a2c1bec",
"assets/packages/country_flags/res/si/sv.si": "912cc0a01ad6e839db6392ece5736b68",
"assets/packages/country_flags/res/si/sx.si": "424c70f52c10927bd40135e75d958e8b",
"assets/packages/country_flags/res/si/sy.si": "744af358ea4a3b27e1ae16c99181dd71",
"assets/packages/country_flags/res/si/sz.si": "780a7eb9794bd6cf85d59d42766e62b3",
"assets/packages/country_flags/res/si/ta.si": "084b17449dd0ba76474f133039ee68d3",
"assets/packages/country_flags/res/si/tc.si": "78d2718e865371288caf216fb083c8bd",
"assets/packages/country_flags/res/si/td.si": "7fe532f134f64c198cc8b4feb90efcaf",
"assets/packages/country_flags/res/si/tf.si": "2fdcf8c49f0b17d65aa2601d4b505cfa",
"assets/packages/country_flags/res/si/tg.si": "2a23d4dbc913968f6eb97dbb5454941e",
"assets/packages/country_flags/res/si/th.si": "1654e97b82bcdcdaade71e1bc3a5590d",
"assets/packages/country_flags/res/si/tj.si": "ff5523df78dbb97dbc212adec3b67a5e",
"assets/packages/country_flags/res/si/tk.si": "9fc0141c9928734e4229f05d2f2f68d4",
"assets/packages/country_flags/res/si/tl.si": "307e25e1507c3e76df867108079cb487",
"assets/packages/country_flags/res/si/tm.si": "61cac086e156158fe52394aadb734bd1",
"assets/packages/country_flags/res/si/tn.si": "d15a30567010db55d9a398ffde25694c",
"assets/packages/country_flags/res/si/to.si": "999f5edc1d7bd74937dab96f8d035368",
"assets/packages/country_flags/res/si/tr.si": "3bd279bd1f4c26e0ad0abed7fb744df3",
"assets/packages/country_flags/res/si/tt.si": "6550348a507c01feaf93fd191503ce72",
"assets/packages/country_flags/res/si/tv.si": "7e462e7d6fa8bdd967bf9e37b86d0906",
"assets/packages/country_flags/res/si/tw.si": "7bba519f0f26cca5417d8edb57bdef83",
"assets/packages/country_flags/res/si/tz.si": "643850342b81b7015ad57cddc9589a69",
"assets/packages/country_flags/res/si/ua.si": "aeb59a31627c7e9cb89c2c31c8b95d15",
"assets/packages/country_flags/res/si/ug.si": "b5368d2d0a873dd2ff8adc689c6c6b09",
"assets/packages/country_flags/res/si/um.si": "bec8665843b879da2d8ed65532da7e01",
"assets/packages/country_flags/res/si/un.si": "d3a2546a132b2e216aa17ffafaca8f57",
"assets/packages/country_flags/res/si/us.si": "a524142e2a2f7df4ee1b26a98f09a927",
"assets/packages/country_flags/res/si/uy.si": "8163529e4c65d4f7f97dad78c51918c7",
"assets/packages/country_flags/res/si/uz.si": "9141032bde5150e86cd2d159c4f31b72",
"assets/packages/country_flags/res/si/va.si": "c23d81f5e4e3acd336ce01d9ed561ee8",
"assets/packages/country_flags/res/si/vc.si": "a6d41b2c67d49f3f202dc920ad2f8c49",
"assets/packages/country_flags/res/si/ve.si": "e846876f7ec7ad396e58fb20e969a486",
"assets/packages/country_flags/res/si/vg.si": "de1ed29316c1d0f81af9946e35d254d7",
"assets/packages/country_flags/res/si/vi.si": "acbfd08b5cd096eac556c46efecb7926",
"assets/packages/country_flags/res/si/vn.si": "5e53b20018d53d957714d0211c237211",
"assets/packages/country_flags/res/si/vu.si": "54ccd51f720f6bb242f2256626a172b8",
"assets/packages/country_flags/res/si/wf.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/ws.si": "1644f5c199bfc4a5ee49d0907eb26efa",
"assets/packages/country_flags/res/si/xk.si": "967bec40d36ab8264262777667c5da33",
"assets/packages/country_flags/res/si/xx.si": "95362a356a59ae95c73b1a7a415abff6",
"assets/packages/country_flags/res/si/ye.si": "cc3bd4c5b25155d249015f88380a3023",
"assets/packages/country_flags/res/si/yt.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/za.si": "a66971379a3a65b274a702c82b3375d7",
"assets/packages/country_flags/res/si/zm.si": "ef4d9e8828b6609e41642a3fbb6541ec",
"assets/packages/country_flags/res/si/zw.si": "b32c711b08bfe7425d509407c48ee5ed",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/routing_client_dart/src/assets/ar.json": "45e29bd513d54467b03fe5c10c85cc14",
"assets/packages/routing_client_dart/src/assets/de.json": "75f261f48361c6ad0f987d669dc279be",
"assets/packages/routing_client_dart/src/assets/en.json": "006f10a887beeb7207fc58db61426a4e",
"assets/packages/routing_client_dart/src/assets/es.json": "006019fa2630f52d73040764ad461fab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "55f5ae0e754de6d52500328f6ea00478",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "8a1d6baf25bdc419f0e906badeceab99",
"icons/DTUplus-icon-192.png": "3a32fa173d00dc1ef8a7d49babb8e36f",
"icons/DTUplus-icon-512.png": "55f5ae0e754de6d52500328f6ea00478",
"index.html": "81e13f73b8fa34f0ae3b0d2822666aef",
"/": "81e13f73b8fa34f0ae3b0d2822666aef",
"main.dart.js": "d576e701f1d78b3c1a376c3b61836300",
"manifest.json": "0fe817d0bbc6581d1251979835e5d469",
"version.json": "704fbb4d27dc2d9fa625e4ae3dd47709"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
