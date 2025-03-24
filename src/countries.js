const getCountryFromUPC = (upc) => {
    const countryCodes = {
      // Two-digit codes
      '00': 'USA 🇺🇸',
      '01': 'USA 🇺🇸',
      '02': 'USA 🇺🇸',
      '03': 'USA 🇺🇸',
      '04': 'USA 🇺🇸',
      '05': 'USA 🇺🇸',
      '06': 'USA 🇺🇸',
      '07': 'USA 🇺🇸',
      '08': 'USA 🇺🇸',
      '09': 'USA 🇺🇸',
      '30': 'France 🇫🇷',
      '31': 'France 🇫🇷',
      '32': 'France 🇫🇷',
      '33': 'France 🇫🇷',
      '34': 'France 🇫🇷',
      '35': 'France 🇫🇷',
      '36': 'France 🇫🇷',
      '37': 'France 🇫🇷',
      '40': 'Germany 🇩🇪',
      '41': 'Germany 🇩🇪',
      '42': 'Germany 🇩🇪',
      '43': 'Germany 🇩🇪',
      '44': 'Germany 🇩🇪',
      '45': 'Japan 🇯🇵',
      '49': 'Japan 🇯🇵',
      '50': 'UK 🇬🇧',
      '57': 'Denmark 🇩🇰',
      '64': 'Finland 🇫🇮',
      '70': 'Norway 🇳🇴',
      '73': 'Sweden 🇸🇪',
      '76': 'Switzerland 🇨🇭',
      '80': 'Italy 🇮🇹',
      '81': 'Italy 🇮🇹',
      '82': 'Italy 🇮🇹',
      '83': 'Italy 🇮🇹',
      '84': 'Spain 🇪🇸',
      '87': 'Netherlands 🇳🇱',
      '90': 'Austria 🇦🇹',
      '91': 'Austria 🇦🇹',
      '93': 'Australia 🇦🇺',
      '94': 'New Zealand 🇳🇿',
      
      // Three-digit codes
      '100': 'USA 🇺🇸', '101': 'USA 🇺🇸', '102': 'USA 🇺🇸', '103': 'USA 🇺🇸',
      '104': 'USA 🇺🇸', '105': 'USA 🇺🇸', '106': 'USA 🇺🇸', '107': 'USA 🇺🇸',
      '108': 'USA 🇺🇸', '109': 'USA 🇺🇸', '110': 'USA 🇺🇸', '111': 'USA 🇺🇸',
      '112': 'USA 🇺🇸', '113': 'USA 🇺🇸', '114': 'USA 🇺🇸', '115': 'USA 🇺🇸',
      '116': 'USA 🇺🇸', '117': 'USA 🇺🇸', '118': 'USA 🇺🇸', '119': 'USA 🇺🇸',
      '120': 'USA 🇺🇸', '121': 'USA 🇺🇸', '122': 'USA 🇺🇸', '123': 'USA 🇺🇸',
      '124': 'USA 🇺🇸', '125': 'USA 🇺🇸', '126': 'USA 🇺🇸', '127': 'USA 🇺🇸',
      '128': 'USA 🇺🇸', '129': 'USA 🇺🇸', '130': 'USA 🇺🇸', '131': 'USA 🇺🇸',
      '132': 'USA 🇺🇸', '133': 'USA 🇺🇸', '134': 'USA 🇺🇸', '135': 'USA 🇺🇸',
      '136': 'USA 🇺🇸', '137': 'USA 🇺🇸', '138': 'USA 🇺🇸', '139': 'USA 🇺🇸',
      '300': 'France 🇫🇷', '301': 'France 🇫🇷', '302': 'France 🇫🇷', '303': 'France 🇫🇷',
      '304': 'France 🇫🇷', '305': 'France 🇫🇷', '306': 'France 🇫🇷', '307': 'France 🇫🇷',
      '308': 'France 🇫🇷', '309': 'France 🇫🇷', '310': 'France 🇫🇷', '311': 'France 🇫🇷',
      '312': 'France 🇫🇷', '313': 'France 🇫🇷', '314': 'France 🇫🇷', '315': 'France 🇫🇷',
      '316': 'France 🇫🇷', '317': 'France 🇫🇷', '318': 'France 🇫🇷', '319': 'France 🇫🇷',
      '320': 'France 🇫🇷', '321': 'France 🇫🇷', '322': 'France 🇫🇷', '323': 'France 🇫🇷',
      '324': 'France 🇫🇷', '325': 'France 🇫🇷', '326': 'France 🇫🇷', '327': 'France 🇫🇷',
      '328': 'France 🇫🇷', '329': 'France 🇫🇷', '330': 'France 🇫🇷', '331': 'France 🇫🇷',
      '332': 'France 🇫🇷', '333': 'France 🇫🇷', '334': 'France 🇫🇷', '335': 'France 🇫🇷',
      '336': 'France 🇫🇷', '337': 'France 🇫🇷', '338': 'France 🇫🇷', '339': 'France 🇫🇷',
      '340': 'France 🇫🇷', '341': 'France 🇫🇷', '342': 'France 🇫🇷', '343': 'France 🇫🇷',
      '344': 'France 🇫🇷', '345': 'France 🇫🇷', '346': 'France 🇫🇷', '347': 'France 🇫🇷',
      '348': 'France 🇫🇷', '349': 'France 🇫🇷', '350': 'France 🇫🇷', '351': 'France 🇫🇷',
      '352': 'France 🇫🇷', '353': 'France 🇫🇷', '354': 'France 🇫🇷', '355': 'France 🇫🇷',
      '356': 'France 🇫🇷', '357': 'France 🇫🇷', '358': 'France 🇫🇷', '359': 'France 🇫🇷',
      '360': 'France 🇫🇷', '361': 'France 🇫🇷', '362': 'France 🇫🇷', '363': 'France 🇫🇷',
      '364': 'France 🇫🇷', '365': 'France 🇫🇷', '366': 'France 🇫🇷', '367': 'France 🇫🇷',
      '368': 'France 🇫🇷', '369': 'France 🇫🇷', '370': 'France 🇫🇷', '371': 'France 🇫🇷',
      '372': 'France 🇫🇷', '373': 'France 🇫🇷', '374': 'France 🇫🇷', '375': 'France 🇫🇷',
      '376': 'France 🇫🇷', '377': 'France 🇫🇷', '378': 'France 🇫🇷', '379': 'France 🇫🇷',
      '380': 'Bulgaria 🇧🇬',
      '383': 'Slovenia 🇸🇮',
      '385': 'Croatia 🇭🇷',
      '387': 'Bosnia and Herzegovina 🇧🇦',
      '400': 'Germany 🇩🇪', '401': 'Germany 🇩🇪', '402': 'Germany 🇩🇪', '403': 'Germany 🇩🇪',
      '404': 'Germany 🇩🇪', '405': 'Germany 🇩🇪', '406': 'Germany 🇩🇪', '407': 'Germany 🇩🇪',
      '408': 'Germany 🇩🇪', '409': 'Germany 🇩🇪', '410': 'Germany 🇩🇪', '411': 'Germany 🇩🇪',
      '412': 'Germany 🇩🇪', '413': 'Germany 🇩🇪', '414': 'Germany 🇩🇪', '415': 'Germany 🇩🇪',
      '416': 'Germany 🇩🇪', '417': 'Germany 🇩🇪', '418': 'Germany 🇩🇪', '419': 'Germany 🇩🇪',
      '420': 'Germany 🇩🇪', '421': 'Germany 🇩🇪', '422': 'Germany 🇩🇪', '423': 'Germany 🇩🇪',
      '424': 'Germany 🇩🇪', '425': 'Germany 🇩🇪', '426': 'Germany 🇩🇪', '427': 'Germany 🇩🇪',
      '428': 'Germany 🇩🇪', '429': 'Germany 🇩🇪', '430': 'Germany 🇩🇪', '431': 'Germany 🇩🇪',
      '432': 'Germany 🇩🇪', '433': 'Germany 🇩🇪', '434': 'Germany 🇩🇪', '435': 'Germany 🇩🇪',
      '436': 'Germany 🇩🇪', '437': 'Germany 🇩🇪', '438': 'Germany 🇩🇪', '439': 'Germany 🇩🇪',
      '440': 'Germany 🇩🇪',
      '450': 'Japan 🇯🇵', '451': 'Japan 🇯🇵', '452': 'Japan 🇯🇵', '453': 'Japan 🇯🇵',
      '454': 'Japan 🇯🇵', '455': 'Japan 🇯🇵', '456': 'Japan 🇯🇵', '457': 'Japan 🇯🇵',
      '458': 'Japan 🇯🇵', '459': 'Japan 🇯🇵',
      '460': 'Russia 🇷🇺', '461': 'Russia 🇷🇺', '462': 'Russia 🇷🇺', '463': 'Russia 🇷🇺',
      '464': 'Russia 🇷🇺', '465': 'Russia 🇷🇺', '466': 'Russia 🇷🇺', '467': 'Russia 🇷🇺',
      '468': 'Russia 🇷🇺', '469': 'Russia 🇷🇺',
      '471': 'Taiwan 🇹🇼',
      '474': 'Estonia 🇪🇪',
      '475': 'Latvia 🇱🇻',
      '476': 'Azerbaijan 🇦🇿',
      '477': 'Lithuania 🇱🇹',
      '478': 'Uzbekistan 🇺🇿',
      '479': 'Sri Lanka 🇱🇰',
      '480': 'Philippines 🇵🇭',
      '481': 'Belarus 🇧🇾',
      '482': 'Ukraine 🇺🇦',
      '484': 'Moldova 🇲🇩',
      '485': 'Armenia 🇦🇲',
      '486': 'Georgia 🇬🇪',
      '487': 'Kazakhstan 🇰🇿',
      '489': 'Hong Kong 🇭🇰',
      '490': 'Japan 🇯🇵', '491': 'Japan 🇯🇵', '492': 'Japan 🇯🇵', '493': 'Japan 🇯🇵',
      '494': 'Japan 🇯🇵', '495': 'Japan 🇯🇵', '496': 'Japan 🇯🇵', '497': 'Japan 🇯🇵',
      '498': 'Japan 🇯🇵', '499': 'Japan 🇯🇵',
      '500': 'UK 🇬🇧', '501': 'UK 🇬🇧', '502': 'UK 🇬🇧', '503': 'UK 🇬🇧', '504': 'UK 🇬🇧',
      '505': 'UK 🇬🇧', '506': 'UK 🇬🇧', '507': 'UK 🇬🇧', '508': 'UK 🇬🇧', '509': 'UK 🇬🇧',
      '520': 'Greece 🇬🇷', '521': 'Greece 🇬🇷',
      '528': 'Lebanon 🇱🇧',
      '529': 'Cyprus 🇨🇾',
      '531': 'Macedonia 🇲🇰',
      '535': 'Malta 🇲🇹',
      '539': 'Ireland 🇮🇪',
      '540': 'Belgium 🇧🇪', '541': 'Belgium 🇧🇪', '542': 'Belgium 🇧🇪', '543': 'Belgium 🇧🇪',
      '544': 'Belgium 🇧🇪', '545': 'Belgium 🇧🇪', '546': 'Belgium 🇧🇪', '547': 'Belgium 🇧🇪',
      '548': 'Belgium 🇧🇪', '549': 'Belgium 🇧🇪',
      '560': 'Portugal 🇵🇹',
      '569': 'Iceland 🇮🇸',
      '570': 'Denmark 🇩🇰', '571': 'Denmark 🇩🇰', '572': 'Denmark 🇩🇰', '573': 'Denmark 🇩🇰',
      '574': 'Denmark 🇩🇰', '575': 'Denmark 🇩🇰', '576': 'Denmark 🇩🇰', '577': 'Denmark 🇩🇰',
      '578': 'Denmark 🇩🇰', '579': 'Denmark 🇩🇰',
      '590': 'Poland 🇵🇱',
      '594': 'Romania 🇷🇴',
      '599': 'Hungary 🇭🇺',
      '600': 'South Africa 🇿🇦',
      '601': 'South Africa 🇿🇦',
      '603': 'Ghana 🇬🇭',
      '604': 'Senegal 🇸🇳',
      '608': 'Bahrain 🇧🇭',
      '609': 'Mauritius 🇲🇺',
      '611': 'Morocco 🇲🇦',
      '613': 'Algeria 🇩🇿',
      '615': 'Nigeria 🇳🇬',
      '616': 'Kenya 🇰🇪',
      '618': 'Ivory Coast 🇨🇮',
      '619': 'Tunisia 🇹🇳',
      '620': 'Tanzania 🇹🇿',
      '621': 'Syria 🇸🇾',
      '622': 'Egypt 🇪🇬',
      '624': 'Libya 🇱🇾',
      '625': 'Jordan 🇯🇴',
      '626': 'Iran 🇮🇷',
      '627': 'Kuwait 🇰🇼',
      '628': 'Saudi Arabia 🇸🇦',
      '629': 'UAE 🇦🇪',
      '640': 'Finland 🇫🇮',
      '690': 'China 🇨🇳', '691': 'China 🇨🇳', '692': 'China 🇨🇳',
      '693': 'China 🇨🇳', '694': 'China 🇨🇳', '695': 'China 🇨🇳',
      '700': 'Norway 🇳🇴',
      '729': 'Israel 🇮🇱',
      '730': 'Sweden 🇸🇪',
      '740': 'Guatemala 🇬🇹',
      '741': 'El Salvador 🇸🇻',
      '742': 'Honduras 🇭🇳',
      '743': 'Nicaragua 🇳🇮',
      '744': 'Costa Rica 🇨🇷',
      '745': 'Panama 🇵🇦',
      '746': 'Dominican Republic 🇩🇴',
      '750': 'Mexico 🇲🇽',
      '754': 'Canada 🇨🇦', '755': 'Canada 🇨🇦',
      '759': 'Venezuela 🇻🇪',
      '760': 'Switzerland 🇨🇭', '761': 'Switzerland 🇨🇭', '762': 'Switzerland 🇨🇭', '763': 'Switzerland 🇨🇭', '764': 'Switzerland 🇨🇭', '765': 'Switzerland 🇨🇭', '766': 'Switzerland 🇨🇭', '767': 'Switzerland 🇨🇭', '768': 'Switzerland 🇨🇭', '769': 'Switzerland 🇨🇭',
      '770': 'Colombia 🇨🇴',
      '773': 'Uruguay 🇺🇾',
      '775': 'Peru 🇵🇪',
      '777': 'Bolivia 🇧🇴',
      '779': 'Argentina 🇦🇷',
      '780': 'Chile 🇨🇱',
      '784': 'Paraguay 🇵🇾',
      '786': 'Ecuador 🇪🇨',
      '789': 'Brazil 🇧🇷', '790': 'Brazil 🇧🇷',
      '800': 'Italy 🇮🇹', '801': 'Italy 🇮🇹', '802': 'Italy 🇮🇹', '803': 'Italy 🇮🇹',
      '804': 'Italy 🇮🇹', '805': 'Italy 🇮🇹', '806': 'Italy 🇮🇹', '807': 'Italy 🇮🇹',
      '808': 'Italy 🇮🇹', '809': 'Italy 🇮🇹', '810': 'Italy 🇮🇹', '811': 'Italy 🇮🇹',
      '812': 'Italy 🇮🇹', '813': 'Italy 🇮🇹', '814': 'Italy 🇮🇹', '815': 'Italy 🇮🇹',
      '816': 'Italy 🇮🇹', '817': 'Italy 🇮🇹', '818': 'Italy 🇮🇹', '819': 'Italy 🇮🇹',
      '820': 'Italy 🇮🇹', '821': 'Italy 🇮🇹', '822': 'Italy 🇮🇹', '823': 'Italy 🇮🇹',
      '824': 'Italy 🇮🇹', '825': 'Italy 🇮🇹', '826': 'Italy 🇮🇹', '827': 'Italy 🇮🇹',
      '828': 'Italy 🇮🇹', '829': 'Italy 🇮🇹', '830': 'Italy 🇮🇹', '831': 'Italy 🇮🇹',
      '832': 'Italy 🇮🇹', '833': 'Italy 🇮🇹', '834': 'Italy 🇮🇹', '835': 'Italy 🇮🇹',
      '836': 'Italy 🇮🇹', '837': 'Italy 🇮🇹', '838': 'Italy 🇮🇹', '839': 'Italy 🇮🇹',
      '850': 'Cuba 🇨🇺',
      '858': 'Slovakia 🇸🇰',
      '859': 'Czech Republic 🇨🇿',
      '860': 'Serbia 🇷🇸',
      '865': 'Mongolia 🇲🇳',
      '867': 'North Korea 🇰🇵',
      '868': 'Turkey 🇹🇷', '869': 'Turkey 🇹🇷',
      '870': 'Netherlands 🇳🇱', '871': 'Netherlands 🇳🇱', '872': 'Netherlands 🇳🇱',
      '873': 'Netherlands 🇳🇱', '874': 'Netherlands 🇳🇱', '875': 'Netherlands 🇳🇱',
      '876': 'Netherlands 🇳🇱', '877': 'Netherlands 🇳🇱', '878': 'Netherlands 🇳🇱',
      '879': 'Netherlands 🇳🇱',
      '880': 'South Korea 🇰🇷', '881': 'South Korea 🇰🇷',
      '885': 'Thailand 🇹🇭',
      '888': 'Singapore 🇸🇬',
      '890': 'India 🇮🇳',
      '893': 'Vietnam 🇻🇳',
      '896': 'Pakistan 🇵🇰',
      '899': 'Indonesia 🇮🇩',
      '900': 'Austria 🇦🇹', '901': 'Austria 🇦🇹', '902': 'Austria 🇦🇹', '903': 'Austria 🇦🇹',
      '904': 'Austria 🇦🇹', '905': 'Austria 🇦🇹', '906': 'Austria 🇦🇹', '907': 'Austria 🇦🇹',
      '908': 'Austria 🇦🇹', '909': 'Austria 🇦🇹', '910': 'Austria 🇦🇹', '911': 'Austria 🇦🇹',
      '912': 'Austria 🇦🇹', '913': 'Austria 🇦🇹', '914': 'Austria 🇦🇹', '915': 'Austria 🇦🇹',
      '916': 'Austria 🇦🇹', '917': 'Austria 🇦🇹', '918': 'Austria 🇦🇹', '919': 'Austria 🇦🇹',
      '930': 'Australia 🇦🇺', '931': 'Australia 🇦🇺', '932': 'Australia 🇦🇺',
      '933': 'Australia 🇦🇺', '934': 'Australia 🇦🇺', '935': 'Australia 🇦🇺',
      '936': 'Australia 🇦🇺', '937': 'Australia 🇦🇺', '938': 'Australia 🇦🇺',
      '939': 'Australia 🇦🇺',
      '940': 'New Zealand 🇳🇿', '941': 'New Zealand 🇳🇿', '942': 'New Zealand 🇳🇿',
      '943': 'New Zealand 🇳🇿', '944': 'New Zealand 🇳🇿', '945': 'New Zealand 🇳🇿',
      '946': 'New Zealand 🇳🇿', '947': 'New Zealand 🇳🇿', '948': 'New Zealand 🇳🇿',
      '949': 'New Zealand 🇳🇿',
      '955': 'Malaysia 🇲🇾',
      '958': 'Macau 🇲🇴'
    };

    // Try three-digit prefix first, then fall back to two-digit
    const threeDigitPrefix = upc.substring(1, 4);
    const twoDigitPrefix = upc.substring(1, 3);
    
    return countryCodes[threeDigitPrefix] || countryCodes[twoDigitPrefix] || 'Unknown';
};

module.exports = getCountryFromUPC;