export type Source = {
    id:string|null,
    name:string
}
export type News = {
    source:Source,
    author:string,
    title:string,
    description:string,
    url:string,
    urlToImage:null|string,
    publishedAt:string,
    content:string
}
export type NewsAPI ={
    status:string,
    totalResults:number,
    articles:News[]
}
export const demoList:NewsAPI[] = [
    {

        "status": "ok",
        "totalResults": 8138,
        
        "articles": [
            
            {
                
                "source": {
                    "id": null,
                    "name": "Livemint"
                },
                "author": "Livemint",
                "title": "Want to work at Tesla? Elon Musk reveals hiring plans for IT professionals",
                "description": "Musk's latest plan to promote Tesla's technology comes amid the hiccups faced in the company's path to achieve full self-driving technology.",
                "url": "https://www.livemint.com/companies/news/want-to-work-at-tesla-elon-musk-reveals-hiring-plans-for-it-professionals-11624343959908.html",
                "urlToImage": "https://images.livemint.com/img/2021/06/22/600x338/AFP_9BK7UR_1623664054532_1624345798689.jpg",
                "publishedAt": "2021-06-22T07:15:14Z",
                "content": "There is some good news for techies all over the world - Tesla is hiring. Tesla chief Elon Musk is considering holding an AI Day in about a month, where the Silicon Valley billionaire will showcase t… [+1521 chars]"
            },
            
            {
                
                "source": {
                    "id": null,
                    "name": "Business Today"
                },
                "author": "BusinessToday.In",
                "title": "Tesla launches 27 'supercharger stations' along China's Silk Road",
                "description": "Tesla tweeted a video about the route with English subtitles and said it has opened the longest supercharger route from east to west China.",
                "url": "https://www.businesstoday.in/current/economy-politics/tesla-launches-27-supercharger-stations-along-chinas-silk-road/story/442186.html",
                "urlToImage": "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/teslacharging_505_220621123559.jpg",
                "publishedAt": "2021-06-22T07:05:58Z",
                "content": "Electric car maker Tesla has set up 27 supercharging stations on the 5,000-km long Silk Road, running from west to east China, which the company claims to be the longest supercharger route. \r\nSilk Ro… [+1237 chars]"
            },
            
            {
                
                "source": {
                    "id": null,
                    "name": "Tech Times"
                },
                "author": "Teejay Boris",
                "title": "Toyota's Robot Takes Selfies While Completing Complex Cleaning Tasks",
                "description": "Toyota's Robot takes selfies and completes complex cleaning tasks at the same time. Commonly, cyborgs are confused with shiny things, but that's not the case with this one.",
                "url": "https://www.techtimes.com/articles/261778/20210622/toyota-s-robot-complex-cleaning-tasks-taking-selfies-shiny-reflective-objects.htm",
                "urlToImage": "https://1734811051.rsc.cdn77.org/data/images/full/387626/toyota-s-robot-takes-selfies-while-complex-cleaning-tasks-notwithstanding-shiny-things.jpg",
                "publishedAt": "2021-06-22T06:51:18Z",
                "content": "Toyota unveiled a robot that takes selfies while it completes cleaning tasks that most counterparts find complex. It coincidentally celebrated National Selfie Day, thus showcasing its new learned ski… [+2592 chars]"
            },
            
            {
                
                "source": {
                    "id": null,
                    "name": "Indiantelevision.com"
                },
                "author": "Https://plus.google.com/107324234873078450867",
                "title": "Amazon, Apple emerge as most valuable global brands 2021: Kantar",
                "description": "New Delhi: Multinational giant Amazon consolidated its position as the world’s most valuable brand, growing 64 per cent to $ 684 billion, Kantar said in its latest BrandZTM Most Valuable Global Brands 2021 ranking released on Monday. Amazon’s brand value grew…",
                "url": "https://www.indiantelevision.com/mam/marketing/mam/amazon-apple-emerge-as-most-valuable-global-brands-2021-kantar-210622",
                "urlToImage": "https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2021/06/22/kantar-800.jpg?itok=SIG7qJWH",
                "publishedAt": "2021-06-22T06:41:03Z",
                "content": "New Delhi: Multinational giant Amazon consolidated its position as the worlds most valuable brand, growing 64 per cent to $ 684 billion, Kantar said in its latest BrandZTM Most Valuable Global Brands… [+4089 chars]"
            },
            
            {
                
                "source": {
                    "id": null,
                    "name": "Whitecoatinvestor.com"
                },
                "author": "The White Coat Investor",
                "title": "Your Questions About Whole Life Insurance Answered",
                "description": "Whole life insurance is pitched to almost every high-income professional. Arm yourself with the facts so you don't fall prey to a decision you'll regret.\nThe post Your Questions About Whole Life Insurance Answered appeared first on The White Coat Investor - I…",
                "url": "https://www.whitecoatinvestor.com/what-you-need-to-know-about-whole-life-insurance/",
                "urlToImage": "https://www.whitecoatinvestor.com/wp-content/uploads/2017/04/Your-Questions-About-Whole-Life-Insurance-Answered-FB.png",
                "publishedAt": "2021-06-22T06:30:19Z",
                "content": "Whole life insurance is frequently inappropriately sold to doctors and high-income professions. These are the top questions about whole life insurance I get by email, by blog post comment, on the WCI… [+15886 chars]"
            },
            
            {
                
                "source": {
                    "id": null,
                    "name": "Business Standard"
                },
                "author": "Reuters",
                "title": "Explainer: What's happening with Tesla's $7 billion German 'gigafactory'?",
                "description": "Next Thursday, July 1, was supposed to be a day of celebration for Tesla: the opening of its self-styled \"gigafactory\" in the tranquil German municipality of Gruenheide, just outside Berlin",
                "url": "https://www.business-standard.com/article/international/explainer-what-s-happening-with-tesla-s-7-billion-german-gigafactory-121062200371_1.html",
                "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2020-09/24/full/1600917703-7084.jpg",
                "publishedAt": "2021-06-22T06:28:00Z",
                "content": "By Nadine Schimroszik and Christoph Steitz\r\nGRUENHEIDE, Germany (Reuters) - Next Thursday, July 1, was supposed to be a day of celebration for Tesla: the opening of its self-styled \"gigafactory\" in t… [+5629 chars]"
            },
            
            {
                
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "Bloomberg",
                "title": "Bitcoin’s drop closer to $30,000 stirs fears of a deeper selloff",
                "description": "A conclusive break below $30,000 would mean a “massive hit” to sentiment and possibly “heavy selling activity” across the cryptocurrency market, Pankaj Balani, chief executive officer of digital asset derivatives exchange Delta Exchange.",
                "url": "https://economictimes.indiatimes.com/markets/cryptocurrency/bitcoins-drop-closer-to-30000-stirs-fears-of-a-deeper-selloff/articleshow/83739512.cms",
                "urlToImage": "https://img.etimg.com/thumb/msid-83739503,width-1070,height-580,imgsize-201885,overlay-etmarkets/photo.jpg",
                "publishedAt": "2021-06-22T06:24:54Z",
                "content": "Bitcoins slide toward $30,000 amid Chinas continued cryptocurrency crackdown is stoking fears of a deeper selloff.\r\nBitcoin fell as much as 4.3 per cent and was trading at about $32,240 as of 9:08 a.… [+1621 chars]"
            },
            
            {
                
                "source": {
                    "id": null,
                    "name": "Motley Fool Australia"
                },
                "author": "Sebastian Bowen",
                "title": "Meme stocks most popular US shares for ASX investors",
                "description": "AMC and GameStop were the pick of US shares among ASX investors last week. Here are the details\nThe post Meme stocks most popular US shares for ASX investors appeared first on The Motley Fool Australia.",
                "url": "https://www.fool.com.au/2021/06/22/meme-stocks-most-popular-us-shares-for-asx-investors/",
                "urlToImage": "https://www.fool.com.au/wp-content/uploads/2021/06/US-economy-and-sharemarket.jpg",
                "publishedAt": "2021-06-22T06:22:29Z",
                "content": "Most weeks, Commonwealth Bank of Australia(ASX: CBA)s CommSec brokerage platform tells us the most popular international shares that its Australian customers were buying and selling the previous week… [+4562 chars]"
            },
            
            {
                
                "source": {
                    "id": "the-hindu",
                    "name": "The Hindu"
                },
                "author": "Reuters",
                "title": "Tesla to hold AI Day in \"about a month\" for hiring - Musk",
                "description": "His latest plan to promote Tesla's technology comes amid the hiccups faced in the company's path to achieve full self-driving technology.",
                "url": "https://www.thehindu.com/sci-tech/technology/tesla-to-hold-ai-day-in-about-a-month-for-hiring-musk/article34898884.ece",
                "urlToImage": "https://www.thehindu.com/sci-tech/technology/gtlbge/article34899042.ece/ALTERNATES/LANDSCAPE_615/muskjpg",
                "publishedAt": "2021-06-22T06:04:06Z",
                "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nTesla Inc chief Elon Musk is considering holding an AI Day in about a month,… [+1274 chars]"
            },
            
            {
                
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": "Edited by Gadgets 360 Newsdesk",
                "title": "After Elon Musk, Dogecoin Has Another Backer In Ethereum Cofounder Charles Hoskinson",
                "description": "The Ethereum co-founder said that Dogecoin can see the creation of real world uses, which will help create a value floor and prevent the cryptocurrency from collapsing.",
                "url": "https://gadgets.ndtv.com/cryptocurrency/news/dogecoin-potential-crypto-ethereum-cofounder-charles-hoskinson-2469441",
                "urlToImage": "https://c.ndtvimg.com/2021-04/sa9uoa88_dogecoin-reuters_625x300_21_April_21.jpg",
                "publishedAt": "2021-06-22T05:27:09Z",
                "content": "Charles Hoskinson, the co-founder of Ethereum, has said that Dogecoin is a reasonable target for someone to fix it up and make it an interesting cryptocurrency. This comes after billionaire Elon Musk… [+2425 chars]"
            },
            
            {
                
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": "Reuters",
                "title": "Tesla to Hold AI Day in ‘About a Month’ for Hiring, Elon Musk Tweets",
                "description": "Tesla chief Elon Musk is considering holding an AI Day in about a month, where the Silicon Valley billionaire will showcase the progress in AI software and hardware with an aim to recruit.",
                "url": "https://gadgets.ndtv.com/transportation/news/elon-musk-tesla-tweet-twitter-ai-day-hiring-self-driving-car-autonomous-technology-2469440",
                "urlToImage": "https://c.ndtvimg.com/2019-12/m582er2k_tesla-model-3-_625x300_15_December_19.jpg",
                "publishedAt": "2021-06-22T05:26:53Z",
                "content": "Tesla chief Elon Musk is considering holding an AI Day in about a month, where the Silicon Valley billionaire will showcase the progress in AI software and hardware with an aim to recruit.\r\n\"Looking … [+1407 chars]"
            },
            
            {
                
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "Reuters",
                "title": "What's happening with Tesla's $7 billion German 'gigafactory'?",
                "description": "Tesla has already pushed back the expected opening of it's German 'gigafactory' to late 2021. Yet the environmental agency in Brandenburg, the state where the 5.8 billion euro ($6.9 billion) plant is being built, has still not given final approval.",
                "url": "https://economictimes.indiatimes.com/news/international/business/whats-happening-with-teslas-7-billion-german-gigafactory/articleshow/83738305.cms",
                "urlToImage": "https://img.etimg.com/thumb/msid-83738376,width-1070,height-580,imgsize-86070,overlay-economictimes/photo.jpg",
                "publishedAt": "2021-06-22T05:24:06Z",
                "content": "Next Thursday, July 1, was supposed to be a day of celebration for Tesla: the opening of its self-styled \"gigafactory\" in the tranquil German municipality of Gruenheide, just outside Berlin.\r\nBut tha… [+5512 chars]"
            },
            
            {
                
                "source": {
                    "id": null,
                    "name": "CNA"
                },
                "author": "CNA",
                "title": "Explainer: What's happening with Tesla's US$7 billion German 'gigafactory'?",
                "description": "Next Thursday, July 1, was supposed to be a day of celebration for Tesla: the opening of its self-styled \"gigafactory\" in the tranquil German municipality of Gruenheide, just outside Berlin.",
                "url": "https://www.channelnewsasia.com/news/business/explainer--what-s-happening-with-tesla-s-us-7-billion-german--gigafactory---15066372",
                "urlToImage": "https://cna-sg-res.cloudinary.com/image/upload/q_auto,f_auto/image/15066362/16x9/991/557/4734ce22bc5bc1b3b7644d59d8248fd4/Ba/file-photo--the-construction-site-of-the-future-tesla-gigafactory-in-gruenheide-2.jpg",
                "publishedAt": "2021-06-22T05:20:40Z",
                "content": "GRUENHEIDE, Germany: Next Thursday, July 1, was supposed to be a day of celebration for Tesla: the opening of its self-styled \"gigafactory\" in the tranquil German municipality of Gruenheide, just out… [+5484 chars]"
            },
            
            {
                
                "source": {
                    "id": null,
                    "name": "Luxuo.com"
                },
                "author": "Joseph Low",
                "title": "Cryptocurrencies Have Reached Exit Velocity",
                "description": "If central banks and governments wanted to finish off cryptocurrencies, that moment has now passed and each day that they continue to exist, is a challenge to the legitimacy of fiat-based institutions.\nThe post Cryptocurrencies Have Reached Exit Velocity appe…",
                "url": "https://www.luxuo.com/the-lux-list/finance/cryptocurrencies-have-reached-exit-velocity.html",
                "urlToImage": "https://luxuo-com-production.s3.ap-southeast-1.amazonaws.com/2021/06/executium-qZdK7jMuQ-o-unsplash-1.jpg",
                "publishedAt": "2021-06-22T05:14:35Z",
                "content": "If central banks and governments wanted to finish off cryptocurrencies, that moment has now passed and each day that they continue to exist, is a challenge to the legitimacy of fiat-based institution… [+8958 chars]"
            },
            
            {
                
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Nadine Schimroszik and Christoph Steitz",
                "title": "Explainer: What's happening with Tesla's $7 billion German 'gigafactory'?",
                "description": "Next Thursday, July 1, was supposed to be a day of celebration for Tesla: the opening of its self-styled \"gigafactory\" in the tranquil German municipality of...",
                "url": "https://finance.yahoo.com/news/explainer-whats-happening-teslas-7-051329816.html",
                "urlToImage": "https://s.yimg.com/uu/api/res/1.2/upneRSDGKtOBFU4EROriMA--~B/aD01Nzc7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/reuters-finance.com/1a4530c1613073281c42107724d861fc",
                "publishedAt": "2021-06-22T05:13:29Z",
                "content": "By Nadine Schimroszik and Christoph Steitz\r\nGRUENHEIDE, Germany (Reuters) - Next Thursday, July 1, was supposed to be a day of celebration for Tesla: the opening of its self-styled \"gigafactory\" in t… [+5460 chars]"
            },
            
            {
                
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": "Christoph Steitz,Nadine Schimroszik",
                "title": "Explainer: What's happening with Tesla's $7 billion German 'gigafactory'? - Reuters",
                "description": "Next Thursday, July 1, was supposed to be a day of celebration for Tesla: the opening of its self-styled \"gigafactory\" in the tranquil German municipality of Gruenheide, just outside Berlin.",
                "url": "https://www.reuters.com/business/whats-happening-with-teslas-7-billion-german-gigafactory-2021-06-22/",
                "urlToImage": "https://www.reuters.com/resizer/QiTb63v_pi-DXeQyPFMIGuMyCpU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BAQHHUN75FNS3HVHLV5WJRX4GM.jpg",
                "publishedAt": "2021-06-22T05:13:00Z",
                "content": "GRUENHEIDE, Germany, June 22 (Reuters) - Next Thursday, July 1, was supposed to be a day of celebration for Tesla: the opening of its self-styled gigafactory in the tranquil German municipality of Gr… [+5509 chars]"
            },
            
            {
                
                "source": {
                    "id": null,
                    "name": "MarketWatch"
                },
                "author": "Andrew Keshner",
                "title": "TaxWatch: How much income tax will Biden and Harris pay under their proposed hikes? These accountants say they’ve found an answer",
                "description": "Three accountants crunched the numbers using the president and vice president's tax returns.",
                "url": "https://www.marketwatch.com/story/how-much-income-tax-will-biden-and-harris-pay-under-their-proposed-hikes-these-accountants-say-theyve-found-an-answer-11624307321",
                "urlToImage": "https://images.mktw.net/im-357240/social",
                "publishedAt": "2021-06-22T04:30:00Z",
                "content": "President Joe Biden has been touting his proposed tax hikes on the rich by saying they need to start paying their fair share.If his proposals become law, the Commander-in-Chief will have to put his m… [+6424 chars]"
            },
            
            {
                
                "source": {
                    "id": null,
                    "name": "Mssqltips.com"
                },
                "author": "Rick Dobson",
                "title": "Migrate Key-Value Pairs from Python Dictionary to SQL Server via JSON",
                "description": "This article will demonstrate how to migrate via JSON, key-value pairs from a Python dictionary object to a SQL Server table.",
                "url": "https://www.mssqltips.com/sqlservertip/6898/migrate-key-value-pairs-from-python-dictionary-to-sql-server-via-json/",
                "urlToImage": "https://www.mssqltips.com/images_newsletter/6898_NewsletterImage.png",
                "publishedAt": "2021-06-22T04:06:06Z",
                "content": "By: Rick Dobson   |   Updated: 2021-06-22   |   Comments   |   Related: More &gt; T-SQL\r\nProblem\r\nThis tutorial will demonstrate how to migrate via JSON key-value pairs from a Python dictionary\r\nobje… [+26854 chars]"
            },
            
            {
                
                "source": {
                    "id": null,
                    "name": "Digiday"
                },
                "author": "Jessica Davies",
                "title": "‘People are looking for ways to work together asynchronously’: Tech providers rush to meet needs of hybrid workplaces",
                "description": "Tech businesses are falling over themselves to arm employers and workforces with what's needed in a hybrid working world. \nThe post ‘People are looking for ways to work together asynchronously’: Tech providers rush to meet needs of hybrid workplaces appeared …",
                "url": "https://digiday.com/marketing/people-are-looking-for-ways-to-work-together-asynchronously-tech-providers-rush-to-meet-needs-of-hybrid-workplaces/",
                "urlToImage": "https://i2.wp.com/digiday.com/wp-content/uploads/2021/02/robot_human-01-01.jpg?fit=2146%2C1250&zoom=2&quality=100&strip=all&ssl=1",
                "publishedAt": "2021-06-22T04:01:00Z",
                "content": "During the pandemic, companies have managed workflow and communications with the hottest technology, trial and error, and perhaps a few spools of scotch tape, experimenting with a host of new and new… [+5135 chars]"
            },
            
            {
                
                "source": {
                    "id": null,
                    "name": "China.org.cn"
                },
                "author": "张军棉",
                "title": "Chinese brands increase presence on global playing field",
                "description": "Chinese brands have increased their presence on the global playing field, according to a market-research report released on Monday.",
                "url": "http://www.china.org.cn/business/2021-06/22/content_77578999.htm",
                "urlToImage": null,
                "publishedAt": "2021-06-22T04:00:00Z",
                "content": "Tencent headquarters in Shenzhen, Guangdong province. [Photo/Xinhua]\r\nChinese brands have increased their presence on the global playing field, according to a market-research report released on Monda… [+1269 chars]"
            }
        ]
    
    }
]