import { LevelsText } from '../../type/type';
import { LevelsVinyl } from '../../type/type';

export const levelsTextArray: LevelsText[] = [
  {
    task: 'Select the vinyl record',
    gameLayer:
`<code>&lt;div class="table"&gt;</code>
<code data-vinyl='0'>  &lt;vinyl&gt;</code><code data-vinyl='0'>&lt;/vinyl&gt;</code>
<code>&lt;/div&gt;</code>`,
    level: 'Level 1 of 11',
    name: 'Pink Floyd - Hey you',
    selector: 'Type Selector',
    selectorDescription: 'Selects all elements of type <span class="tagSelect">&nbsp;A&nbsp;</span>. Type refers to the type of tag, so <span class="tagSelect">&nbsp;div&nbsp;</span>, <span class="tagSelect">&nbsp;p&nbsp;</span> and <span class="tagSelect">&nbsp;ul&nbsp;</span> are all different element types.',
    levelsDescription: 'The Wall tells the story of Pink, an alienated young rock star who is retreating from society and isolating himself. In "Hey You", Pink realizes his mistake of shunning society and attempts to regain contact with the outside world. However, he cannot see or hear beyond the wall. Pink\'s call becomes more and more desperate as he begins to realize there is no escape.',
    examples: '<span class="tagSelect">&nbsp;div&nbsp;</span> selects all <span class="tagSelect">&nbsp;div&nbsp;</span> elements.<br> <span class="tagSelect">&nbsp;p&nbsp;</span> selects all <span class="tagSelect">&nbsp;p&nbsp;</span> elements.',
  },
  {
    task: 'Select the single',
    gameLayer:
`<code>&lt;div class="table"&gt;</code>
<code data-vinyl='0'>  &lt;vinyl&gt;</code><code data-vinyl='0'>&lt;/vinyl&gt;</code>
<code data-vinyl='1'>  &lt;vinyl id="single"&gt;</code><code data-vinyl='1'>&lt;/vinyl&gt;</code>
<code>&lt;/div&gt;</code>`,
    level: 'Level 2 of 11',
    name: 'Big Brother and the Holding Company - Summertime',
    selector: 'ID Selector',
    selectorDescription: 'Selects the element with a specific <span class="tagSelect">&nbsp;id&nbsp;</span>. You can also combine the ID selector with the type selector.',
    levelsDescription: 'This song is one of the three covers that Big Brother recorded in Cheap Thrills. It is originally a jazz standard co-composed by George and Ira Gershwin for the opera “Porgy and Bess”. The lyrics are by DuBose Heyward. Originally a lullaby, Janis passionate voice transforms it into a blues, psychedelic rock song.',
    examples: '<span class="tagSelect">&nbsp;#cool&nbsp;</span> selects any element with <span class="tagSelect">&nbsp;id="cool"&nbsp;</span>',
  },
  {
    task: 'Select the colored vinyl record',
    gameLayer:
  `<code>&lt;div class="table"&gt;</code>
  <code data-vinyl='0'>&lt;vinyl&gt;</code><code data-vinyl='0'>&lt;/vinyl&gt;</code>
  <code data-vinyl='1'>&lt;vinyl class="colored"&gt;</code><code data-vinyl='1'>&lt;/vinyl&gt;</code>
<code>&lt;/div&gt;</code>`,
    level: 'Level 3 of 11',
    name: 'Led Zeppelin - Immigrant Song',
    selector: 'Class Selector',
    examples: '<span class="tagSelect">&nbsp;.small&nbsp;</span> selects all elements with <span class="tagSelect">&nbsp;class="small"&nbsp;</span>',
    selectorDescription: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    levelsDescription: '"Immigrant Song" is a song by the English rock band Led Zeppelin. It is built upon a repeating riff and features lyrical references to Norse mythology, with singer Robert Plant\'s howling vocals mentioning war-making and Valhalla. The song was included on their 1970 album, Led Zeppelin III.',
  },
  {
    task: 'Select the vinyl record and cassette tape',
    gameLayer:
    `<code>&lt;div class="table"&gt;</code>
<code data-vinyl='0'>  &lt;vinyl&gt;</code><code data-vinyl='0'>&lt;/vinyl&gt;</code>
  <code data-tape='1'>&lt;vhs&gt;&lt;/vhs&gt;</code>
  <code data-tape='2'>&lt;tape&gt;&lt;/tape&gt;</code>
<code>&lt;/div&gt;</code>`,
    level: 'Level 4 of 11',
    name: 'Journey - Wheel in the Sky',
    selector: 'Comma Combinator',
    selectorDescription: 'Thanks to Shatner technology, this selects all <span class="tagSelect">&nbsp;A&nbsp;</span> and <span class="tagSelect">&nbsp;B&nbsp;</span> elements. You can combine any selectors this way, and you can specify more than two.',
    levelsDescription: 'The narrator of "Wheel in the Sky" describes the newly arrived winter, as he is lamenting not having been home "in a year or more." He is missing home and longing to return and reconnect with an unnamed woman, and he hopes that "she holds on a little bit longer.',
    examples: '<span class="tagSelect">&nbsp;a&nbsp;</span>, <span class="tagSelect">&nbsp;p&nbsp;</span>, <span class="tagSelect">&nbsp;div&nbsp;</span> selects all <span class="tagSelect">&nbsp;a&nbsp;</span>, <span class="tagSelect">&nbsp;p&nbsp;</span> and <span class="tagSelect">&nbsp;div&nbsp;</span> elements',
  },
  {
    task: 'Select the tape on the vinyl record',
    gameLayer:
    `<code>&lt;div class="table"&gt;</code>
<code data-vinyl='0'>  &lt;vinyl&gt;</code><code data-vinyl='0'>&lt;/vinyl&gt;</code>
<code data-vinyl='1'>  &lt;vinyl&gt;</code>
    <code data-tape='1'>&lt;tape&gt;&lt;/tape&gt;</code>
  <code data-vinyl='1'>&lt;/vinyl&gt;</code>
  <code data-tape='2'>&lt;tape&gt;&lt;/tape&gt;</code>
<code>&lt;/div&gt;</code>`,
    level: 'Level 5 of 11',
    name: 'Rainbow - Rainbow Eyes',
    selector: 'Descendant Selector',
    selectorDescription: 'Selects all <span class="tagSelect">&nbsp;B&nbsp;</span> inside of <span class="tagSelect">&nbsp;A&nbsp;</span>. <span class="tagSelect">&nbsp;B&nbsp;</span> is called a descendant because it is inside of another element.',
    levelsDescription: 'Running to 7:11 on the original release, this ballad written by Ritchie Blackmore and Ronnie James Dio about love lost has been fairly well covered, including by Mr. Blackmore himself. It includes a string arrangement by the Bavarian String Ensemble, and flute.',
    examples: '<span class="tagSelect">&nbsp;p&nbsp;  strong&nbsp;</span> selects all <span class="tagSelect">&nbsp;strong&nbsp;</span> elements that are inside of any <span class="tagSelect">&nbsp;p&nbsp;</span>',
  },
  {
    task: 'Select the tape on the single',
    gameLayer:
    `<code>&lt;div class="table"&gt;</code>
<code data-tape='0'>  &lt;tape&gt;&lt;/tape&gt;</code>
<code data-vinyl='1'>  &lt;vinyl id="single"&gt;</code>
<code data-tape='1'>    &lt;tape&gt;&lt;/tape&gt;</code>
<code data-vinyl='1'>  &lt;/vinyl&gt;</code>
<code data-vinyl='2'>  &lt;vinyl&gt;</code><code data-vinyl='2'>&lt;/vinyl&gt;</code>
<code>&lt;/div&gt;</code>`,
    level: 'Level 6 of 11',
    name: 'Lynyrd Skynyrd - Simple man',
    selector: 'Combine the Descendant & ID Selectors',
    selectorDescription: 'You can combine any selector with the descendent selector.',
    levelsDescription: '“Simple Man” was written by band members Ronnie Van Zant and Gary Rossington. Van Zant’s grandmother and Rossington’s mother passed away around the same time, so the two got together at Van Zant’s apartment to share memories of them. As they talked, the stories they passed back and forth suddenly began to form into a song.',
    examples: '<span class="tagSelect">&nbsp;#cool span&nbsp;</span> selects all <span class="tagSelect">&nbsp;span&nbsp;</span> elements that are inside of elements with <span class="tagSelect">&nbsp;id="cool"&nbsp;</span>',
  },
  {
    task: 'Select the small tape on the vinyl record',
    gameLayer:
  `<code>&lt;div class="table"&gt;</code>
  <code data-vinyl='0'>&lt;vinyl&gt;</code>
  <code data-tape='0'>  &lt;tape class="big"&gt;&lt;/tape&gt;</code>
  <code data-vinyl='0'>&lt;/vinyl&gt;</code>
  <code data-vinyl='1'>&lt;vinyl&gt;</code>
  <code data-tape='1'>  &lt;tape class="small"&gt;&lt;/tape&gt;</code>
  <code data-vinyl='1'>&lt;/vinyl&gt;</code>
  <code data-tape='2'>&lt;tape class="small"&gt;&lt;/tape&gt;</code>
<code>&lt;/div&gt;</code>`,
    level: 'Level 7 of 11',
    name: 'Shocking Blue - Long and Lonesome Road',
    selector: 'Combine the Class Selector',
    selectorDescription: 'You can combine the class selector with other selectors, like the type selector.',
    levelsDescription: 'Shocking Blue was a Dutch rock band formed in The Hague in 1967. They were part of the Nederbeat movement in the Netherlands. The band had a string of hit songs during the counterculture movement of the 1960s and early 1970s.',
    examples: '<span class="tagSelect">&nbsp;ul.red&nbsp;</span> selects all <span class="tagSelect">&nbsp;ul&nbsp;</span> elements that have <span class="tagSelect">&nbsp;class="red"&nbsp;</span>',
  },
  {
    task: 'Select all vinyl records',
    gameLayer:
  `<code>&lt;div class="table"&gt;</code>
  <code data-vinyl='0'>&lt;vinyl&gt;</code><code data-vinyl='0'>&lt;/vinyl&gt;</code>
  <code data-vinyl='1'>&lt;vinyl&gt;</code><code data-vinyl='1'>&lt;/vinyl&gt;</code>
  <code data-vinyl='2'>&lt;vinyl&gt;</code><code data-vinyl='2'>&lt;/vinyl&gt;</code>
<code>&lt;/div&gt;</code>`,
    level: 'Level 8 of 11',
    name: 'The Mamas & the Papas - Make Your Own Kind of Music',
    selector: 'The Universal Selector',
    selectorDescription: 'You can select everything!',
    levelsDescription: '"Make Your Own Kind of Music" is a pop song written by Barry Mann and Cynthia Weil, which became a top 40 hit for Cass Elliot in 1969.',
    examples: '<span class="tagSelect">&nbsp;&lt;p&gt; *&nbsp;</span> selects any element inside all <span class="tagSelect">&nbsp;&lt;p&gt;&nbsp;</span> elements.',
  },
  {
    task: 'Select all on vinyl records',
    gameLayer:
  `<code>&lt;div class="table"&gt;</code>
<code data-vinyl='0'>  &lt;vinyl&gt;</code>
<code data-tape='0'>    &lt;vhs&gt;&lt;/vhs&gt;</code>
<code data-vinyl='0'>  &lt;/vinyl&gt;</code>
<code data-tape='1'>  &lt;tape&gt;&lt;/tape&gt;</code>
<code data-vinyl='2'>  &lt;vinyl&gt;</code>
<code data-tape='2'>    &lt;tape&gt;&lt;/tape&gt;</code>
<code data-vinyl='2'>  &lt;/vinyl&gt;</code>
<code>&lt;/div&gt;</code>`,
    level: 'Level 9 of 11',
    name: 'Jefferson Airplane - White Rabbit',
    selector: 'Combine the Universal Selector',
    selectorDescription: 'This selects all elements inside of <span class="tagSelect">&nbsp;A&nbsp;</span>.',
    levelsDescription: '"White Rabbit" is one of Grace Slick\'s earliest songs, written during December 1965 or January 1966. It uses imagery found in the fantasy works of Lewis Carroll—1865\'s Alice\'s Adventures in Wonderland. Slick said the composition was supposed to be a slap to parents who read their children such novels and then wondered why their children later used drugs.',
    examples: '<span class="tagSelect">&nbsp;&lt;p&gt; *&nbsp;</span> selects any element inside all <span class="tagSelect">&nbsp;&lt;p&gt;&nbsp;</span> elements.',
  },
  {
    task: 'Select the first vinyl record',
    gameLayer:
    `<code>&lt;div class="table"&gt;</code>
<code data-vinyl='0'>  &lt;vinyl&gt;</code><code data-vinyl='0'>&lt;/vinyl&gt;</code>
<code data-vinyl='1'>  &lt;vinyl&gt;</code><code data-vinyl='1'>&lt;/vinyl&gt;</code>
<code data-vinyl='2'>  &lt;vinyl&gt;</code><code data-vinyl='2'>&lt;/vinyl&gt;</code>
<code>&lt;/div&gt;</code>`,
    level: 'Level 10 of 11',
    name: 'The Rolling Stones - Paint It, Black',
    selector: 'First of Type Selector',
    selectorDescription: 'Selects the first element of that type.',
    levelsDescription: '"Paint It Black" is a song recorded in 1966 by the English rock band the Rolling Stones. A product of the songwriting partnership of Mick Jagger and Keith Richards, it is a raga rock song with Indian, Middle Eastern and Eastern European influences and lyrics about grief and loss.',
    examples: '<span class="tagSelect">&nbsp;span:first-of-type&nbsp;</span> selects the first <span class="tagSelect">&nbsp;span&nbsp;</span> in any element',
  },
  {
    task: 'Select the empty vinyl record',
    gameLayer:
`<code>&lt;div class="table"&gt;</code>
<code data-vinyl='0'>  &lt;vinyl&gt;</code>
<code data-tape='0'>    &lt;tape&gt;&lt;/tape&gt;</code>
<code data-vinyl='0'>  &lt;/vinyl&gt;</code>
<code data-vinyl='1'>  &lt;vinyl&gt;</code><code data-vinyl='1'>&lt;/vinyl&gt;</code>
<code data-vinyl='2'>  &lt;vinyl&gt;</code>
  <code data-tape='2'>  &lt;vhs&gt;&lt;/vhs&gt;</code>
<code data-vinyl='2'>  &lt;/vinyl&gt;</code>
<code>&lt;/div&gt;</code>`,
    level: 'Level 11 of 11',
    name: 'Black Sabbath - War Pigs',
    examples: '<span class="tagSelect">&nbsp;div:empty&nbsp;</span> selects all empty <span class="tagSelect">&nbsp;div&nbsp;</span> elements',
    selector: 'Empty Selector',
    selectorDescription: 'Selects elements that don\'t have any other elements inside of them.',
    levelsDescription: 'The original title of "War Pigs" was "Walpurgis", dealing with the witches\' sabbath. "Walpurgis is sort of like Christmas for Satanists. And to me, war was the big Satan", said bassist and lyricist Geezer Butler. "It wasn\'t about politics or government or anything. It was Evil itself. So I was saying \'generals gathered in the masses / just like witches at black masses\' to make an analogy. But when we brought it to the record company, they thought \'Walpurgis\' sounded too Satanic. And that\'s when we turned it into \'War Pigs\'.',
  },
];

export const levelsVinylArray: LevelsVinyl[] = [
  {
    vinylQty: 1,
    vinylStyles: ['floyd.vinyl--active.selected'],
    tooltip: ['<vinyl></vinyl>'],
    vinyltape: [null],
    tooltiptape: [null],
    selectors: ['vinyl'],
    modalVinyl: 'floyd',
  },
  {
    vinylQty: 2,
    vinylStyles: ['floyd', 'brother.vinyl--active.selected'],
    tooltip: ['<vinyl></vinyl>', '<vinyl id="single"></vinyl>'],
    vinyltape: [null, null],
    tooltiptape: [null, null],
    selectors: ['#single', 'vinyl:last-of-type', 'vinyl:nth-of-type(2)'],
    modalVinyl: 'brother',
  },
  {
    vinylQty: 2,
    vinylStyles: ['floyd', 'zeppelin.vinyl--active.selected'],
    tooltip: ['<vinyl></vinyl>', '<vinyl class="colored"></vinyl>'],
    vinyltape: [null, null],
    tooltiptape: [null, null],
    selectors: ['.colored', 'vinyl:last-of-type', 'vinyl:nth-of-type(2)'],
    modalVinyl: 'zeppelin',
  },
  {
    vinylQty: 3,
    vinylStyles: ['journey.vinyl--active.selected', 'empty', 'empty.vinyl--active.selected'],
    tooltip: ['<vinyl></vinyl>', null, null],
    vinyltape: [null, 'vhs', 'tape1'],
    tooltiptape: [null, '<vhs></vhs>', '<tape></tape>'],
    selectors: ['vinyl, tape', 'vinyl,tape'],
    modalVinyl: 'journey',
  },
  {
    vinylQty: 3,
    vinylStyles: ['journey', 'rainbow.vinyl--active.selected', 'empty'],
    tooltip: ['<vinyl></vinyl>', '<vinyl><tape></tape></vinyl>', null],
    vinyltape: [null, 'tape1', 'tape2'],
    tooltiptape: [null, '<tape></tape>', '<tape></tape>'],
    selectors: ['vinyl tape', 'vinyl>tape'],
    modalVinyl: 'rainbow',
  },
  {
    vinylQty: 3,
    vinylStyles: ['empty', 'skynyrd.vinyl--active.selected', 'rainbow'],
    tooltip: [null, '<vinyl id="single"><tape></tape></vinyl>', '<vinyl></vinyl>'],
    vinyltape: ['tape2', 'tape3', null],
    tooltiptape: ['<tape></tape>', '<tape></tape>', ''],
    selectors: ['#single tape', '#single>tape', 'vinyl tape', 'vinyl>tape'],
    modalVinyl: 'skynyrd',
  },
  {
    vinylQty: 3,
    vinylStyles: ['rainbow', 'shocking.vinyl--active.selected', 'empty'],
    tooltip: ['<vinyl><tape class="big"></tape></vinyl>', '<vinyl><tape class="small></tape></vinyl>', null],
    vinyltape: ['tape5', 'tape1', 'tape3'],
    tooltiptape: ['<tape class="big"></tape>', '<tape class="small"></tape>', '<tape class="small"></tape>'],
    selectors: ['vinyl.small', 'vinyl .small', 'vinyl>.small'],
    modalVinyl: 'shocking',
  },
  {
    vinylQty: 3,
    vinylStyles: ['floyd.vinyl--active.selected', 'mamas.vinyl--active.selected', 'zeppelin.vinyl--active.selected'],
    tooltip: ['<vinyl></vinyl>', '<vinyl></vinyl>', '<vinyl></vinyl>'],
    vinyltape: [null, null, null],
    tooltiptape: [null, null, null],
    selectors: ['*', 'vinyl', 'vinyl,vinyl,vinyl', 'vinyl, vinyl, vinyl'],
    modalVinyl: 'mamas',
  },
  {
    vinylQty: 3,
    vinylStyles: ['jefferson.vinyl--active.selected', 'empty', 'stones.vinyl--active.selected'],
    tooltip: ['<vinyl><vhs></vhs></vinyl>', null, '<vinyl><tape></tape></vinyl>'],
    vinyltape: ['vhs', 'tape2', 'tape3'],
    tooltiptape: ['<vhs></vhs>', '<tape></tape>', '<tape></tape>'],
    selectors: ['vinyl *', 'vinyl*', 'vinyl vhs, vinyl tape'],
    modalVinyl: 'jefferson',
  },
  {
    vinylQty: 3,
    vinylStyles: ['stones.vinyl--active.selected', 'rainbow', 'journey'],
    tooltip: ['<vinyl></vinyl>', '<vinyl></vinyl>', '<vinyl></vinyl>'],
    vinyltape: [null, null, null],
    tooltiptape: [null, null, null],
    selectors: ['vinyl:first-of-type', 'vinyl:nth-of-type(1)'],
    modalVinyl: 'stones',
  },
  {
    vinylQty: 3,
    vinylStyles: ['floyd', 'sabbath.vinyl--active.selected', 'shocking'],
    tooltip: ['<vinyl><tape></tape></vinyl>', '<vinyl></vinyl>', '<vinyl><vhs></vhs></vinyl>'],
    vinyltape: ['tape4', null, 'vhs'],
    tooltiptape: ['<tape></tape>', null, '<vhs></vhs>'],
    selectors: ['vinyl:empty'],
    modalVinyl: 'sabbath',
  },
];