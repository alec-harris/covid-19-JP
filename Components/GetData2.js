import { map } from './Map/map.js';
import removeLayers from './Map/removeLayers.js';
import circlesLayers from './Map/circlesLayer.js';
import prefectLayers from './Map/prefectLayers.js';
import newCases from './Map/newCasesFill.js';
// import drawLineLayer from './Map/drawLineLayer.js';

import { mq, mq950 } from './constants.js';

import MapRegions from './regions.js';


const getDatas2 = () => {


    async function getData() {
       
        // map.on('click', function(e) {
            // When the map is clicked, get the geographic coordinate.


            // var p1 = new mapboxgl.Point(-77, 38);
            // var coordinate = map.unproject(p1);
            // console.log(coordinate.lng);


            // });
//         var logo = document.querySelector('#RTitle');
//         console.log(logo);
// var logoTextRectangle = logo.getBoundingClientRect();

// console.log("logo's left pos.:", logoTextRectangle.left);
// console.log("logo's right pos.:", logoTextRectangle.right);
        // document.addEventListener('click', (el) => {
        //     // function getOffset(el) {
        //         const rect = el.getBoundingClientRect();
        //         return {
        //           left: rect.left + window.scrollX,
        //           top: rect.top + window.scrollY,
        //     console.log(left, top);

        //         };
        //     //   };
              
        //     // var x = e.clientX;
        //     // var y = e.clientY;
        // });
        // console.log(map);
        const dataPrefs = await fetch('data/prefs2.json')
        .then(res => res.json())
        const apple = dataPrefs
        // console.log(apple);
        // console.log(apple.features);

        const Kanto = apple.features.filter((hero) => {
            return hero.properties.region == 'Kanto';
        });
        const union = turf.union(Kanto[0], Kanto[1], Kanto[2], Kanto[3], Kanto[4], Kanto[5], Kanto[6]);
        const filteredKanto = union;
       

        const Kansai = apple.features.filter((hero2) => {
            return hero2.properties.region == 'Kinki';
        });
        const unionKansai = turf.union(Kansai[0], Kansai[1], Kansai[2], Kansai[3], Kansai[4], Kansai[5], Kansai[6]);
        const filteredKansai = unionKansai;

        const Kyushu = apple.features.filter((hero) => {
            return hero.properties.region == 'Kyushu';
        });
        const unionKyushu = turf.union(Kyushu[0], Kyushu[1], Kyushu[2], Kyushu[3], Kyushu[4], Kyushu[5], Kyushu[6], Kyushu[7]);
        const filteredKyushu = unionKyushu;
        
        const Chubu = apple.features.filter((hero) => {
            return hero.properties.region == 'Chubu';
        });
        const unionChubu = turf.union(Chubu[0], Chubu[1], Chubu[2], Chubu[3], Chubu[4], Chubu[5], Chubu[6], Chubu[7], Chubu[8]);
        const filteredChubu = unionChubu;

        const Chugoku = apple.features.filter((hero) => {
            return hero.properties.region == 'Chugoku';
        });
        const unionChugoku = turf.union(Chugoku[0], Chugoku[1], Chugoku[2], Chugoku[3], Chugoku[4]);
        const filteredChugoku = unionChugoku;

        const Hokkaido = apple.features.filter((hero) => {
            return hero.properties.region == 'Hokkaido';
        });
        const filteredHokkaido = {
            "type":"FeatureCollection",
            "features": Hokkaido
        };

        const Shikoku = apple.features.filter((hero) => {
            return hero.properties.region == 'Shikoku';
        });
        const unionShikoku = turf.union(Shikoku[0], Shikoku[1], Shikoku[2], Shikoku[3]);
        const filteredShikoku = unionShikoku;

        const Tohoku = apple.features.filter((hero) => {
            return hero.properties.region == 'Tohoku';
        });
        const unionTohoku = turf.union(Tohoku[0], Tohoku[1], Tohoku[2], Tohoku[3], Tohoku[4], Tohoku[5]);
        const filteredTohoku = unionTohoku;

        

        const dataCountry = await fetch('data/countries.json')
        .then(res => res.json());
        const greenApple = dataCountry

    
        const data = await fetch('https://data.covid19japan.com/summary/latest.json')
        .then(response => response.json())

            // const grape = data;
            const grapes = data.prefectures

            const COLOR_NONE = "rgba(255, 255, 255, 0)";
            // const COLOR_DARK_BURGUNDY = "rgba(255, 255, 255, 0.0)";

            // const COLOR_DARK_BURGUNDY = "rgba(255, 43, 0, 0.9)";
            const COLOR_DARK_BURGUNDY = "rgba(255, 0, 0, 0.1)"; /* CURRENT */

            // const prefecturePaint = ["match", ["get", "NAME_1"]];
            const prefecturePaint = ["match", ["get", "name"]];
            grapes.forEach((prefecture) => {

                //determine whether today's cases have been updated yet(if NOT, sumNewCases = 0)
                const nC = grapes
                const newCases = nC.map(e => e.newlyConfirmed); //produces an arrray of 50 numbers
                const sumNewCases = newCases.reduce((total, amount) => total + amount); //add the (above)50 numbers together
        
                // const yesdayConfirmed = nC.map(e => e.yesterdayConfirmed);
                // const sumyesdayConfirmed = yesdayConfirmed.reduce((total, amount) => total + amount);
        
                let cases = parseInt(prefecture.newlyConfirmed);
                let yesterdayCases = parseInt(prefecture.yesterdayConfirmed);
    
                
                if (sumNewCases == 0) {
                if (yesterdayCases > 0) {
                    prefecturePaint.push(prefecture.name);
                    if (yesterdayCases > 0) {
                        prefecturePaint.push(COLOR_DARK_BURGUNDY);
                    }
                }
                } else if (sumNewCases > 0) {
                if (cases > 0) {
                    prefecturePaint.push(prefecture.name);
                    if (cases > 0) {
                        prefecturePaint.push(COLOR_DARK_BURGUNDY);
                    }
                }
                }

                // console.log(prefecture)
            });
        
            prefecturePaint.push(COLOR_NONE);
        
            const TCon = grapes.findIndex(e => e.name == 'Tokyo')
            const TokyoName = grapes[TCon].name
            const TokyoCon = grapes[TCon].active
            const Tlng = 139.5
            const Tlat = 35.6762

            const OCon = grapes.findIndex(e => e.name == 'Osaka')
            const Oname = grapes[OCon].name
            const Onum = grapes[OCon].active
            // const Olng = 135.5023
            const Olng = 135.55
            const Olat = 34.6937

            const KanCon = grapes.findIndex(e => e.name == 'Kanagawa')
            const Kanagawanum = grapes[KanCon].active

            const HokkaidoCon = grapes.findIndex(e => e.name == 'Hokkaido')
            const Hokkaidonum = grapes[HokkaidoCon].active

            const SaitamaCon = grapes.findIndex(e => e.name == 'Saitama')
            const Saitamanum = grapes[SaitamaCon].active

            const ChibaCon = grapes.findIndex(e => e.name == 'Chiba')
            const Chibanum = grapes[ChibaCon].active
            
            const Diamond = grapes.findIndex(e => e.name == 'Diamond Princess Cruise Ship')
            const Diamondnum = grapes[Diamond].active

            const HyogoCon = grapes.findIndex(e => e.name == 'Hyogo')
            const Hyogonum = grapes[HyogoCon].active

            const FukuokaCon = grapes.findIndex(e => e.name == 'Fukuoka')
            const Fukuokanum = grapes[FukuokaCon].active

            const AichiCon = grapes.findIndex(e => e.name == 'Aichi')
            const Aichinum = grapes[AichiCon].active

            const KyotoCon = grapes.findIndex(e => e.name == 'Kyoto')
            const Kyotonum = grapes[KyotoCon].active

            const IshikawaCon = grapes.findIndex(e => e.name == 'Ishikawa')
            const Ishikawanum = grapes[IshikawaCon].active

            const ToyamaCon = grapes.findIndex(e => e.name == 'Toyama')
            const Toyamanum = grapes[ToyamaCon].active

            const IbarakiCon = grapes.findIndex(e => e.name == 'Ibaraki')
            const Ibarakinum = grapes[IbarakiCon].active

            const HiroshimaCon = grapes.findIndex(e => e.name == 'Hiroshima')
            const Hiroshimanum = grapes[HiroshimaCon].active

            const PortCon = grapes.findIndex(e => e.name == 'Port Quarantine')
            const PortQnum = grapes[PortCon].active

            const GifuCon = grapes.findIndex(e => e.name == 'Gifu')
            const Gifunum = grapes[GifuCon].active

            const NagShCon = grapes.findIndex(e => e.name == 'Nagasaki Cruise Ship')
            const NagShipnum = grapes[NagShCon].active

            const GunmaCon = grapes.findIndex(e => e.name == 'Gunma')
            const Gunmanum = grapes[GunmaCon].active

            const OkinawaCon = grapes.findIndex(e => e.name == 'Okinawa')
            const Okinawanum = grapes[OkinawaCon].active

            const FukuiCon = grapes.findIndex(e => e.name == 'Fukui')
            const Fukuinum = grapes[FukuiCon].active

            const ShigaCon = grapes.findIndex(e => e.name == 'Shiga')
            const Shiganum = grapes[ShigaCon].active

            const NaraCon = grapes.findIndex(e => e.name == 'Nara')
            const Naranum = grapes[NaraCon].active

            const MiyagiCon = grapes.findIndex(e => e.name == 'Miyagi')
            const Miyaginum = grapes[MiyagiCon].active

            const FukushimaCon = grapes.findIndex(e => e.name == 'Fukushima')
            const Fukushimanum = grapes[FukushimaCon].active

            const NiigataCon = grapes.findIndex(e => e.name == 'Niigata')
            const Niigatanum = grapes[NiigataCon].active

            const NaganoCon = grapes.findIndex(e => e.name == 'Nagano')
            const Naganonum = grapes[NaganoCon].active

            const KochiCon = grapes.findIndex(e => e.name == 'Kochi')
            const Kochinum = grapes[KochiCon].active

            const ShizuokaCon = grapes.findIndex(e => e.name == 'Shizuoka')
            const Shizuokanum = grapes[ShizuokaCon].active

            const YamagataCon = grapes.findIndex(e => e.name == 'Yamagata')
            const Yamagatanum = grapes[YamagataCon].active

            const EhimeCon = grapes.findIndex(e => e.name == 'Ehime')
            const Ehimenum = grapes[EhimeCon].active

            const WakayamaCon = grapes.findIndex(e => e.name == 'Wakayama')
            const Wakayamanum = grapes[WakayamaCon].active

            const OitaCon = grapes.findIndex(e => e.name == 'Oita')
            const Oitanum = grapes[OitaCon].active

            const YamanashiCon = grapes.findIndex(e => e.name == 'Yamanashi')
            const Yamanashinum = grapes[YamanashiCon].active

            const TochigiCon = grapes.findIndex(e => e.name == 'Tochigi')
            const Tochiginum = grapes[TochigiCon].active

            const KumamotoCon = grapes.findIndex(e => e.name == 'Kumamoto')
            const Kumamotonum = grapes[KumamotoCon].active

            const SagaCon = grapes.findIndex(e => e.name == 'Saga')
            const Saganum = grapes[SagaCon].active

            const MieCon = grapes.findIndex(e => e.name == 'Mie')
            const Mienum = grapes[MieCon].active

            const YamaguchiCon = grapes.findIndex(e => e.name == 'Yamaguchi')
            const Yamaguchinum = grapes[YamaguchiCon].active

            const KagawaCon = grapes.findIndex(e => e.name == 'Kagawa')
            const Kagawanum = grapes[KagawaCon].active

            const AomoriCon = grapes.findIndex(e => e.name == 'Aomori')
            const Aomorinum = grapes[AomoriCon].active

            const OkayamaCon = grapes.findIndex(e => e.name == 'Okayama')
            const Okayamanum = grapes[OkayamaCon].active

            const ShimaneCon = grapes.findIndex(e => e.name == 'Shimane')
            const Shimanenum = grapes[ShimaneCon].active

            const NagasakiCon = grapes.findIndex(e => e.name == 'Nagasaki')
            const Nagasakinum = grapes[NagasakiCon].active

            const MiyazakiCon = grapes.findIndex(e => e.name == 'Miyazaki')
            const Miyazakinum = grapes[MiyazakiCon].active

            const AkitaCon = grapes.findIndex(e => e.name == 'Akita')
            const Akitanum = grapes[AkitaCon].active

            const KagoshimaCon = grapes.findIndex(e => e.name == 'Kagoshima')
            const Kagoshimanum = grapes[KagoshimaCon].active

            const UnspecifiedCon = grapes.findIndex(e => e.name == 'Unspecified')
            const Unspecifiednum = grapes[UnspecifiedCon].active

            const TokushimaCon = grapes.findIndex(e => e.name == 'Tokushima')
            const Tokushimanum = grapes[TokushimaCon].active

            const TottoriCon = grapes.findIndex(e => e.name == 'Tottori')
            const Tottorinum = grapes[TottoriCon].active

            const IwateCon = grapes.findIndex(e => e.name == 'Iwate')
            const Iwatenum = grapes[IwateCon].active


    /* GEOJSON DATA */
    const area = {
        type: 'FeatureCollection',
        features: [
        {
            id: TokyoName,
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [Tlng, Tlat]
            },
            properties: {
                title: TokyoName,
                num: TokyoCon,
            }
        },
        {
            id: 'Osaka',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [Olng, Olat]
            },
            properties: {
                title: 'Osaka',
                num: Onum,
            }
        },
        {
            id: 'Kanagawa',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [139.2, 35.4]
            },
            properties: {
                title: 'Kanagawa',
                num: Kanagawanum,
            }
        },
        {
            id: 'Hokkaido',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [142.8635, 43.2203]
            },
            properties: {
                title: 'Hokkaido',
                num: Hokkaidonum,
            }
        },
        {
            id: 'Saitama',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [139.35, 36]
            },
            properties: {
                title: 'Saitama',
                num: Saitamanum,
            }
        },
        {
            id: 'Chiba',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [140.3, 35.6074]
            },
            properties: {
                title: 'Chiba',
                num: Chibanum,
            }
        },
        {
            id: 'Diamond Princess Cruise Ship',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [139.6649, 35.2]
            },
            properties: {
                title: 'Diamond Princess',
                num: Diamondnum,
            }
        },
        {
            id: 'Hyogo',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [134.8, 35]
            },
            properties: {
                title: 'Hyogo',
                num: Hyogonum,
            }
        },
        {
            id: 'Fukuoka',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [130.7, 33.5902]
            },
            properties: {
                title: 'Fukuoka',
                num: Fukuokanum,
            }
        },
        {
            id: 'Aichi',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [137.2924, 35.0183]
            },
            properties: {
                title: 'Aichi',
                num: Aichinum,
            }
        },
        {
            id: 'Kyoto',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.5, 35.2]
            },
            properties: {
                title: 'Kyoto',
                num: Kyotonum,
            }
        },
        {
            id: 'Ishikawa',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [136.5290, 36.3260]
            },
            properties: {
                title: 'Ishikawa',
                num: Ishikawanum,
            }
        },
        {
            id: 'Toyama',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [137.2137, 36.6958]
            },
            properties: {
                title: 'Toyama',
                num: Toyamanum,
            }
        },
        {
            id: 'Ibaraki',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [140.4245, 36.2869]
            },
            properties: {
                title: 'Ibaraki',
                num: Ibarakinum,
            }
        },
        {
            id: 'Hiroshima',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [132.7, 34.5]
            },
            properties: {
                title: 'Hiroshima',
                num: Hiroshimanum,
            }
        },
        {
            id: 'Port Quarantine',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: []
            },
            properties: {
                title: 'Port Quarantine',
                num: PortQnum,
            }
        },
        {
            id: 'Gifu',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [136.8, 35.6]
            },
            properties: {
                title: 'Gifu',
                num: Gifunum,
            }
        },
        {
            id: 'Nagasaki Cruise Ship',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [129.8684, 32.7457]
            },
            properties: {
                title: 'Cruise Ship',
                num: NagShipnum,
            }
        },
        {
            id: 'Gunma',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [138.8800, 36.5605]
            },
            properties: {
                title: 'Gunma',
                num: Gunmanum,
            }
        },
        {
            id: 'Okinawa',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [127.7, 26.5]
            },
            properties: {
                title: 'Okinawa',
                num: Okinawanum,
            }
        },
        {
            id: 'Fukui',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [136.2169, 36.0641]
            },
            properties: {
                title: 'Fukui',
                num: Fukuinum,
            }
        },
        {
            id: 'Shiga',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [136.0563, 35.3292]
            },
            properties: {
                title: 'Shiga',
                num: Shiganum,
            }
        },
        {
            id: 'Nara',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.9, 34.3]
            },
            properties: {
                title: 'Nara',
                num: Naranum,
            }
        },
        {
            id: 'Miyagi',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [141.1193, 38.6306]
            },
            properties: {
                title: 'Miyagi',
                num: Miyaginum,
            }
        },
        {
            id: 'Fukushima',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [140.4748, 37.4]
            },
            properties: {
                title: 'Fukushima',
                num: Fukushimanum,
            }
        },
        {
            id: 'Niigata',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [139.0364, 37.6]
            },
            properties: {
                title: 'Niigata',
                num: Niigatanum,
            }
        },
        {
            id: 'Nagano',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [138.1, 36.3]
            },
            properties: {
                title: 'Nagano',
                num: Naganonum,
            }
        },
        {
            id: 'Kochi',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [133.2522, 33.5481]
            },
            properties: {
                title: 'Kochi',
                num: Kochinum,
            }
        },
        {
            id: 'Shizuoka',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [138.1, 34.9756]
            },
            properties: {
                title: 'Shizuoka',
                num: Shizuokanum,
            }
        },
        {
            id: 'Yamagata',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [140.2, 38.2554]
            },
            properties: {
                title: 'Yamagata',
                num: Yamagatanum,
            }
        },
        {
            id: 'Ehime',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [132.7858, 33.6025]
            },
            properties: {
                title: 'Ehime',
                num: Ehimenum,
            }
        },
        {
            id: 'Wakayama',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.3, 34]
            },
            properties: {
                title: 'Wakayama',
                num: Wakayamanum,
            }
        },
        {
            id: 'Oita',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [131.3, 33.2396]
            },
            properties: {
                title: 'Oita',
                num: Oitanum,
            }
        },
        {
            id: 'Yamanashi',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [138.6873, 35.6933]
            },
            properties: {
                title: 'Yamanashi',
                num: Yamanashinum,
            }
        },
        {
            id: 'Tochigi',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [139.8547, 36.6715]
            },
            properties: {
                title: 'Tochigi',
                num: Tochiginum,
            }
        },
        {
            id: 'Kumamoto',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [130.9, 32.8032]
            },
            properties: {
                title: 'Kumamoto',
                num: Kumamotonum,
            }
        },
        {
            id: 'Saga',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [130.1009, 33.2631]
            },
            properties: {
                title: 'Saga',
                num: Saganum,
            }
        },
        {
            id: 'Mie',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [136.5, 34.5]
            },
            properties: {
                title: 'Mie',
                num: Mienum,
            }
        },
        {
            id: 'Yamaguchi',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [131.4738, 34.1783]
            },
            properties: {
                title: 'Yamaguchi',
                num: Yamaguchinum,
            }
        },
        {
            id: 'Kagawa',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [134.0199, 34.2226]
            },
            properties: {
                title: 'Kagawa',
                num: Kagawanum,
            }
        },
        {
            id: 'Aomori',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [140.7474, 40.65]
            },
            properties: {
                title: 'Aomori',
                num: Aomorinum,
            }
        },
        {
            id: 'Okayama',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [133.9198, 34.9]
            },
            properties: {
                title: 'Okayama',
                num: Okayamanum,
            }
        },
        {
            id: 'Shimane',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [132.6293, 35.1244]
            },
            properties: {
                title: 'Shimane',
                num: Shimanenum,
            }
        },
        {
            id: 'Nagasaki',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [130.05, 33]
            },
            properties: {
                title: 'Nagasaki',
                num: Nagasakinum,
            }
        },
        {
            id: 'Miyazaki',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [131.4, 32.3]
            },
            properties: {
                title: 'Miyazaki',
                num: Miyazakinum,
            }
        },
        {
            id: 'Akita',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [140.4, 39.7200]
            },
            properties: {
                title: 'Akita',
                num: Akitanum,
            }
        },
        {
            id: 'Kagoshima',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [130.5571, 31.8]
            },
            properties: {
                title: 'Kagoshima',
                num: Kagoshimanum,
            }
        },
        {
            id: 'Unspecified',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: []
            },
            properties: {
                title: 'Unspecified',
                num: Unspecifiednum,
            }
        },
        {
            id: 'Tokushima',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [134.3, 33.9]
            },
            properties: {
                title: 'Tokushima',
                num: Tokushimanum,
            }
        },
        {
            id: 'Tottori',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [133.9, 35.4]
            },
            properties: {
                title: 'Tottori',
                num: Tottorinum,
            }
        },
        {
            id: 'Iwate',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [141.3167, 39.4833]
            },
            properties: {
                title: 'Iwate',
                num: Iwatenum,
            }
        },
        
        ]
    };


    ///////////////////********  M       M  ********//////////////////
    ///////////////////********  M M   M M  ********//////////////////
    ///////////////////********  M  M M  M  ********//////////////////
    ///////////////////********  M   M   M  ********//////////////////
    /* ADD GEOJSON DATA POINTS TO MAP */
    map.on('load', function() {
        const layers = map.getStyle().layers;
        // console.log(layers);
        let firstSymbolId;
        for (let i = 0; i < layers.length; i++) {
            if (layers[i].type === 'symbol') {
                firstSymbolId = layers[i].id;
                break;
            }
        }
        // CITIES
        map.addSource('cities', {
            type: 'geojson',
            data: area, // inline
            'generateId': true,
            cluster: true,
            clusterMaxZoom: 14,
            clusterRadius: 40,
            clusterProperties: {
                'yes': ['+', ['get', 'num']]
            }
        });
        // PREFECTURES
        map.addSource('prefectures', {
            type: 'geojson',
            data: apple, // prefecture polygon boundary
            'generateId': true,
            // "promoteId": {"original": "features[0].properties.NAME_1"}

        });

        // COUNTRIES
        map.addSource('japan', {
            type: 'geojson',
            data: greenApple, // japan country
            'generateId': true,
            // "promoteId": {"original": "features[0].properties.NAME_1"}

        });

        // COUNTRY FILL LAYER
        // map.addLayer(
        //     {
        //     id: "country-layer",
        //     type: "fill",
        //     source: "japan",
        //     layout: {},
        //     paint: {
        //         // "fill-color": "rgb(53, 53, 53)",
        //         // "fill-color": "rgb(43, 43, 43)", ******current
        //         "fill-color": "rgba(43, 43, 43, 0.0)",
        //         // "fill-color": 
        //         //     [
        //         //     "interpolate",
        //         //     ["linear"],
        //         //     ["zoom"],
        //         //     4.5,
        //         //     "rgb(250,94,0)",
        //         //     5.9,
        //         //     "rgba(25, 25, 25, 0.0)",
        //         //     // 15,
        //         //     // 3
        //         //     ],
        //         // "fill-outline-color": "rgb(33,33,33)",
        //         // "fill-opacity": 1,
        //         // 'fill-opacity': [
        //         //   'case',
        //         //   ['boolean', ['feature-state', 'hover'], false],
        //         //   0,
        //         //   0
        //         //   ]
        //     },
        //     },
        // );

        // BACKGROUND LAYER
        // map.addLayer(
        //     {
        //         id: "background2",
        //         type: "background",
        //         paint: {
        //             "background-color": "rgba(14,14,14,0.1)",
        //             // "background-color": "rgba(0, 0, 255, 0.1)",
        //             // "background-color": "#222629"
        //             // "background-opacity": 1,
        //         }
        //     },
        //     firstSymbolId
        // );



        //***** IMPORTED LAYERS *****//
        removeLayers();

        const circles = new circlesLayers('cities');
        circles.drawCircles();
        
        const newCase = new newCases('prefectures', prefecturePaint);
        newCase.drawNewCases();
        
        const prefects = new prefectLayers('prefectures');
        prefects.drawPrefects();





        /////////********* LINE ********//////////
        // const drawtheline = new drawLineLayer(139.8, 36);
        // const drawtheline2 = new drawLineLayer(135.8, 34.7);
        // const drawtheline3 = new drawLineLayer(131.15, 32.65);
        // const drawtheline4 = new drawLineLayer(137.6, 35.8);
        // const drawtheline5 = new drawLineLayer(133.1, 34.8);
        // const drawtheline6 = new drawLineLayer(142.85, 42.65);
        // const drawtheline7 = new drawLineLayer(133.4, 33.7);
        // const drawtheline8 = new drawLineLayer(140.8, 39);

        // const drawTheLineArray = [drawtheline, drawtheline2, drawtheline3, drawtheline4, drawtheline5, drawtheline6, drawtheline7, drawtheline8];

        // if( mq950.matches || mq.matches ) {
            
        //     const clearCanvas = () => {
        //         setTimeout(() => {
        //             const canvas = document.getElementById('lineRegion2');
        //             const ctx = canvas.getContext('2d');
        //             ctx.clearRect(0, 0, canvas.width, canvas.height);
        //         }, 300);
        //     };
        //     clearCanvas();

        // } else {

            
        //     // TOKYO / KANTO
        //     const regionLine = document.querySelector('#region');
        //     regionLine.addEventListener('click', function() {

        //         drawTheLineArray.forEach(i => {
        //             i.stopTheLine();
        //         });

        //         drawtheline.drawTheInitial();
        //         drawtheline.drawTheLine();

        //     });

        //     // OSAKA / KANSAI
        //     const regionLine2 = document.querySelector('#region2');
        //     regionLine2.addEventListener('click', function() {

        //         drawTheLineArray.forEach(i => {
        //             i.stopTheLine();
        //         });

        //         drawtheline2.drawTheInitial();
        //         drawtheline2.drawTheLine();
            
        //     });

        //     // KYUSHU / MIYAZAKI
        //     const regionLine3 = document.querySelector('#region3');
        //     regionLine3.addEventListener('click', function() {

        //         drawTheLineArray.forEach(i => {
        //             i.stopTheLine();
        //         });

        //         drawtheline3.drawTheInitial();
        //         drawtheline3.drawTheLine();
            
            
        //     });

        //     const regionLine4 = document.querySelector('#region4');
        //     regionLine4.addEventListener('click', function() {

        //         drawTheLineArray.forEach(i => {
        //             i.stopTheLine();
        //         });

        //         drawtheline4.drawTheInitial();
        //         drawtheline4.drawTheLine();
                
        //     });

        //     const regionLine5 = document.querySelector('#region5');
        //     regionLine5.addEventListener('click', function() {
                
        //         drawTheLineArray.forEach(i => {
        //             i.stopTheLine();
        //         });

        //         drawtheline5.drawTheInitial();
        //         drawtheline5.drawTheLine();
                
        //     });

        //     const regionLine6 = document.querySelector('#region6');
        //     regionLine6.addEventListener('click', function() {

        //         drawTheLineArray.forEach(i => {
        //             i.stopTheLine();
        //         });

        //         drawtheline6.drawTheInitial();
        //         drawtheline6.drawTheLine();
                
        //     });

        //     const regionLine7 = document.querySelector('#region7');
        //     regionLine7.addEventListener('click', function() {

        //         drawTheLineArray.forEach(i => {
        //             i.stopTheLine();
        //         });

        //         drawtheline7.drawTheInitial();
        //         drawtheline7.drawTheLine();
                
        //     });

        //     const regionLine8 = document.querySelector('#region8');
        //     regionLine8.addEventListener('click', function() {

        //         drawTheLineArray.forEach(i => {
        //             i.stopTheLine();
        //         });

        //         drawtheline8.drawTheInitial();
        //         drawtheline8.drawTheLine();

        //     });

        //     const linZ = document.getElementById('fit');
        //     linZ.addEventListener('click', () => {

        //         setTimeout(() => {
        //             drawTheLineArray.forEach(i => {
        //                 i.stopTheLineFit();
        //             });
        //         }, 100);
                
        //     });
        // };
        
        
        


        
       
        

       
        
        
    ///////////////////********  M       M    RRRR R    ********//////////////////
    ///////////////////********  M M   M M    R      R  ********//////////////////
    ///////////////////********  M  M M  M    R RRR R   ********//////////////////
    ///////////////////********  M   M   M    R      R  ********//////////////////
        // REGION //
        const Kanto = data.regions.filter((hero) => {
            return hero.name == 'Kanto';
        });
        const fKanto = Kanto;
        const strawKanto = fKanto;

        const region = new MapRegions('region', strawKanto, 139.68, 36.22, filteredKanto, firstSymbolId);
        region.draw();


        // REGION 2 //
        const Kansai = data.regions.filter((hero) => {
            return hero.name == 'Kansai';
        });
        const fKansai = Kansai;
        const strawKansai = fKansai;

        const region2 = new MapRegions('region2', strawKansai, 135.69, 34.84, filteredKansai, firstSymbolId);
        region2.draw()


        // REGION 3 //
        const Kyushu = data.regions.filter((hero) => {
            return hero.name == 'Kyushu';
        });
        const fKyushu = Kyushu;
        const strawKyushu = fKyushu;

        const region3 = new MapRegions('region3', strawKyushu, 130.95, 32.68, filteredKyushu, firstSymbolId);
        region3.draw()
        
        
        
        // REGION 4 //
        const Chubu = data.regions.filter((hero) => {
            return hero.name == 'Chubu';
        });
        const fChubu = Chubu;
        const strawChubu = fChubu;

        const region4 = new MapRegions('region4', strawChubu, 138.04, 36.06, filteredChubu, firstSymbolId);
        region4.draw()
        

        // REGION 5 //
        const Chugoku = data.regions.filter((hero) => {
            return hero.name == 'Chugoku';
        });
        const fChugoku = Chugoku;
        const strawChugoku = fChugoku;

        const region5 = new MapRegions('region5', strawChugoku, 133.14, 34.94, filteredChugoku, firstSymbolId);
        region5.draw()



        // REGION 6 //
        const Hokkaido = data.regions.filter((hero) => {
            return hero.name == 'Hokkaido';
        });
        const fHokkaido = Hokkaido;
        const strawHokkaido = fHokkaido;
        // console.log(strawHokkaido);
        
        const region6 = new MapRegions('region6', strawHokkaido, 142.99, 43.46, filteredHokkaido, firstSymbolId);
        region6.draw()
        

        // REGION 7 //
        const Shikoku = data.regions.filter((hero) => {
            return hero.name == 'Shikoku';
        });
        const fShikoku = Shikoku;
        const strawShikoku = fShikoku;
        
        const region7 = new MapRegions('region7', strawShikoku, 133.34, 33.72, filteredShikoku, firstSymbolId);
        region7.draw()



        // REGION 8 //
        const Tohoku = data.regions.filter((hero) => {
            return hero.name == 'Tohoku';
        });
        const fTohoku = Tohoku;
        const strawTohoku = fTohoku;
        
        const region8 = new MapRegions('region8', strawTohoku, 140.72, 39.7, filteredTohoku, firstSymbolId);
        region8.draw()


        const regionName = document.getElementById('regionName');
        const regionOpen = document.getElementById('regions');
        const regionClose = document.querySelectorAll('.regN');
        const RT = document.querySelector('#RTitle');

        jQuery.support.touch = 'ontouchend' in document;

        //REGIONS SVG HOVER STATE COLOR
        $("#regionName").on('mouseenter', function() {
            if(mq.matches) {
                $(".fa-share-alt").css({"color": ""});
            } else {
                // $("#share").stop().fadeIn(200);
                // $(".fa-share-alt").css({"color": "#66ff00"});
                // $(".fa-image").css({"color": "rgba(187, 187, 187, 0.87)"});
                $(".fa-image").css({"color": "rgb(217, 255, 0)"});
                // $(".fa-image").css({"color": "rgba(243,243,2, 0.87)"});
            }
            
        });
        $("#regionName").on('mouseleave', function() {
            // $("#share").stop().fadeOut(200);
            $(".fa-image").css("color", "");
        });

        // if( jQuery.support.touch ) {
        //     regionName.addEventListener('click', () => {
        //         if(!$('#regionName').hasClass('open')) {

        //             $('#regionName').addClass('open');
        //             $('#regions').addClass('show');

        //         } else {

        //             $('#regionName').toggleClass('open');
        //             $('#regions').toggleClass('show');

        //         }
        //         // regionOpen.style.display = "block";
        //     // document.getElementById("regions").style.opacity = 1;

        //     });
        // }
        // if (mq.matches) {
           
        //     regionName.addEventListener('click', () => {
        //         if(!$('#regionName').hasClass('open')) {

        //             $('#regionName').addClass('open');
        //             $('#regions').addClass('show');

        //         } else {

        //             $('#regionName').toggleClass('open');
        //             $('#regions').toggleClass('show');

        //         }
        //     });
            
        // } else {
            regionName.addEventListener('click', () => {

                if(!$('#regionName').hasClass('open')) {

                    $('#regionName').addClass('open');
                    $('#regions').addClass('show');

                } else {

                    $('#regionName').toggleClass('open');
                    $('#regions').toggleClass('show');

                }
            });
        // };

        // for ( let i = 0; i < regionClose.length; i++) {
        //     regionClose[i].addEventListener("click",function() {
        //         // function will never know what 'i' is here
        //         this.style.color = "";
        //         $('#regions').removeClass('show');
        //         $('#regionName').removeClass('open');
        //         // console.log('regNNN');
        //     });
        // };
        let x = 0; 
        regionClose.forEach(div => div.onclick = () => {
            const SVG = document.querySelector('#RegBorder');

            if(x == 0) {
                SVG.classList.remove('spinBack');
                SVG.classList.add('spin');
            } else {
                SVG.classList.remove('spin');
                x = 1;
            }
            


            this.style.color = "";
            $('#regions').removeClass('show');
            $('#regionName').removeClass('open');
           
        });
            
       

        

        // // HIGHLIGHT PREFECTURE OUTLINE (on hover and on accordion click)
        // map.addLayer(
        //     {
        //     id: "prefecture-outline-layer",
        //     type: "line",
        //     source: "prefectures",
        //     layout: {},
        //     paint: {
        //         // "line-width": 1.5,
        //         "line-width": [
        //             "interpolate",
        //             ["exponential", 2],
        //             ["zoom"],
        //             // 3,
        //             // .5,
        //             // 7.5,
        //             // 1
        //             4, 
        //             0.5,
        //             7,
        //             0.5,//thicker line on inspect
        //         ],
        //         // "line-dasharray": [2, 1],
        //         // "line-color": "rgb(178, 34, 34)",
        //         "line-color": "rgb(0,250,0)",
        //         // "line-color": [
        //         //     "interpolate",
        //         //     ["linear"],
        //         //     ["zoom"],
        //         //     4,
        //         //     "rgb(250,250,250)",
        //         //     5.9,
        //         //     // "rgba(255,0,0,0.9)",
        //         //     "rgb(250,250,250)",
        //         // ],
        //         'line-opacity': [
        //         'case',
        //         ['boolean', ['feature-state', 'hover'], false],
        //         1,
        //         0.1
        //         ]
        //     },
        //     },
            
        // );

        // this loads layers above the first argument
        // map.moveLayer("region-layer", "unclustered-label-numbers");
        // map.moveLayer("region-layer2", "unclustered-label-numbers");
        // map.moveLayer("region-layer3", "unclustered-label-numbers");
        // map.moveLayer("region-layer4", "unclustered-label-numbers");
        // map.moveLayer("region-layer5", "unclustered-label-numbers");
        // map.moveLayer("region-layer6", "unclustered-label-numbers");
        // map.moveLayer("region-layer7", "unclustered-label-numbers");
        // map.moveLayer("region-layer8", "unclustered-label-numbers");
        // map.moveLayer("region-layer", "prefecture-outline-layer");
        // map.moveLayer("region2-layer", "prefecture-outline-layer");
        // map.moveLayer("region3-layer", "prefecture-outline-layer");
        // map.moveLayer("region4-layer", "prefecture-outline-layer");
        // map.moveLayer("region5-layer", "prefecture-outline-layer");
        // map.moveLayer("region6-layer", "prefecture-outline-layer");
        // map.moveLayer("region7-layer", "prefecture-outline-layer");
        // map.moveLayer("region8-layer", "prefecture-outline-layer");
        // map.moveLayer("unclustered-label");

        let hoveredStateId = null;

        map.on('mousemove', 'prefecture-layer', (e) => {
            map.setFeatureState(
            { source: 'prefectures', id: hoveredStateId },
            { hover: false }
            );
            // console.log(e.features)
            if (e.features.length > 0) {
            if (hoveredStateId) {
            map.setFeatureState(
                { source: 'prefectures', id: hoveredStateId },
                { hover: false }
            );
            }
            hoveredStateId = e.features[0].id;
            map.setFeatureState(
            { source: 'prefectures', id: hoveredStateId },
            { hover: true }
            );
            }
        });
            
        // When the mouse leaves the state-fill layer, update the feature state of the
        // previously hovered feature.
        map.on('mouseleave', 'prefecture-layer', (e) => {
            // console.log(e)
            
            // console.log(hoveredStateId);
            if (e) {
            map.setFeatureState(
                { source: 'prefectures', id: hoveredStateId },
                { hover: false }
            );
            }
            hoveredStateId = null;
        });

        // // prefecture outline on static map (and prefecture highlight color on map click)
        // map.addLayer(
        //     {
        //     id: "prefecture-outline-layer2",
        //     type: "line",
        //     source: "prefectures",
        //     layout: {},
        //     paint: {
        //         "line-width": 2,
        //         // "line-width": [
        //         //     "interpolate",
        //         //     ["exponential", 2],
        //         //     ["zoom"],
        //         //     // 3,
        //         //     // .5,
        //         //     // 7.5,
        //         //     // 1
        //         //     4, 
        //         //     0.5,
        //         //     5.9,
        //         //     0.5,//thicker line on inspect
        //         // ],
        //         // "line-dasharray": [2, 1],
        //         // "line-color": "rgb(178, 34, 34)",
        //         "line-color": "rgb(50,50,250)",
        //         // "line-color": [
        //         //     "interpolate",
        //         //     ["linear"],
        //         //     ["zoom"],
        //         //     4,
        //         //     "rgb(250,250,250)",
        //         //     5.9,
        //         //     "rgb(178,34,34)",
        //         //     // "rgb(250,250,250)",

                    
        //         // ],
        //         'line-opacity': [
        //         'case',
        //         ['boolean', ['feature-state', 'click'], false],
        //         1,
        //         0.1
        //         ]
        //     },
        //     },
        // );

        
        let hoveredStateId2 = null;

        map.on('click', 'prefecture-layer', (e) => {
            map.removeFeatureState(
            { source: 'prefectures', id: hoveredStateId2 },

            )
            // map.setFeatureState(
            //   { source: 'cities', id: hoveredStateId2 },
            //   { click: false }
            // );
            // console.log(e.features)
            if (e.features.length > 0) {
            if (hoveredStateId2) {
            map.setFeatureState(
                { source: 'prefectures', id: hoveredStateId2 },
                { click: false }
            );
            }
            hoveredStateId2 = e.features[0].id;
            map.setFeatureState(
            { source: 'prefectures', id: hoveredStateId2 },
            { click: true }
            );
            } 
        });

        map.on('click', 'prefecture-layer', (e) => {
            if (mq.matches) {
                map.flyTo({
                    center: e.lngLat,
                    zoom: 5.9,
                    offset: [0, -200],
                });
            } else {
                map.flyTo({
                    center: e.lngLat,
                    zoom: 7,
                    offset: [200, 0],
                });
            }
            
            const features = map.queryRenderedFeatures(e.point, { layers: ['prefecture-layer'] });
            // console.log(features);
            if (features.length) {
                const clickedPoint = features[0];
                const selectedFeature1 = clickedPoint.properties.name;
                // console.log(selectedFeature1)
                if (selectedFeature1 === 'Hyōgo') {
                    document.getElementById('Hyogo').click(); //click() simulates a mouse click on an element
                } else {
                    document.getElementById(selectedFeature1).click(); //click() simulates a mouse click on an element

                }
                const details = document.querySelectorAll(".clickDetails");
                details.forEach((elem, i) => {

                    if(details[i].classList.contains("openG")) {
                        details[i].click();
                    } else {
                        return
                    }

                });
                // selectedFeature1 = (geojson prop name: title1) and matches it to (id="title1" from html)
            }
        });
            
        // When the mouse leaves the state-fill layer, update the feature state of the
        // previously hovered feature.
        //   map.on('click', 'unclustered-label', (e) => {
        //     // console.log(e)
            
        //     // console.log(hoveredStateId);
        //     if (e) {
        //       map.setFeatureState(
        //         { source: 'cities', id: hoveredStateId2 },
        //         { click: false }
        //       );
        //     }
        //     hoveredStateId2 = null;
        //   });


        // inspect a cluster on click
        // map.on('click', 'clusters', function(e) {
        //     const features = map.queryRenderedFeatures(e.point, {
        //         layers: ['clusters']
        //     });
        //     const clusterId = features[0].properties.cluster_id;
        //     map.getSource('cities').getClusterExpansionZoom(
        //         clusterId,
        //         function(err, zoom) {
        //             if (err) return;
        //             if (mq.matches) {
        //                 map.easeTo({
        //                     center: features[0].geometry.coordinates,
        //                     zoom: zoom,
        //                     offset: [0, -200],
        //                 });
        //             } else {
        //                 map.easeTo({
        //                     center: features[0].geometry.coordinates,
        //                     zoom: zoom,
        //                     offset: [200, 0],
        //                 });
        //             }
        //         }
        //     );
        // });

        //center and zoom map on clicked symbol(circle) and open dropdown in legend
        // map.on('click', 'prefecture-layer', function(e) {
        //     // e.preventDefault();
        //     // e.stopPropagation();
        //     map.flyTo({ 
        //         center: e.features[0].geometry.coordinates,
        //         // zoom: 8,
        //     });
        //     const features = map.queryRenderedFeatures(e.point, { layers: ['prefecture-layer'] });
        //     // console.log(features);
        //     if (features.length) {
        //         const clickedPoint = features[0];
        //         const selectedFeature1 = clickedPoint.properties.title;
        //         // console.log(selectedFeature1)

        //         // selectedFeature1 = (geojson prop name: title1) and matches it to (id="title1" from html)
        //         document.getElementById(selectedFeature1).click(); //click() simulates a mouse click on an element
        //     }
        // });
    });
    };
    getData();
};

export default getDatas2;