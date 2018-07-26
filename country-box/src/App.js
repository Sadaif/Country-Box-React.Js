import React, { Component } from 'react';
import CountryBox from './Components/CountryBox';
 
const data = [
	{
		name: "Afghanistan",
		image: "https://cdn8.bigcommerce.com/s-a03c0/images/stencil/1280x1280/products/929/1304/afghanistan__60838.1339614303.jpg?c=2",
		Religions: "Muslim",
		Languages: "Dari Persian",
		Population: "36,373,176",
	},
	{
		name: "Albania",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2000px-Flag_of_Albania.svg.png",
		Religions: "Muslim",
		Languages: "Albania",
		Population: "2,934,363"
	},
	{
		name: "Algeria",
		image: "https://www.mapsofworld.com/images/world-countries-flags/algeria-flag.gif",
		Religions: "Muslim",
		Languages: "Arabic",
		Population: "42,008,054 "
	},
	{
		name: "Andorra",
		image: "http://flags.fmcdn.net/data/flags/w580/ad.png",
		Religions: "Christian",
		Languages: "Catalan",
		Population: "76,953"
	},
	{
		name: "Angola",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/255px-Flag_of_Angola.svg.png",
		Religions: "Roman Catholic",
		Languages: "Portuguese",
		Population: "30,774,205"
	},
	{
		name: "Antigua",
		image: "http://flagpedia.net/data/flags/ultra/ag.png",
		Religions: "Christian",
		Languages: "English",
		Population: "103,050"
	},
	{
		name: "Argentina",
		image: "https://www.worldatlas.com/r/w728-h425-c728x425/upload/ad/a6/68/ar-flag-min.jpg",
		Religions: "Roman Catholic",
		Languages: "Spanish",
		Population: "44,688,864"
	},
	{
		name: "Armenia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/2000px-Flag_of_Armenia.svg.png",
		Religions: "Armenian Apostolic ",
		Languages: "Armenian",
		Population: "2,943,152"
	},
	{
		name: "Australia",
		image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
		Religions: "Catholic ",
		Languages: "English",
		Population: "24,772,247"
	},
	{
		name: "Austria",
		image: "http://flags.fmcdn.net/data/flags/w580/at.png",
		Religions: "Catholic ",
		Languages: "German",
		Population: "8,751,820"
	},
	{
		name: "Azerbaijan",
		image: "http://flags.fmcdn.net/data/flags/w580/az.png",
		Religions: "Muslim",
		Languages: "Azerbaijani Turkic",
		Population: "9,923,914"
	},
	{
		name: "Bahamas",
		image: "http://flags.fmcdn.net/data/flags/w580/bs.png",
		Religions: "Muslim",
		Languages: "English",
		Population: "399,285"
	},
	{
		name: "Bahrain",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/255px-Flag_of_Bahrain.svg.png",
		Religions: "Muslim",
		Languages: "Arabic",
		Population: "1,566,993"
	},
	{
		name: "Bangladesh",
		image: "https://www.gettysburgflag.com/media/catalog/product/cache/2/thumbnail/520x416/602f0fa2c1f0d1ba5e241f914e856ff9/b/a/bangladesh.jpg",
		Religions: "Muslim",
		Languages: "Bangla",
		Population: "166,368,149"
	},
	{
		name: "Barbados",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/2000px-Flag_of_Barbados.svg.png",
		Religions: "Protestant",
		Languages: "English",
		Population: "286,388"
	},
	{
		name: "Belarus",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Flag_of_Belarus_%28variant%29.svg/2000px-Flag_of_Belarus_%28variant%29.svg.png",
		Religions: "Estern Orthodox",
		Languages: "Belorussian",
		Population: "9,452,113"
	},
	{
		name: "Belgium",
		image: "https://images-na.ssl-images-amazon.com/images/I/41xtdoRoz-L._SX355_.jpg",
		Religions: "Psychic",
		Languages: "Dutch",
		Population: "11,498,519 "
	},
	{
		name: "Belize",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/2000px-Flag_of_Belize.svg.png",
		Religions: "Roman Catholic ",
		Languages: "English",
		Population: "382,444"
	},
	{
		name: "Benin",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/2000px-Flag_of_Benin.svg.png",
		Religions: "Roman Catholic ",
		Languages: "French",
		Population: "11,485,674"
	},
	{
		name: "Bhutan",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/2000px-Flag_of_Bhutan.svg.png",
		Religions: "Lamaistic Buddhist ",
		Languages: "Dzongkha",
		Population: "817,054"
	},
	{
		name: "Bolivia",
		image: "https://vignette.wikia.nocookie.net/rainbowsix/images/5/56/Flag_of_Bolivia.png/revision/latest?cb=20151109185404",
		Religions: "Roman Catholic",
		Languages: "Spanish",
		Population: "11,215,674 "
	},
	{
		name: "Bosnia",
		image: "https://www.gettysburgflag.com/media/catalog/product/cache/2/thumbnail/520x416/602f0fa2c1f0d1ba5e241f914e856ff9/b/o/bosnia-herzegovina.jpg",
		Religions: "Roman Catholic ",
		Languages: "Bosnian",
		Population: "3,503,554 	"
	},
	{
		name: "Botswana",
		image: "https://www.gettysburgflag.com/media/catalog/product/cache/2/thumbnail/520x416/602f0fa2c1f0d1ba5e241f914e856ff9/2/0/2000px-flag_of_botswana.svg.png",
		Religions: "Christian",
		Languages: "English",
		Population: "2,333,201"
	},
	{
		name: "Brazil",
		image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png",
		Religions: "Roman Catholic ",
		Languages: "Portuguese",
		Population: "210,867,954"
	},
	{
		name: "Brunei",
		image: "http://flagpedia.net/data/flags/ultra/bn.png",
		Religions: "Muslim",
		Languages: "Malay",
		Population: "434,076"
	},
	{
		name: "Bulgaria",
		image: "https://images6.alphacoders.com/578/thumb-350-578003.png",
		Religions: "Bulgarion Orthodox",
		Languages: "Bulgarian",
		Population: "7,036,848"
	},
	{
		name: "Burkina",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/2000px-Flag_of_Burkina_Faso.svg.png",
		Religions: "Muslim",
		Languages: "French",
		Population: "19,751,651	"
	},
	{
		name: "Burundi",
		image: "https://www.worldatlas.com/webimage/flags/countrys/zzzflags/bilarge.gif",
		Religions: "Buddhist",
		Languages: "Kirundi",
		Population: "11,216,450"
	},
	{
		name: "Côte d'Ivoire",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/1200px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png",
		Religions: "Christian",
		Languages: "Khmer",
		Population: "24,905,843 	"
	},
	{
		name: "Cabo Verde",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_Cape_Verde_%282-3_ratio%29.svg/1200px-Flag_of_Cape_Verde_%282-3_ratio%29.svg.png",
		Religions: "Buddhist",
		Languages: "Khmer",
		Population: "553,335 	"
	},
	{
		name: "Cambodia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/255px-Flag_of_Cambodia.svg.png",
		Religions: "Buddhist",
		Languages: "Khmer",
		Population: "16,245,729"
	},
	{
		name: "Cameroon",
		image: "https://www.worldatlas.com/r/w480/img/flag/cm-flag.jpg",
		Religions: "Christian",
		Languages: "French",
		Population: "24,678,234 	"
	},
	{
		name: "Canada",
		image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/1280px-Flag_of_Canada.svg.png",
		Religions: "Roman Catholic",
		Languages: "English",
		Population: "36,953,765"
	},
	{
		name: "African Republic",
		image: "http://flags.fmcdn.net/data/flags/w580/cf.png",
		Religions: "Roman Catholic",
		Languages: "Portuguese",
		Population: "4,737,423"
	},
	{
		name: "Chad",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/2000px-Flag_of_Chad.svg.png",
		Religions: "Muslim",
		Languages: "French",
		Population: "15,353,184 	"
	},
	{
		name: "Chile",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/2000px-Flag_of_Chile.svg.png",
		Religions: "Roman Catholic",
		Languages: "Spanish",
		Population: "18,197,209 "
	},
	{
		name: "China",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png",
		Religions: "Buddhist",
		Languages: "Chinese",
		Population: "1,415,045,928"
	},
	{
		name: "Colombia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/255px-Flag_of_Colombia.svg.png",
		Religions: "Roman Catholic",
		Languages: "Spanish",
		Population: "49,464,683"
	},
	{
		name: "Comoros",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/255px-Flag_of_the_Comoros.svg.png",
		Religions: "Muslim",
		Languages: "Arabic",
		Population: "832,347 	"
	},
	{
		name: "Congo",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/2000px-Flag_of_the_Republic_of_the_Congo.svg.png",
		Religions: "Christian",
		Languages: "French",
		Population: "5,399,895"
	},
	{
		name: "Costa Rica",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/255px-Flag_of_Costa_Rica_%28state%29.svg.png",
		Religions: "Roman Catholic",
		Languages: "Spanish",
		Population: "4,953,199 	"
	},
	{
		name: "Croatia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/2000px-Flag_of_Croatia.svg.png",
		Religions: "Roman Catholic",
		Languages: "Croatian",
		Population: "4,164,783 	"
	},
	{
		name: "Cuba",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/2000px-Flag_of_Cuba.svg.png",
		Religions: "Roman Catholic",
		Languages: "Spanish",
		Population: "11,489,082 	"
	},
	{
		name: "Cyprus",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/2000px-Flag_of_Cyprus.svg.png",
		Religions: "Greek Orthodox ",
		Languages: "Greek",
		Population: "1,189,085"
	},
	{
		name: "Czech Republic",
		image: "http://flags.fmcdn.net/data/flags/w580/cz.png",
		Religions: "Greek Orthodox ",
		Languages: "Czech",
		Population: "10,625,250"
	},
	{
		name: "Democratic Republic",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/2000px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png",
		Religions: "Roman Catholic",
		Languages: "Czech",
		Population: "84,004,989 "
	},
	{
		name: "Denmark",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/2000px-Flag_of_Denmark.svg.png",
		Religions: "Evangelical Lutheran",
		Languages: "Danish",
		Population: "5,754,356 	"
	},
	{
		name: "Djibouti",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/1200px-Flag_of_Djibouti.svg.png",
		Religions: "Muslim",
		Languages: "French",
		Population: "971,408"
	},
	{
		name: "Dominica",
		image: "https://www.gettysburgflag.com/media/catalog/product/cache/2/thumbnail/520x416/602f0fa2c1f0d1ba5e241f914e856ff9/d/o/dominica.gif",
		Religions: "Roman Catholic",
		Languages: "English",
		Population: "74,308"
	},
	{
		name: "Dominican Republic",
		image: "http://nationalflagstore.com/wp-content/uploads/2014/07/dominican-republic-flag1.jpg",
		Religions: "Roman Catholic",
		Languages: "Spanish",
		Population: "10,882,996 	"
	},
	{
		name: "Ecuador",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1440px-Flag_of_Ecuador.svg.png",
		Religions: "Roman Catholic",
		Languages: "Tetum",
		Population: "16,863,425 	"
	},
	{
		name: "Egypt",
		image: "http://www.symondsflags.com/wp-content/uploads/2014/09/egypt-flag.jpg",
		Religions: "Arabic",
		Languages: "Big-Pecks",
		Population: "99,375,741 	"
	},
	{
		name: "El Salvador",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/2000px-Flag_of_El_Salvador.svg.png",
		Religions: "Spanish",
		Languages: "Keen-Eye",
		Population: "6,411,558"
	},
	{
		name: "Equatorial Guinea",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/2000px-Flag_of_Equatorial_Guinea.svg.png",
		Religions: "Christian",
		Languages: "Spanish",
		Population: "1,313,894 	"
	},
	{
		name: "Eritrea",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/1280px-Flag_of_Eritrea.svg.png",
		Religions: "Muslim",
		Languages: "Afar",
		Population: "5,187,948"
	},
	{
		name: "Estonia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/255px-Flag_of_Estonia.svg.png",
		Religions: "Evangelical Lutheran",
		Languages: "Estonian",
		Population: "1,306,788 	"
	},
	{
		name: "Ethiopia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/2000px-Flag_of_Ethiopia.svg.png",
		Religions: "Roman Catholic",
		Languages: "Amharic",
		Population: "107,534,882"
	},
	{
		name: "Fiji",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/1200px-Flag_of_Fiji.svg.png",
		Religions: "Christian",
		Languages: "English",
		Population: "912,241 	"
	},
	{
		name: "Finland",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/2000px-Flag_of_Finland.svg.png",
		Religions: "Greek",
		Languages: "Inner-Focus",
		Population: "5,542,517 	"
	},
	{
		name: "France",
		image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
		Religions: "Roman Catholic",
		Languages: "Swedish",
		Population: "65,233,271 	"
	},
	{
		name: "Gabon",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/1280px-Flag_of_Gabon.svg.png",
		Religions: "Muslim",
		Languages: "French",
		Population: "2,067,561"
	},
	{
		name: "Gambia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/1280px-Flag_of_The_Gambia.svg.png",
		Religions: "Roman Catholic",
		Languages: "English",
		Population: "2,163,765 	"
	},
	{
		name: "Georgia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/255px-Flag_of_Georgia.svg.png",
		Religions: "Christian",
		Languages: "Georgian",
		Population: "3,907,131 	"
	},
	{
		name: "Germany",
		image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png",
		Religions: "Roman Catholic",
		Languages: "German",
		Population: "82,293,457"
	},
	{
		name: "Ghana",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/255px-Flag_of_Ghana.svg.png",
		Religions: "Christian",
		Languages: "English",
		Population: "29,463,643 	"
	},
	{
		name: "Greece",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/2000px-Flag_of_Greece.svg.png",
		Religions: "Greek",
		Languages: "Greek",
		Population: "11,142,161"
	},
	{
		name: "Grenada",
		image: "http://www.gov.gd/img/national_flag.jpg",
		Religions: "Roman Catholic",
		Languages: "English ",
		Population: "108,339 	"
	},
	{
		name: "Guatemala",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/2000px-Flag_of_Guatemala.svg.png",
		Religions: "Roman Catholic",
		Languages: "Spanish",
		Population: "17,245,346"
	},
	{
		name: "Guinea",
		image: "https://www.worldatlas.com/webimage/flags/countrys/zzzflags/gnlarge.gif",
		Religions: "Muslim",
		Languages: "French",
		Population: "13,052,608 	"
	},
	{
		name: "Guinea-Bissau",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/2000px-Flag_of_Guinea-Bissau.svg.png",
		Religions: "Muslim",
		Languages: "English",
		Population: "1,907,268 	"
	},
	{
		name: "Guyana",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/2000px-Flag_of_Guyana.svg.png",
		Religions: "Christian",
		Languages: "Creole",
		Population: "782,225 	"
	},
	{
		name: "Haiti",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/2000px-Flag_of_Haiti.svg.png",
		Religions: "Roman Catholic",
		Languages: "Creole",
		Population: " 	11,112,945 	"
	},
	{
		name: "Holy See",
		image: "https://cdn3.vectorstock.com/i/1000x1000/38/67/vatican-city-holy-see-flag-vector-113867.jpg",
		Religions: "Roman Catholic",
		Languages: "Spanish",
		Population: "801"
	},
	{
		name: "Honduras",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/255px-Flag_of_Honduras.svg.png",
		Religions: "Roman Catholic",
		Languages: "Spanish",
		Population: "9,417,167 	"
	},
	{
		name: "Hungary",
		image: "http://flags.fmcdn.net/data/flags/w580/hu.png",
		Religions: "Roman Catholic",
		Languages: "Magyar",
		Population: "9,688,847 	"
	},
	{
		name: "Iceland",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/2000px-Flag_of_Iceland.svg.png",
		Religions: "Lutheran Church",
		Languages: "Icelandic",
		Population: "337,780"
	},
	{
		name: "India",
		image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
		Religions: "Hindu",
		Languages: "Hindi",
		Population: "1,354,051,854"
	},
	{
		name: "Indonesia",
		image: "https://cdn.britannica.com/48/1648-004-644EBE62.jpg",
		Religions: "Muslim",
		Languages: "Bahasa",
		Population: "266,794,980 	"
	},
	{
		name: "Iran",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_Iran_%28official%29.svg/2000px-Flag_of_Iran_%28official%29.svg.png",
		Religions: "Muslim",
		Languages: "Persian",
		Population: "82,011,735"
	},
	{
		name: "Iraq",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/255px-Flag_of_Iraq.svg.png",
		Religions: "Muslim",
		Languages: "Arabic",
		Population: "39,339,753 	"
	},
	{
		name: "Ireland",
		image: "http://flags.fmcdn.net/data/flags/w580/ie.png",
		Religions: "Roman Catholic",
		Languages: "English",
		Population: "4,803,748 	"
	},
	{
		name: "Israel",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/1200px-Flag_of_Israel.svg.png",
		Religions: "Jewish",
		Languages: "Hebrew",
		Population: "8,452,841 	"
	},
	{
		name: "Italy",
		image: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
		Religions: "Roman Catholic",
		Languages: "Italian ",
		Population: "59,290,969 	"
	},
	{
		name: "Jamaica",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/1200px-Flag_of_Jamaica.svg.png",
		Religions: "Protestant",
		Languages: "English",
		Population: "2,898,677"
	},
	{
		name: "Japan",
		image: "https://cdn.britannica.com/91/1791-004-1998D4C6.jpg",
		Religions: "Buddhist",
		Languages: "Japanese",
		Population: "127,185,332"
	},
	{
		name: "Jordan",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/2000px-Flag_of_Jordan.svg.png",
		Religions: "Muslim",
		Languages: "Arabic",
		Population: "9,903,802"
	},
	{
		name: "Kazakhstan",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/255px-Flag_of_Kazakhstan.svg.png",
		Religions: "Muslim",
		Languages: "Kazak",
		Population: "18,403,860c"
	},
	{
		name: "Kenya",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/2000px-Flag_of_Kenya.svg.png",
		Religions: "Roman Catholic",
		Languages: "English",
		Population: "50,950,879 	"
	},
	{
		name: "Kiribati",
		image: "https://www.gettysburgflag.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/k/i/kiribati.jpg",
		Religions: "Roman Catholic",
		Languages: "English",
		Population: "118,414 	"
	},
	{
		name: "Kuwait",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/2000px-Flag_of_Kuwait.svg.png",
		Religions: "Muslim",
		Languages: "Arabic",
		Population: "4,197,128 	"
	},
	{
		name: "Kyrgyzstan",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1200px-Flag_of_Kyrgyzstan.svg.png",
		Religions: "Muslim",
		Languages: "Kyrgyz",
		Population: "6,132,932 	"
	},
	{
		name: "Laos",
		image: "http://flags.fmcdn.net/data/flags/w580/la.png",
		Religions: "Buddhist",
		Languages: "Lao",
		Population: "6,961,210"
	},
	{
		name: "Latvia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/2000px-Flag_of_Latvia.svg.png",
		Religions: "Protestant",
		Languages: "Latvian",
		Population: "1,929,938 	"
	},
	{
		name: "Lebanon",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/255px-Flag_of_Lebanon.svg.png",
		Religions: "Muslim",
		Languages: "Arabic",
		Population: "6,093,509"
	},
	{
		name: "Lesotho",
		image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg",
		Religions: "Poison",
		Languages: "English",
		Population: "2,263,010 	"
	},
	{
		name: "Liberia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/2000px-Flag_of_Liberia.svg.png",
		Religions: "Christian",
		Languages: "English",
		Population: "4,853,516 	"
	},
	{
		name: "Libya",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/2000px-Flag_of_Libya.svg.png",
		Religions: "Muslim",
		Languages: "Arabic",
		Population: "6,470,956 	"
	},
	{
		name: "Liechtenstein",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/1200px-Flag_of_Liechtenstein.svg.png",
		Religions: "Roman Catholic",
		Languages: "German",
		Population: "38,155"
	}
		,{
		name: "Lithuania",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/2000px-Flag_of_Lithuania.svg.png",
		Religions: "Roman Catholic",
		Languages: "Lithuanian",
		Population: "2,876,475 	"
	},
	{
		name: "Luxembourg",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/2000px-Flag_of_Luxembourg.svg.png",
		Religions: "Roman Catholic",
		Languages: "Luxermbourgish",
		Population: "590,321 	"
	},
	{
		name: "Macedonia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_Macedonia.svg/2000px-Flag_of_Macedonia.svg.png",
		Religions: "Buddhist",
		Languages: "Macedonian",
		Population: "2,085,051 	"
	},
	{
		name: "Madagascar",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/255px-Flag_of_Madagascar.svg.png",
		Religions: "indigenous beliefs",
		Languages: "Malagasy",
		Population: " 	26,262,810 	"
	},
	{
		name: "Malawi",
		image: "https://www.gettysburgflag.com/media/catalog/product/cache/2/thumbnail/520x416/602f0fa2c1f0d1ba5e241f914e856ff9/m/a/malawi.png",
		Religions: "Christian",
		Languages: "Chichewa",
		Population: "19,164,728 	"
	},
	{
		name: "Malaysia",
		image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
		Religions: "Muslim",
		Languages: "Malay",
		Population: "32,042,458 	"
	},
	{
		name: "Maldives",
		image: "https://www.gettysburgflag.com/media/catalog/product/cache/2/thumbnail/520x416/602f0fa2c1f0d1ba5e241f914e856ff9/m/a/maldives.jpg",
		Religions: "Muslim",
		Languages: "Maldivian",
		Population: "444,259 	"
	},
	{
		name: "Mali",
		image: "https://cdn.britannica.com/62/5062-004-562ADB9E.jpg",
		Religions: "Muslim",
		Languages: "French",
		Population: "19,107,706 	"
	},
	{
		name: "Malta",
		image: "https://images-na.ssl-images-amazon.com/images/I/314NBkkG2bL.jpg",
		Religions: "Roman Catholic ",
		Languages: "Maltese",
		Population: "432,089 	"
	},
	{
		name: "Marshall Islands",
		image: "https://www.worldatlas.com/webimage/flags/countrys/zzzflags/mhlarge.gif",
		Religions: "Roman Catholic ",
		Languages: "Marshallese",
		Population: "53,167 	"
	},
	{
		name: "Mauritania",
		image: "https://cms.qz.com/wp-content/uploads/2017/08/flag_of_mauritania.png?w=3750",
		Religions: "Muslim",
		Languages: "Hassaniya",
		Population: "4,540,068 	"
	},
	{
		name: "Mauritius",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/2000px-Flag_of_Mauritius.svg.png",
		Religions: "Hindu",
		Languages: "English",
		Population: "1,268,315"
	},
	{
		name: "Mexico",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/2000px-Flag_of_Mexico.svg.png",
		Religions: "Roman Catholic ",
		Languages: "Spanish",
		Population: "130,759,074 	"
	},
	{
		name: "Micronesia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/2000px-Flag_of_the_Federated_States_of_Micronesia.svg.png",
		Religions: "Roman Catholic ",
		Languages: "English",
		Population: "106,227 	"
	},
	{
		name: "Moldova",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/2000px-Flag_of_Moldova.svg.png",
		Religions: "Eastern Orthodox",
		Languages: "Moldovan",
		Population: "4,041,065"
	},
	{
		name: "Monaco",
		image: "http://www.flagz.co.nz/wp-content/uploads/2013/08/monaco-flag.png",
		Religions: "Roman Catholic",
		Languages: "French",
		Population: "38,897 	"
	},
	{
		name: "Mongolia",
		image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg",
		Religions: "Buddhist",
		Languages: "Mongolian",
		Population: "3,121,772"
	},
	{
		name: "Montenegro",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/2000px-Flag_of_Montenegro.svg.png",
		Religions: "Roman Catholic",
		Languages: "Serbian",
		Population: "629,219 	"
	},
	{
		name: "Morocco",
		image: "https://images-na.ssl-images-amazon.com/images/I/219iXqPC6aL._SX355_.jpg",
		Religions: "Muslim",
		Languages: "Arabic",
		Population: "36,191,805"
	},
	{
		name: "Mozambique",
		image: "http://www.mozambique.co.za/images/mozambique-national-flag-590x390.png",
		Religions: "Catholic",
		Languages: "Portuguese",
		Population: "30,528,673 	"
	},
	{
		name: "Myanmar",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/255px-Flag_of_Myanmar.svg.png",
		Religions: "Roman Catholic",
		Languages: "Burmese",
		Population: "53,855,735 	"
	},
	{
		name: "Namibia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/2000px-Flag_of_Namibia.svg.png",
		Religions: "Christian",
		Languages: "English",
		Population: "2,587,801 	"
	},
	{
		name: "Nauru",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Nauru.svg/2000px-Flag_of_Nauru.svg.png",
		Religions: "Christian",
		Languages: "Nauruan",
		Population: "11,312"
	},
	{
		name: "Nepal",
		image: "http://flags.fmcdn.net/data/flags/w580/np.png",
		Religions: "Hindu",
		Languages: "Nepali",
		Population: "29,624,035"
	},
	{
		name: "Netherlands",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
		Religions: "Roman Catholic",
		Languages: "Dutch",
		Population: "17,084,459 	"
	},
	{
		name: "New Zealand",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/2000px-Flag_of_New_Zealand.svg.png",
		Religions: "Roman Catholic",
		Languages: "English",
		Population: "4,749,598"
	},
	{
		name: "Nicaragua",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/2000px-Flag_of_Nicaragua.svg.png",
		Religions: "Roman Catholic",
		Languages: "Spanish",
		Population: "6,284,757"
	},
	{
		name: "Niger",
		image: "https://cdn.countryflags.com/thumbs/niger/flag-800.png",
		Religions: "Muslim",
		Languages: "French",
		Population: "22,311,375"
	},
	{
		name: "Nigeria",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/2000px-Flag_of_Nigeria.svg.png",
		Religions: "Muslim",
		Languages: "English",
		Population: "195,875,237"
	},
	{
		name: "Norway",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/2000px-Flag_of_Norway.svg.png",
		Religions: "Christian",
		Languages: "Bokmål",
		Population: "25,610,672 	"
	},
	{
		name: "Oman",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/2000px-Flag_of_Oman.svg.png",
		Religions: "Muslim",
		Languages: "Arabic",
		Population: "5,353,363 	"
	},
	{
		name: "Pakistan",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/2000px-Flag_of_Pakistan.svg.png",
		Religions: "Muslim",
		Languages: "Urdu",
		Population: "200,813,818 	"
	},
	{
		name: "Palau",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/2000px-Flag_of_Palau.svg.png",
		Religions: "Roman Catholic",
		Languages: "Palauan",
		Population: "21,964 	"
	},
	{
		name: "Palestine State",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/2000px-Flag_of_Palestine.svg.png",
		Religions: "Roman Catholic",
		Languages: "Arabic",
		Population: "5,052,776 	"
	},
	{
		name: "Panama",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/2000px-Flag_of_Panama.svg.png",
		Religions: "Roman Catholic",
		Languages: "Spanish",
		Population: "4,162,618 	"
	},
	{
		name: "Papua New Guinea",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/2000px-Flag_of_Papua_New_Guinea.svg.png",
		Religions: "Roman Catholic",
		Languages: "Spanish",
		Population: "8,418,346"
	},
	{
		name: "Paraguay",
		image: "http://flagpedia.net/data/flags/ultra/py.png",
		Religions: "Roman Catholic",
		Languages: "Spanish",
		Population: "6,896,908 	"
	},
	{
		name: "Peru",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/2000px-Flag_of_Peru_%28state%29.svg.png",
		Religions: "Roman Catholic",
		Languages: "Spanish",
		Population: "32,551,815"
	},
	{
		name: "Poland",
		image: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
		Religions: "Roman Catholic",
		Languages: "Polish",
		Population: " 	106,512,074 	"
	},
	{
		name: "Portugal",
		image: "http://flags.fmcdn.net/data/flags/w580/pt.png",
		Religions: "Roman Catholic",
		Languages: "Portuguese",
		Population: "38,104,832 	"
	},
	{
		name: "Qatar",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/2000px-Flag_of_Qatar.svg.png",
		Religions: "Muslim",
		Languages: "Arabic",
		Population: "10,291,196 	"
	},
	{
		name: "Romania",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1200px-Flag_of_Romania.svg.png",
		Religions: "Eastern Orthodox",
		Languages: "Romanian",
		Population: "2,694,849 	"
	},
	{
		name: "Russia",
		image: "https://upload.wikimedia.org/wikipedia/en/archive/f/f3/20120812153730%21Flag_of_Russia.svg",
		Religions: "Russin Orthodox",
		Languages: "Russian",
		Population: "19,580,634 	"
	},
	{
		name: "Rwanda",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/2000px-Flag_of_Rwanda.svg.png",
		Religions: "Roman Catholic",
		Languages: "Kinyarwanda",
		Population: " 	143,964,709 	"
	},
	{
		name: "Saint Kitts ",
		image: "https://www.worldatlas.com/webimage/flags/countrys/zzzflags/knlarge.gif",
		Religions: "Roman Catholic",
		Languages: "English",
		Population: "12,501,156"
	},
	{
		name: "Saint Lucia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/1280px-Flag_of_Saint_Lucia.svg.png",
		Religions: "Roman Catholic",
		Languages: "English",
		Population: "55,850 	"
	},
	{
		name: "Saint Vincent",
		image: "https://cdn.britannica.com/26/5126-004-016F25F5.jpg",
		Religions: "Roman Catholic",
		Languages: "English",
		Population: "179,667 	"
	},
	{
		name: "Samoa",
		image: "http://flags.fmcdn.net/data/flags/w580/ws.png",
		Religions: "Roman Catholic",
		Languages: "English",
		Population: "110,200"
	},
	{
		name: "San Marino",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/227px-Flag_of_San_Marino.svg.png",
		Religions: "Roman Catholic",
		Languages: "Italian",
		Population: "197,695 	"
	},
	{
		name: "Sao Tome",
		image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg",
		Religions: "Roman Catholic",
		Languages: "Portuguese",
		Population: "208,818 	"
	},
	{
		name: "Saudi Arabia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/2000px-Flag_of_Saudi_Arabia.svg.png",
		Religions: "Muslim",
		Languages: "Arabic",
		Population: "33,554,343"
	},
	{
		name: "Senegal",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1280px-Flag_of_Senegal.svg.png",
		Religions: "Muslim",
		Languages: "French",
		Population: "16,294,270 	"
	},
	{
		name: "Serbia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/2000px-Flag_of_Serbia.svg.png",
		Religions: "Muslim",
		Languages: "Serbian",
		Population: "8,762,027 	"
	},
	{
		name: "Seychelles",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Seychelles.svg/2000px-Flag_of_Seychelles.svg.png",
		Religions: "Roman Catholic",
		Languages: "Seselwa",
		Population: " 	95,235 	"
	},
	{
		name: "Sierra Leone",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/1280px-Flag_of_Sierra_Leone.svg.png",
		Religions: "Muslim",
		Languages: "English",
		Population: "7,719,729"
	},
	{
		name: "Singapore",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/250px-Flag_of_Singapore.svg.png",
		Religions: "Buddhist",
		Languages: "Mandarin",
		Population: "5,791,901"
	},
	{
		name: "Slovakia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/2000px-Flag_of_Slovakia.svg.png",
		Religions: "Roman Catholic",
		Languages: "Slovak ",
		Population: "5,449,816"
	},
	{
		name: "Slovenia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Slovene_Home_Guard.svg/2000px-Flag_of_the_Slovene_Home_Guard.svg.png",
		Religions: "Roman Catholic",
		Languages: "Slovenian",
		Population: "2,081,260"
	},
	{
		name: "Solomon Islands",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/1280px-Flag_of_the_Solomon_Islands.svg.png",
		Religions: "Roman Catholic",
		Languages: "English",
		Population: "623,281"
	},
	{
		name: "Somalia",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/2000px-Flag_of_Somalia.svg.png",
		Religions: "Muslim",
		Languages: "Somali",
		Population: "15,181,925 	"
	},
	{
		name: "South Africa",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/2000px-Flag_of_South_Africa.svg.png",
		Religions: "Christian",
		Languages: "IsiZulu",
		Population: "57,398,421	"
	},
	{
		name: "South Korea",
		image: "https://www.worldatlas.com/webimage/flags/countrys/zzzflags/krlarge.gif",
		Religions: "Christian",
		Languages: "English",
		Population: "51,164,435"
	},
	{
		name: "South Sudan",
		image: "http://flags.fmcdn.net/data/flags/w580/ss.png",
		Religions: "Muslim",
		Languages: "English",
		Population: " 	12,919,053"
	},
	{
		name: "Spain",
		image: "https://i.ytimg.com/vi/vV_owUdv_7o/maxresdefault.jpg",
		Religions: "Roman Catholic",
		Languages: "Castilian",
		Population: "46,397,452 	"
	},
	{
		name: "Sri Lanka",
		image: "https://www.gettysburgflag.com/media/catalog/product/cache/2/thumbnail/520x416/602f0fa2c1f0d1ba5e241f914e856ff9/s/r/sri-lanka-flag-211-p_1.png",
		Religions: "Ground",
		Languages: "Sinhala	",
		Population: " 	20,950,041"
	},
	{
		name: "Sudan",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/2000px-Flag_of_Sudan.svg.png",
		Religions: "Bushhist",
		Languages: "Arabic",
		Population: "41,511,526"
	},
	{
		name: "Suriname",
		image: "http://flagpedia.net/data/flags/ultra/sr.png",
		Religions: "Hindu",
		Languages: "Dutchs",
		Population: " 	568,301"
	},
	{
		name: "Swaziland",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Flag_of_Swaziland.svg/1280px-Flag_of_Swaziland.svg.png",
		Religions: "Zionist",
		Languages: "English",
		Population: " 	1,391,385 	"
	},
	{
		name: "Sweden",
		image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
		Religions: "Lutheran",
		Languages: "Swedish",
		Population: "9,982,709 	"
	},
	{
		name: "Switzerland",
		image: "https://images-na.ssl-images-amazon.com/images/I/51JCB9287VL.gif",
		Religions: "Roman Catholic",
		Languages: "German",
		Population: "8,544,034 	"
	},
	{
		name: "Syria",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Syria_2011%2C_observed.svg/2000px-Flag_of_Syria_2011%2C_observed.svg.png",
		Religions: "Muslim",
		Languages: "Arabic",
		Population: "18,284,407 	"
	},
	{
		name: "Tajikistan",
		image: "https://cdn.countryflags.com/thumbs/tajikistan/flag-800.png",
		Religions: "Muslim",
		Languages: "Tajik",
		Population: "9,107,211"
	},
	{
		name: "Tanzania",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/1280px-Flag_of_Tanzania.svg.png",
		Religions: "Christian",
		Languages: "Swahi",
		Population: "59,091,392"
	},
	{
		name: "Thailand",
		image: "http://flags.fmcdn.net/data/flags/w580/th.png",
		Religions: "Buddhist",
		Languages: "Thai",
		Population: "69,183,173"
	},
	{
		name: "Timor-Leste",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/2000px-Flag_of_East_Timor.svg.png",
		Religions: "Roman Catholic",
		Languages: "English",
		Population: "1,324,094"
	},
	{
		name: "Togo",
		image: "http://flags.fmcdn.net/data/flags/w580/tg.png",
		Religions: "Christian",
		Languages: "French",
		Population: '7,990,926 	'
	},
	{
		name: "Tonga",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/1280px-Flag_of_Tonga.svg.png",
		Religions: "Christian",
		Languages: "Tongan",
		Population:  "109,008 	"
	},
	{
		name: "Trinidad",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/2000px-Flag_of_Trinidad_and_Tobago.svg.png",
		Religions: "Roman Catholic",
		Languages: "English",
		Population: "1,372,598 	"
	},
	{
		name: "Tunisia	",
		image: "https://i.ebayimg.com/images/g/xe4AAOSwT5tWGQie/s-l300.jpg",
		Religions: "Muslim",
		Languages: "Arabic",
		Population: "11,659,174 	"
	},
	{
		name: "Turkey",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png",
		Religions: "Muslim",
		Languages: "Turkish",
		Population:  " 	81,916,871 		 "
	},
	{
		name: "Turkmenistan",
		image: "https://www.worldatlas.com/webimage/flags/countrys/zzzflags/tmlarge.gif",
		Religions: "Muslim",
		Languages: "Turkmen",
		Population: "5,851,466 	"
	},
	{
		name: "Tuvalu",
		image: "https://www.worldatlas.com/webimage/flags/countrys/zzzflags/tvlarge.gif",
		Religions: "Roman Catholic",
		Languages: "Tuvaluan",
		Population: "11,287 	"
	},
	{
		name: "Uganda",
		image: "https://answersafrica.com/wp-content/uploads/2015/02/76_ugandan-flag-640x480.jpg",
		Religions: "Roman Catholic",
		Languages: "English",
		Population: "44,270,563 	"
	},
	{
		name: "Ukraine",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/2000px-Flag_of_Ukraine.svg.png",
		Religions: "Roman Catholic",
		Languages: "Ukrainian",
		Population: "44,009,214 	"
	},
	{
		name: "United Arab Emirates",
		image: "http://flags.fmcdn.net/data/flags/w580/ae.png",
		Religions: "Muslim",
		Languages: "Arabic",
		Population: "9,541,615 	"
	},
	{
		name: "United Kingdom",
		image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png",
		Religions: "Christian",
		Languages: "English",
		Population: "66,573,504"
	},
	{
		name: "United States of America",
		image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png",
		Religions: "Christian",
		Languages: "English",
		Population: "326,766,748"
	},
	{
		name: "Uruguay",
		image: "https://i.ytimg.com/vi/-Q0WBDeDiEA/maxresdefault.jpg",
		Religions: "Roman Catholic",
		Languages: "Spanish",
		Population: "3,469,551"
	},
	{
		name: "Uzbekistan",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png",
		Religions: "Muslim",
		Languages: "Uzbek",
		Population: "32,364,996"
	},
	{
		name: "Vanuatu",
		image: "https://fotw.info/images/v/vu.gif",
		Religions: "Roman Catholic",
		Languages: "Bislama",
		Population: "282,117 		"
	},
	{
		name: "Venezuela",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/2000px-Flag_of_Venezuela.svg.png",
		Religions: "Roman Catholic",
		Languages: "Italian",
		Population: " 	32,381,221"
	},
	{
		name: "Viet Nam",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/255px-Flag_of_Vietnam.svg.png",
		Religions: "Buddhist",
		Languages: "Vietnamese",
		Population: "96,491,146	"
	},
	{
		name: "Yemen",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/2000px-Flag_of_Yemen.svg.png",
		Religions: "Muslim",
		Languages: "Arabic",
		Population: " 	28,915,284"
	},
	{
		name: "Zambia",
		image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg",
		Religions: "Christian",
		Languages: "English",
		Population: "17,609,178"
	},
	{
		name: "Zimbabwe",
		image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg",
		Religions: "Christian",
		Languages: "English",
		Population: "16,913,261"
	}

];


class App extends Component {
	constructor(props){
		super(props)
		this.state ={
			countryboxopen: false,
			country: [],
			filterType: "Name",
			filteredList: [],
			keyWord: ""
		 }
		 this.openCountrybox=this.openCountrybox.bind(this);
		 this.closeCountrybox=this.closeCountrybox.bind(this);
		 this.filterCountry=this.filterCountry.bind(this);
		 this.setKeyword= this.setKeyword.bind(this);
		 
		  
	}
 
	shuffleArray(array) {
		for (let i = array.length -1 ; i > 0 ; i--){
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}
	componentDidMount(){
		const shuffledData = data.sort(() => 0.5 - Math.random());
		this.setState({country: shuffledData});
		this.setState({filteredList: shuffledData});
	}
	openCountrybox() {
		this.state.countryboxopen 
		?this.setState({countryboxopen: false})
		:
		this.setState({countryboxopen: true});
	}
	closeCountrybox(){
		this.state.countryboxopen 
		 ?this.setState({countryboxopen: false})
		 :console.log("CountryBox not open yet.")
	}
	setKeyword(word){
		this.setState({keyWord: word}, () => this.filterCountry())
	}
	filterCountry(keyword){
		let filterType = this.state.filterType.toLowerCase()
		let filterkeyword = this.state.keyWord.toUpperCase()
		let filteredList = this.state.country.filter( country => {
		let key = country[filterType].toUpperCase()
		return key.includes(filterkeyword)
		})
		this.setState({filteredList})
	}
  render() {
    return (
      <div className="app">
		  <CountryBox 
		  keyWord={this.state.keyWord}
	 
		  filterCountry={this.filterCountry}
		  filterType={this.state.filterType}
		  setKeyword={this.setKeyword}
		  country={this.state.filteredList}
		  countryboxopen={this.state.countryboxopen}
		  openCountrybox={this.openCountrybox}
		  />
      </div>
    );
  }
}

export default App;
