import { Song, ScheduleDay } from './types';

export const HOUSE_SCHEDULE: ScheduleDay[] = [
  {
    date: "19/12/2025",
    day: "Friday",
    startTime: "7 PM",
    startHouse: "Joby & Sogi",
    houses: [
      "Anto & Rosy",
      "Biju & Shaiby",
      "Jiss & Elizabeth",
      "Justin & Nimmi",
      "Leo & Jamina",
      "Mathew & Marykutty"
    ]
  },
  {
    date: "20/12/2025",
    day: "Saturday",
    startTime: "6 PM",
    startHouse: "Manoj & Shiny",
    houses: [
      "Shijo & Sherin",
      "Manoje Devasia & Betsy",
      "Solan & Smitha",
      "Anish & Bincy",
      "Jobin & Jisha"
    ]
  }
];

export const INITIAL_SONGS: Song[] = [
  {
    id: 1,
    title: 'കണ്ണും കണ്ണും കാത്തിരുന്നു',
    originalTitle: 'Kannum Kannum Kathirunnu',
    lyrics: `കണ്ണും കണ്ണും കാത്തിരുന്നു
മന്നിലൊരു പൈതലിനായി
കാതോടു കാതോരം കേട്ടിരുന്നു
ദൈവപുത്രൻ പിറക്കുമെന്ന്

ആകാശവീഥിയിൽ മാലാഖാമാരവർ
സ്നേഹത്തിൻ നിറകുടമായ്
തരാട്ടുപാടി ഉറക്കീടുവനായ്
മനതാരിൽ നിനച്ചിരുന്നു (2)

ഇത്രനല്ല സ്നേഹത്തെ തന്ന നല്ല നാഥനെ
മെല്ലെ രാവിൽ പാടിസ്തുതിക്കാം (2)

(കണ്ണും കണ്ണും കാത്തിരുന്നു...)

ജീവന്റെ പാതയിൽ കാരുണ്യകനവായ്
കരുണാർദ്രൻ അലിഞ്ഞ ദിനം
ആലോലമാട്ടി ലാളിച്ചിടുവാനായ്
കൃപയിൽ നിറഞ്ഞിരുന്നു (2)

ഇത്രനല്ല സ്നേഹത്തെ തന്ന നല്ല നാഥനെ
മെല്ലെ രാവിൽ പാടിസ്തുതിക്കാം (2)

(കണ്ണും കണ്ണും കാത്തിരുന്നു...)`,
    lyricsManglish: `Kannum kannum kaathirunnu
Manniloru paithalinaayi
Kaathodu kaathoram kettirunnu
Daivaputhran pirakkumennu

Aakaasha veethiyil maalaakhamaaravar
Snehathin nirakudamaayi
Tharaattu paadi urakkeeduvaanaayi
Manathaaril ninachirunnu (2)

Ithra nalla snehathe thanna nalla naathane
Melle raavil paadi sthuthikkaam (2)

(Kannum kannum kaathirunnu...)

Jeevante paathayil kaarunyakanavaayi
Karunaardran alinja dinam
Aalolamaatti laalichiduvaanaayi
Kripayil niranjirunnu (2)

(Ithra nalla snehathe...)`
  },
  { 
    id: 2, 
    title: 'ദൈവം പിറക്കുന്നു.. മനുഷ്യനായി ബെത്‌ലഹേമിൽ', 
    originalTitle: 'Daivam Pirakkunnu Manushyanayi', 
    lyrics: `ദൈവം പിറക്കുന്നു.. മനുഷ്യനായി ബത്‌ലഹേമിൽ
മഞ്ഞുപെയ്യുന്ന മലർമടക്കിൽ..ഹല്ലേലൂയാ..ഹല്ലേലൂയാ
മണ്ണിലും വിണ്ണിലും മന്ദഹാസം പെയ്യും
മധുരമനോഹരഗാനം..
ഹല്ലേലൂയാ..ഹല്ലേലൂയാ... (ദൈവം പിറക്കുന്നു..)

1. പാതിരാവിൽ മഞ്ഞേറ്റീറനായ്..
പാരിന്റെ നാഥൻ പിറക്കുകയായ് (2)
പാടിയാർക്കൂ വീണ മീട്ടൂ..
ദൈവത്തിന് ദാസരേ ഒന്നു ചേരൂ (2)
(ദൈവം പിറക്കുന്നു..)

2. പകലോനു മുൻപേ പിതാവിന്റെ ഹൃത്തിലെ
ശ്രീയേകസൂനുവാമുദയസൂര്യൻ (2)
പ്രാഭവപൂർണ്ണനായ് ഉയരുന്നിതാ
പ്രതാപമോടിന്നേശുനാഥൻ (2)
(ദൈവം പിറക്കുന്നു..)`,
    lyricsManglish: `Daivam pirakkunnu manushyanaay bethalahemil..
Manju peyyunna malarmadakkil ..
hallelooya..halalooya..(2)
Mannilum vinnilum mandhahaasam peyyum
Madhura manohara gaanam… (2)
Hallelooya..Hallelooya….(2)
(Daivam pirakkunnu)

Paathiraavil manjetteeranaay …
paarinte naadhan pirakkukayaay (2)
Paadiyaarkkooo..veenameettoo..
daivathin daasare onnu cherooo.. (2)
(Daivam pirakkunnu)

Pakalonu munpe pithaavinte hrithile..
thiryeka soonuvaamudhaya sooryan (2)
Praabhava poornnanaayuyarunnitha…
prathaapamodinneshu naathan.. (2)
(Daivam pirakkunnu)`
  },
  { 
    id: 3, 
    title: 'ഗബ്രിയേലിന്റെ ദര്‍ശനസാഫല്യമായ്', 
    originalTitle: 'Gabrielinte Darshana Saafalyamaayi', 
    lyrics: `ഗബ്രിയേലിന്റെ ദര്‍ശനസാഫല്യമായ്..
സർവ്വലോകർക്കും നന്മയേകും കാരുണ്യമായ്
ബെത്‌ലഹേമിന്റെ മാറിലൊരാരോമൽ ഉണ്ണി പിറന്നല്ലോ (3)
വിണ്ണിൽ താരകൾ പുഞ്ചിരി തൂകി
മണ്ണിൽ ഗ്ലോറിയ നാദങ്ങൾ പാടി

അവൻ പള്ളിക്കച്ച അണിഞ്ഞിട്ട് കണ്ണുംചിമ്മി തുറന്നിട്ട്
കുഞ്ഞിക്കാലിട്ടടിക്കുകയായ് ..
എന്നും ആഘോഷം ഉണരുകയായ്`,
    lyricsManglish: `Gabrielinte Darshana Saafalyamaayi
Sarva Lokarkkum Nanmayekum Kaarunyamaai
Bethlaheminte Maariloraaromal
Unnipirannallo…(3)
Vinnil Thaarakal Punchiri Thookie…
Mannil gloriya Naadangal Paadi…

Avan Pallikacha Aninjittu
Kannum Chimmi Thurannittu
Kunjikaalitadikukayaai…
Ennum Aakhosham Unarukayaayi…`
  },
  { 
    id: 4, 
    title: 'യഹൂദിയായിലെ ഒരു ഗ്രാമത്തിൽ', 
    originalTitle: 'Yahudiyayile Oru Gramathil', 
    lyrics: `യഹൂദിയായിലെ ഒരു ഗ്രാമത്തിൽ
ഒരു ധനുമാസത്തിൻ കുളിരും രാവിൽ
രാപ്പാർത്തിരുന്നു രചപാലകർ
ദേവനാദം കേട്ടു ആമോദരായ് (2)

വർണ്ണരാജികൾ വിടരും വാനിൽ
വെള്ളിമേഘങ്ങൾ ഒഴുകും രാവിൽ
താരകാ രാജകുമാരിയോടൊത്തു അന്ന്
തിങ്കൾ കല പാടി ഗ്ലോറിയ..
അന്ന് തിങ്കൾ കല പാടി ഗ്ലോറിയ..

1. താരകം തന്നെ നോക്കി ആട്ടിടയർ നടന്നു (2)
തേജസ്സു മുന്നിൽ കണ്ടു അവർ ബേത്‌ലഹേം തന്നിൽ വന്നു (2)
രാജാധി രാജന്റെ പൊൻ തിരുമേനി (2)
അവർ കാലിത്തൊഴുത്തിൽ കണ്ടു (വർണ്ണരാജികൾ...)

2. മന്നവർ മൂവരും ദാവീദിൻ സുതനെ.. (2)
കണ്ടു വണങ്ങിടുവാൻ അവർ കാഴ്ചയുമായ് വന്നു (2)
ദേവാധി ദേവന്റെ തിരുസന്നിധിയിൽ (2)
അവർ കാഴ്ചകൾ വച്ചു വണങ്ങി (യഹൂദിയായിലെ..)`,
    lyricsManglish: `Yahoodiyayile oru gramathil
Oru dhanu masathin kulirum raavil
Raa parthirunnor ajapalakar
Deva nadam kettu amodaray

Varnarajikal vidarum vaanil
Velli meghangal ozhukum raavil
Tharaka rajakumariyodothannu
Thingal kala paadi,, gloria,,,,,

Tharakam thanne nokki
Attidayar nadannu…(2)
Thejassu munnil kandu
Avar bethalem thannil vannu…(2)
Rajadhi rajante ponthirumeni…(2)
Avar kalithozhuthil kandu,,,,,, varnaraajikal

Mannavar moovarum
Davithin suthane….(2)
Kandu vanangiduvan
Avar kazhchayumay vannu…(2)
Devadhi devante thirusannidhiyil…(2)
Avar kazhchakal vachu vanangi…. Yahoodiyayile`
  },
  { 
    id: 5, 
    title: 'പൈതലാം യേശുവേ', 
    originalTitle: 'Paithalam Yeshuve', 
    lyrics: `പൈതലാം യേശുവേ.. ഉമ്മവെച്ചുമ്മവെച്ചുണർത്തിയ..
ആട്ടിടയർ ഉന്നതരേ.. നിങ്ങൾ തൻ ഹൃത്തിൽ യേശുനാഥൻ പിറന്നു (2)
ലലലാ..ലലലാ..ലലലലലാ..ലല..

1. താലപ്പൊലിയേകാൻ തംബുരു മീട്ടുവാൻ
താരാട്ടു പാടിയുറക്കീടുവാൻ (2)
താരാഗണങ്ങളാൽ ആഗതരാകുന്നു
വാനാരൂപികൾ ഗായകർ ശ്രേഷ്ഠർ (2) (പൈതലാം..)

2. ഉള്ളിൽ തിരതല്ലും മോദത്തോടെത്തും
പാരാകെ പ്രേക്ഷകർ നിരനിരയായ് (2)
നാഥാധി നാഥനായ് വാഴുമെന്നീശനായ്
ഉണർവോടെകുന്നെൻ ഉൾത്തടം ഞാൻ (2) (പൈതലാം..)`,
    lyricsManglish: `Paithalaam yeshuve..
ummavachummavachunarthiya..
Aaattidayar unnatharee…
ningal than hrithil..yeshunadhan pirannu..
(Paithalaam yeshuve)

lalalaa..lalalaaa…lalalaa..lalalaaa……ahhaa..haaa..ummhum..hum..

Thaalappoliyekaan..thamburu meettuvaan..
thaarattu paadiyurakkeduvaan (2)
Thaaraganangalaal aaagatharaakunnu..
vaanaroopikal gaayaka shreshtar..
Vaanaroopikal gaayaka shreshtar..
(Paithalaam yeshuve)

Ullil thira thallum modhathodethum..
paarake prekshakar niranirayaay (2)
Nadhadhinaadhanaay..vaazhumenneeshanaay..
unarvodekunnen ulthadam njaan
Uarvodekunnen ulthadam njaan
(Paithalaam yeshuve)`
  },
  { 
    id: 6, 
    title: 'കാലിത്തൊഴുത്തിൽ പിറന്നവനെ', 
    originalTitle: 'Kalithozhuthil Pirannavane', 
    lyrics: `കാലിത്തൊഴുത്തിൽ പിറന്നവനെ..
കരുണ നിറഞ്ഞവനെ.. (2)
കരളിലെ ചോരയാൽ പാരിന്റെ പാപങ്ങൾ
കഴുകി കളഞ്ഞവനെ.. (2)
അടിയങ്ങൾ നിൻ നാമം വാഴ്ത്തീടുന്നു
ഹല്ലേലൂയാ..ഹല്ലേലൂയാ..

കാലിത്തൊഴുത്തിൽ .....

കനിവിൻ കടലേ അറിവിൻ പൊരുളേ..
ചൊരിയൂ ചൊരിയൂ അനുഗ്രഹങ്ങൾ (2)
നിൻ മുന്നിൽ വന്നിതാ നിൽപ്പു ഞങ്ങൾ
ഹല്ലേലൂയാ..ഹല്ലേലൂയാ.. (2)

കാലിത്തൊഴുത്തിൽ .....

ഉലകിന് ഉയിരായ് മനസ്സിൽ മധുമായ്
ഉണരൂ ഉണരൂ മണിവിളക്കേ (2)
കർത്താവേ കനിയൂ നീ യേശു നാഥാ
ഹല്ലേലൂയാ..ഹല്ലേലൂയാ...(2)

കാലിത്തൊഴുത്തിൽ .....`,
    lyricsManglish: `Kalithozhuthil Pirannavane
Karuna Niranjavane – (2)
Karalile Chorayal Paarinte Paapaghal
Kazhuki Kalanjavane – (2)
Adiyanghal Nin Naamam Vaazhtheedunnu
Halleluiah Halleluiah – (2)

Kalithozhuthil Pirannavane

Kanivin Kadale Arivin Porule
Choriyu Choriyu Anugrahaghal – (2)
Nin Munnil Vannitha Nilppu Njaghal
Halleluiah Halleluiah – (2)

Kalithozhuthil Pirannavane

Ulakin Uyirayi Manasil Madhuvayi
Unaru Unaru Manivilakke – (2)
Karthave Kaniyu Nee Yeshu Naadha
Halleluiah Halleluiah – (2)

Kalithozhuthil Pirannavane`
  },
  { 
    id: 7, 
    title: 'പുൽക്കുടിലിൽ കൽത്തൊട്ടിയിൽ', 
    originalTitle: 'Pulkkudilil Kalthottiyil', 
    lyrics: `പുൽക്കുടിലിൽ കൽത്തൊട്ടിയിൽ
മറിയത്തിന് പൊൻ മകനായി
പണ്ടൊരു നാൾ ദൈവസുതൻ
പിറന്നതിൻ ഓർമ്മ ദിനം (2)

പോരൂ മണ്ണിലെ ഇടയന്മാരെ
പാടൂ വിണ്ണിലെ മാലാഖകളെ (2)
പാടൂ തംബുരുവും
കിന്നരവും താളവുമായ്
(പുൽക്കുടിലിൽ...)

1. മെൽഷ്യരും കാസ്പരും
ബെൽത്തസറും വാഴ്ത്തും
രക്ഷകരിൽ രക്ഷകനാം
മിശിഹാ പിറന്ന ദിനം
(പോരൂ മണ്ണിലെ..)

2. ഭൂമിയിൽ ദൈവമക്കൾ
നേടും സമാധാനം
ഉന്നതിയിൽ അത്യുന്നതിയിൽ
ദൈവത്തിനു മഹത്വം (2)
(പോരൂ മണ്ണിലെ..)`,
    lyricsManglish: `Pulkkudilil kalthottiyil
Mariyathinu pon makanayi
Pandoru naal daivasuthan
Pirannathin ormma dinam (2)

Poru mannile idayanmare
Paadu vinnile malakhakale (2)
Paadu thamburuvum
Kinnaravum thalavumayi
(Pulkkudilil...)

Melshyarum kasparum
Belthasarum vazhthum
Rakshakaril rakshakanam
Mishiha piranna dinam
(Poru mannile..)

Bhoomiyil daivamakkal
Nedum samadhanam
Unnathiyil athyunnathiyil
Daivathinu mahathwam (2)
(Poru mannile..)`
  },
  { 
    id: 8, 
    title: 'കാവൽ മാലാഖമാരേ', 
    originalTitle: 'Kaval Malakhamare', 
    lyrics: `കാവൽ മാലാഖമാരേ കണ്ണടയ്ക്കരുതേ
താഴെ പുൽത്തൊട്ടിലിൽ രാജ രാജൻ മയങ്ങുന്നൂ (2)
കാവൽ മാലാഖമാരേ..

ഉണ്ണീയുറങ്ങൂ ഉണ്ണീയുറങ്ങൂ ഉണ്ണീയുറങ്ങുറങ്ങൂ..

1. തളിരാർന്ന പൊൻമേനി നോവുമേ
കുളിരാർന്ന വയ്ക്കോലിൻ തൊട്ടിലല്ലേ (2)
സുഖസുഷുപ്തി പകർന്നിടുവാൻ
തൂവൽ കിടക്കയൊരുക്കൂ (2)
(കാവൽ മാലാഖമാരേ...)

2. നീല നിലാവല നീളുന്ന ശാരോൻ
താഴ്വര തന്നിലെ പനിനീർപ്പൂവേ (2)
തേൻ തുളുമ്പും ഇതളുകളാൽ
നാഥനു ശയ്യയൊരുക്കൂ (2)
(കാവൽ മാലാഖമാരേ...)

3. ജോർദാൻ നദിക്കരെ നിന്നണയും
പൂന്തേൻ മണമുള്ള കുഞ്ഞിക്കാറ്റേ (2)
പുൽകിയുണർത്തല്ലേ നാഥനുറങ്ങട്ടെ
പരിശുദ്ധ രാത്രിയല്ലേ (2)
(കാവൽ മാലാഖമാരേ...)`,
    lyricsManglish: `Kaaval maalakhamaare, kannadaykkaruthe
Thazheyee pulthottilil raaja raajan mayangunnu (2)
Kaaval maalakhamaare..

Unni urangu Unniurangu Unni urangurangu

1. Thalirarnna ponmeni novume
Kulirarnna vaykkolin thottilalle (2)
Sukha sushupthi pakarneeduvan
Thooval kidaykkyorukoo (2)
(Kaaval maalakhamaare...)

2. Neela nilamalar meyunna sharon
Thazhvara thannile panineer poove (2)
Then thulumbum ithalukalaal
Naathanu sayyayorukoo (2)
(Kaaval maalakhamaare...)

3. Jordan nadikkare ninnanayum
Poonthen manamulla kunjikaatte(2)
Pulkiyunarthalle Naadanurangatte
Parisudha raathriyalle (2)
(Kaaval maalakhamaare...)`
  },
  { 
    id: 9, 
    title: 'രാത്രി രാത്രി രജത രാത്രി രാജാധി', 
    originalTitle: 'Rathri Rathri Rajatha Rathri', 
    lyrics: `രാത്രി രാത്രി രജത രാത്രി
രാജാധി രാജൻ പിറന്ന രാത്രി (2)

1. ദുഖങ്ങളെല്ലാം അകലുന്ന രാത്രി.. (2)
ദുഖിതർക്കാശ്വാസം ഏകുന്ന രാത്രി
നീഹാര ശീതള രാത്രി.. സ്വർഗ്ഗീയ രാത്രി (2)
ഗ്ലോറിയ..ഗ്ലോറിയ..ഗ്ലോറിയ..
ഗ്ലോറിയ ഇൻ എക്സൽസീസ് ദേവൂ.. (രാത്രി രാത്രി..)

2. താരാകുമാരികൾ തൻ സംഗീത മാധുരി (2)
താരാപഥങ്ങളിൽ ഉയരുന്ന രാത്രി
തൂമഞ്ഞു പെയ്യുന്ന രാത്രി.. സ്വർഗ്ഗീയ രാത്രി
ഗ്ലോറിയ..ഗ്ലോറിയ..ഗ്ലോറിയ..
ഗ്ലോറിയ ഇൻ എക്സൽസീസ് ദേവൂ.. (രാത്രി രാത്രി..)

3. ദൈവീക സ്നേഹം മേരി തൻ സുതനായ്..(2)
ഈ മണ്ണിന്റെ മടിയിൽ മയങ്ങുന്ന രാത്രി
സന്മനസ്സുള്ളോർ തൻ രാത്രി.. സ്വർഗ്ഗീയ രാത്രി (2)
ഗ്ലോറിയ..ഗ്ലോറിയ..ഗ്ലോറിയ..
ഗ്ലോറിയ ഇൻ എക്സൽസീസ് ദേവൂ.. (രാത്രി രാത്രി..)`,
    lyricsManglish: `Raathri raathri rajatha raatri…raajadhi raajan piranna raatri…(2)

Dukhangalellaaam akalunna..raatri..(2)
Dukhitharkkaaashwaasamekunna raatri
Neehaaara sheethala raatri
Swargeeeya raaatri………. (2)
Gloriyaa..gloriya..gloriya..gloriyaa in excelziz glavoo…. (Raatri raatri)

Thaaraaakumaarikal than sangeetha maadhuri (2)
Thaarapadhangalil uyarunna raatri
Thoomanju peyyunna raatri
Swargeeya raatri……….. (2)
Gloriyaa..gloriya..gloriya..gloriyaa in excelziz glavoo…. (Raatri raatri)

Daiveeka sneham meri than suthanaay….. (2)
Eee manninte madiyil mayangunna raatri
Sanmanassullor than raatri..
Swargeeya raatri.. (2)
Gloriyaa..gloriya..gloriya..gloriyaa in excelziz glavoo…. (Raatri raatri)`
  },
  { 
    id: 10, 
    title: 'ദൂരെ നിന്നും ദൂരെ..ദൂരെ..നിന്നും', 
    originalTitle: 'Doore Ninnum Doore Doore Ninnum', 
    lyrics: `ദൂരെ നിന്നും ദൂരെ..ദൂരെ..നിന്നും
മരുഭൂവിൻ വഴികളിലൂടെ..
ഒരു കാലിത്തൊഴുത്തു തേടി..
മൂന്നു രാജക്കന്മാരെത്തി (2)

വാനം തെളിഞ്ഞു നിന്നു
ദിവ്യ താരം തിളങ്ങി നിന്നു...(2)
മാലാഖമാരവർ വാനവീഥികളിൽ
സ്തുതിഗീതങ്ങൾ പാടി (2)

1. മഞ്ഞിൻ തുള്ളികൾ തഴുകിയുറങ്ങും
ബേത്ലഹേമിൻ വഴികളിലൂടെ (2)
ഒരു പുൽക്കുടിൽ തേടി..ദേവസുതനെ തേടി
ഇടയന്മാരുമണഞ്ഞല്ലോ..
അവർ കാലിത്തൊഴുത്തു കണ്ടു
അവർ സ്വർഗ്ഗീയ ഗാനം കേട്ടു (2)
മരിയാസുതനായ് പുൽക്കൂട്ടിൽ മരുവും
മിശിഹാനാഥനെ കണ്ടു (2)
(ദൂരെ നിന്നും ദൂരെ..)

2. വെള്ളിനിലാവിൻ കുളിരലയിൽ
നീരാടിയെത്തിയ രാക്കുയിലുകൾ (2)
നവ സ്വരമഞ്ചരിയിൽ ഒരു മനസ്സോടെ
നാഥനെ വാഴ്ത്തി പാടുന്നു..
വാനം തെളിഞ്ഞു നിന്നു
ദിവ്യ താരം തിളങ്ങി നിന്നു...(2)
മാലാഖമാരവർ വാനവീഥികളിൽ
സ്തുതിഗീതങ്ങൾ പാടി (2)
(ദൂരെ നിന്നും ദൂരെ..)`,
    lyricsManglish: `Doore ninnum dooore..dooore..ninnum
marubhoovin vazhikaliloode..
Oru kaalithozhuthu thedi..
moonnu raajakkanmaarethi.. (2)

Vaanam thelinju ninnu
divya thaaram thilangi ninnu…(2)
Malakhamaaravar vaanaveedhikalil
sthuthi geethangal paadi..(2)

la..la..la..la..la..laa.aaa..la..la..la..la..la..laa.
aaa..la..la..la..la..la..laa.aaa..

Manjin thullikal thazhukiyurangum
bethelahemin vazhikaliloode..(2)
Oru pulkkudil thedi..deva suthane thedi..
idayanmaarumanjallo..
Avar kaalithozhuthu kandu..
avar swargeeya gaanam kettu..(2)
Mariyaa suthanaay pulkkoottil maruvum
mishihaanaathane kandu..(2)
(Doore ninnum dooore)

Vellinilaavin kuliralayil
neeraadiyethiya raakkuyilukal.. (2)
Nava swara manjariyil oru manassode..
naadhane vazhthi paadunnu..
Vaanam thelinju ninnu
divya thaaram thilangi ninnu…(2)
Malakhamaaravar vaanaveedhikalil
sthuthi geethangal paadi..(2)
(Doore ninnum dooore)`
  },
  { 
    id: 11, 
    title: 'ശാന്ത രാത്രി തിരു രാത്രി', 
    originalTitle: 'Shantha Rathri Thiru Rathri', 
    lyrics: `ശാന്ത രാത്രി തിരു രാത്രി
പുൽക്കുടിലിൽ പൂത്തൊരു രാത്രി..
വിണ്ണിലെ താരക ദൂതരിറങ്ങിയ
മണ്ണിന് സമാധാന രാത്രി..

ഉണ്ണി പിറന്നൂ ഉണ്ണിയേശു പിറന്നൂ (3)
(ശാന്ത രാത്രി തിരു രാത്രി...)

1. ദാവീദിൻ പട്ടണം പോലെ
പാതകൾ നമ്മളലങ്കരിച്ചു .(2)
വീഞ്ഞു പകരുന്ന മണ്ണിൽ.. നിന്നും
വീണ്ടും മനസ്സുകൾ പാടി
(ഉണ്ണി പിറന്നൂ..)`,
    lyricsManglish: `Shantha rathri thiru rathri
Pulkkudilil poothoru rathri..
Vinnile tharaka dhootharirangiya
Manninu samadhana rathri..

Unni pirannu unniyeshu pirannu (3)
(Shantha rathri thiru rathri...)

Daaveedin pattanam pole
Pathakal nammal alankarichu (2)
Veenju pakarunna mannil.. ninnum
Veendum manassukal paadi
(Unni pirannu..)`
  },
  {
    id: 12,
    title: 'We wish you a Merry Christmas',
    originalTitle: 'We wish you a Merry Christmas',
    lyrics: `We wish you a Merry Christmas
We wish you a Merry Christmas
We wish you a Merry Christmas
And a Happy New Year

Good tidings to you wherever you are
Good tidings for Christmas and a Happy New Year

We wish you a Merry Christmas
We wish you a Merry Christmas
We wish you a Merry Christmas
And a Happy New Year

Oh, bring us a figgy pudding
Oh, bring us a figgy pudding
Oh, bring us a figgy pudding
And a cup of good cheer

Good tidings to you wherever you are
Good tidings for Christmas and a Happy New Year

We wish you a Merry Christmas`,
    lyricsManglish: `We wish you a Merry Christmas
We wish you a Merry Christmas
We wish you a Merry Christmas
And a Happy New Year

Good tidings to you wherever you are
Good tidings for Christmas and a Happy New Year

We wish you a Merry Christmas
We wish you a Merry Christmas
We wish you a Merry Christmas
And a Happy New Year

Oh, bring us a figgy pudding
Oh, bring us a figgy pudding
Oh, bring us a figgy pudding
And a cup of good cheer

Good tidings to you wherever you are
Good tidings for Christmas and a Happy New Year

We wish you a Merry Christmas`
  },
];

export const APP_TITLE = "Friends of Dagenham Christmas Carol Songs Lyrics";