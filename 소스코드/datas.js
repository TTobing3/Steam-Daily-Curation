import BorderLands3 from '../assets/Images/Titles/BorderLands3.png';
import CitiesSkylines from '../assets/Images/Titles/CitiesSkylines.png';
import CrabChampions from '../assets/Images/Titles/CrabChampions.png';
import DontStarve from '../assets/Images/Titles/DontStarve.png';
import EldenRing from '../assets/Images/Titles/EldenRing.png';
import GoGoTown from '../assets/Images/Titles/GoGoTown.png';
import Hades from '../assets/Images/Titles/Hades.png';
import HogwartsLegacy from '../assets/Images/Titles/HogwartsLegacy.png';
import Noita from '../assets/Images/Titles/Noita.png';
import Palia from '../assets/Images/Titles/Palia.png';
import PlanetCoaster from '../assets/Images/Titles/PlanetCoaster.png';
import StardewValley from '../assets/Images/Titles/StardewValley.png';
import Teravit from '../assets/Images/Titles/Teravit.png';
import Valheim from '../assets/Images/Titles/Valheim.png';
import TwentyXX from '../assets/Images/Titles/20xx.png';

export const players =
[
  { id: "ttobing3", pw: "123456"},
  { id: "silversnow", pw: "123456"} ,
  { id: "1", pw: "1"} 
]

/*
-게임 및 장르 텍스트 데이터를 js 코드 양식으로 변형할 때 챗 지피티 활용
*/

export const genres = 
[ 
  '로그라이크', 
  '시뮬레이션', 
  'RPG'
];

export const totalGenres = 
[ 
  '로그라이크', 
  '액션', 
  '어드벤처', 
  'RPG', 
  '전략', 
  '캐주얼', 
  '스포츠', 
  '레이싱', 
  '교육', 
  '시뮬레이션', 
  '샌드박스', 
  '퍼즐', 
  '공포', 
  'FPS', 
  'TPS', 
  '리듬', 
  '생존', 
  '탐험', 
  '턴제 전략'
];

export const games = [
  { title: 'BORDERLANDS3', genre: 'RPG', link: 'https://store.steampowered.com/app/397540/_3/?l=koreana', image: BorderLands3 },
  { title: 'Valheim', genre: 'RPG', link: 'https://store.steampowered.com/app/892970/Valheim/?l=koreana', image: Valheim },
  { title: 'ELDEN RING', genre: 'RPG', link: 'https://store.steampowered.com/app/1245620/ELDEN_RING/?l=koreana&curator_clanid=27576459', image: EldenRing },
  { title: 'TERAVIT', genre: 'RPG', link: 'https://store.steampowered.com/app/1743650/Teravit/?l=koreana', image: Teravit },
  { title: 'HOGWARTS LEGACY', genre: 'RPG', link: 'https://store.steampowered.com/app/990080/_/?l=koreana', image: HogwartsLegacy },
  { title: 'Noita', genre: '로그라이크', link: 'https://store.steampowered.com/app/881100/Noita/?l=koreana', image: Noita },
  { title: '20xx', genre: '로그라이크', link: 'https://store.steampowered.com/app/322110/20XX/?l=koreana', image: TwentyXX },
  { title: 'HADES', genre: '로그라이크', link: 'https://store.steampowered.com/app/1145360/Hades/?l=koreana', image: Hades },
  { title: 'Don’t Starve', genre: '로그라이크', link: 'https://store.steampowered.com/app/219740/Dont_Starve/?l=koreana', image: DontStarve },
  { title: 'CRAB CHAMPIONS', genre: '로그라이크', link: 'https://store.steampowered.com/app/774801/Crab_Champions/?l=koreana', image: CrabChampions },
  { title: 'STARDEW VALLEY', genre: '시뮬레이션', link: 'https://store.steampowered.com/app/413150/Stardew_Valley/?l=koreana', image: StardewValley },
  { title: 'Palia', genre: '시뮬레이션', link: 'https://store.steampowered.com/app/2707930/Palia/', image: Palia },
  { title: 'CITIES SKYLINES', genre: '시뮬레이션', link: 'https://store.steampowered.com/app/255710/Cities_Skylines/?l=koreana', image: CitiesSkylines },
  { title: 'GO-GO Town!', genre: '시뮬레이션', link: 'https://store.steampowered.com/app/2195120/GoGo_Town/', image: GoGoTown },
  { title: 'PLANET COASTER', genre: '시뮬레이션', link: 'https://store.steampowered.com/app/493340/_/?l=koreana', image: PlanetCoaster },
  
];

export const gamesByGenre = [
  { genre: 'RPG', titles: [ 'BORDERLANDS3', 'HOGWARTS LEGACY', 'Valheim', 'ELDEN RING', 'TERAVIT' ] },
  { genre: '로그라이크', titles: [ 'Noita', '20xx', 'HADES', 'Don’t Starve', 'CRAB CHAMPIONS' ] },
  { genre: '시뮬레이션', titles: [ 'STARDEW VALLEY', 'Palia', 'CITIES SKYLINES', 'GO-GO Town!', 'PLANET COASTER' ] },
];

export const weeklyDatas = [
  { date: "12/11", genre: "Horror", discount: 50, gameName: "BORDERLANDS3", rank: "gold" },
  { date: "", genre: "Strategy", discount: 30, gameName: "Valheim", rank: "silver" },
  { date: "", genre: "Horror", discount: 30, gameName: "", rank: "silver" },
  { date: "", genre: "Indie", discount: 10, gameName: "", rank: "bronze" },
  { date: "", genre: "FPS", discount: 90, gameName: "HADES", rank: "diamond" },
  { date: "", genre: "Horror", discount: 10, gameName: "Noita", rank: "bronze" },
  { date: "", genre: "RPG", discount: 10, gameName: "PLANET COASTER", rank: "bronze" },
];
