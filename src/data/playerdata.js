const katHobbies = ["shoulda been rookie of the year", "young and fast", "worth the diggs trade?"];
const dangeloHobbies = ["succeeding", "playing for hometown team", "being a white wr"];
const malikHobbies = ["stopper", "mainstay", "defense"];
const joshHobbies = ["from florida", "big and strong"]
const anthonyHobbies = []

const katImg = ["https://cdn.vox-cdn.com/thumbor/qB6xk6NP8LjAjh0QubbuvARsYPI=/0x0:3923x3138/1200x800/filters:focal(1546x1202:2172x1828)/cdn.vox-cdn.com/uploads/chorus_image/image/58888223/usa_today_10670554.0.jpg"]
const dangeloImg = ['https://minnesota.cbslocal.com/wp-content/uploads/sites/15909630/2021/01/Screen-Shot-2021-01-10-at-9.55.25-PM.png?w=1177']
const malikImg = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdNWFnDC1pdHkhnhP_jK0sGUeESwmUMT25g&usqp=CAU']
const joshImg = ['https://www.grandforksherald.com/incoming/article1031049.ece/alternates/BASE_LANDSCAPE/4656394%2BUSATSI_11751622.jpg']
const anthonyImg = ['https://www.nbcsports.com/sites/nbcsports.com/files/2021/02/03/nbcs_roto_anthonyedwardsyahoo_2122.jpg']

const katApiId = 447
const dangeloApiId = 405
const malikApiId = 38
const joshApiId = 356
const anthonyApiId = 3547238


export const playerData = [
    { id: 1, firstName: "Karl-Anthony", lastName: "Towns", hobbies: katHobbies, jerseyNumber: 32, image: katImg, apiKey: katApiId },
    { id: 4, firstName: "D'Angelo", lastName: "Rusell", hobbies: dangeloHobbies, jerseyNumber: 0, image: dangeloImg, apiKey: dangeloApiId },
    { id: 3, firstName: "Malik", lastName: "Beasley", hobbies: malikHobbies, jerseyNumber: 5, image: malikImg, apiKey: malikApiId },
    { id: 5, firstName: "Josh", lastName: "Okogie", hobbies: joshHobbies, jerseyNumber: 20, image: joshImg, apiKey: joshApiId },
    { id: 2, firstName: "Anthony", lastName: "Edwards", hobbies: anthonyHobbies, jerseyNumber: 1, image: anthonyImg, apiKey: anthonyApiId },
]

