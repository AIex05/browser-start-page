const defaultConfig =
{
	"username": "AlexZ",
	"theme": {
		"backgroundColor": "#121317",
		"windowColor": "#1e212b",
		"glowColor": "#6b5cb157",
		"white": "#e2e2e2",
		"gray": "#97989d",
		"black": "#16161e",
		"red": "#ec6183",
		"green": "#2ed8a2",
		"yellow": "#e8b195",
		"blue": "#2bc3de",
		"cyan": "#62e0e2",
		"magenta": "#e069aa",
		"violet": "#d1aff8",
		"orange": "#ff8800"
	},
	"wallpaper": {
		"url": "",
		"easing": "ease-in-out",
		"fadeIn": true,
		"blur": true
	},
	"terminal": {
		"fixedHeight": true,
		"windowGlow": true,
		"textGlow": false
	},
	"prompt": {
		"ctrlC": true,
		"placeholder": "command...",
		"placeholderColor": "gray",
		"userColor": "green",
		"atColor": "gray",
		"hostColor": "magenta",
		"promptColor": "magenta",
		"promptSymbol": "❯",
		"caretColor": "green",
		"selectionBg": "yellow",
		"selectionFg": "black"
	},
	"fetch": {
		"timeFormat": "HH:mm",
		"dateFormat": "DD/MM/YYYY",
		"titleColor": "yellow",
		"image": "icon.svg",
		"data": [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	"urlLaunch": {
		"target": "_self",
		"defaultColor": "white",
		"hoverColor": "violet"
	},
	"search": {
		"default": "https://google.com/search?q=",
		"target": "_self",
		"shortcutRegex": "([A-Za-z0-9]+) (.*)",
		"shortcuts": [
			{
				"alias": "g",
				"name": "Google Search",
				"url": "https://google.com/search?q={}"
			},
			{
				"alias": "y",
				"name": "YouTube Search",
				"url": "https://www.youtube.com/results?search_query={}"
			},
			{
				"alias": "youtube",
				"name": "YouTube Search",
				"url": "https://www.youtube.com/results?search_query={}"
			},
			{
				"alias": "b",
				"name": "Bilibili Search",
				"url": "https://search.bilibili.com/all?keyword={}"
			},
			{
				"alias": "gh",
				"name": "Github Search",
				"url": "https://github.com/search?q={}"
			},
			{
				"alias": "s",
				"name": "Stack Overflow Search",
				"url": "https://stackoverflow.com/search?q={}"
			},
			{
				"alias": "r",
				"name": "Subreddit Search",
				"url": "https://reddit.com/r/{}"
			},
			{
				"alias": "w",
				"name": "Wikipedia Search",
				"url": "https://en.wikipedia.org/wiki/{}"
			},
			{
				"alias": "wiki",
				"name": "Wikipedia Search",
				"url": "https://en.wikipedia.org/wiki/{}"
			}
		]
	},
	"sections": {
		"list": [
			{
				"title": "General",
				"color": "green",
				"align": "left",
				"links": [
					{
						"name": "Portfolio",
						"url": "http://alexzyt.com",
						"icon": "mdi:account"
					},
					{
						"name": "ChatGPT",
						"url": "http://chatgpt.alexzyt.com/",
						"icon": "simple-icons:openai"
					},
					{
						"name": "Starter Page",
						"url": "https://www.oracle.com/cloud/",
						"icon": "simple-icons:amazonaws"
					}
				]
			},
			{
				"title": "Dev",
				"color": "magenta",
				"align": "left",
				"links": [
					{
						"name": "GitHub",
						"url": "https://github.com/AIex05?tab=repositories",
						"icon": "mdi:github"
					},
					{
						"name": "AWS s3",
						"url": "https://s3.console.aws.amazon.com/s3/home?region=us-east-2#",
						"icon": "simple-icons:amazonaws"
					},
					{
						"name": "DigitalOcean",
						"url": "https://cloud.digitalocean.com/projects/01cc9d1d-b1ef-4d17-8e1b-0fa6d7e793bf/resources?i=9ec9fd",
						"icon": "simple-icons:digitalocean"
					},
					{
						"name": "GoDaddy",
						"url": "https://dashboard.godaddy.com/venture?ventureId=c08817a4-7ef7-4789-ba88-1cb49196b3fe",
						"icon": "simple-icons:godaddy"
					}
				]
			},
			{
				"title": "School",
				"color": "violet",
				"align": "left",
				"links": [
					{
						"name": "USC Portal",
						"url": "https://my.usc.edu/",
						"icon": "simple-icons:scopus"
					},
					{
						"name": "Blackboard",
						"url": "https://blackboard.usc.edu/webapps/login/",
						"icon": "mdi:human-male-board"
					},
					{
						"name": "Piazza",
						"url": "https://piazza.com/class/lllgy5k8hz932t/",
						"icon": "mdi:school-outline"
					},
					{
						"name": "Connect SC",
						"url": "https://usc-csm.symplicity.com/students/?signin_tab=0",
						"icon": "simple-icons:scopus"
					},
					{
						"name": "Gmail",
						"url": "https://mail.google.com/mail/u/1/#inbox",
						"icon": "simple-icons:gmail"
					}
				]
			},
			{
				"title": "Entertainment",
				"color": "cyan",
				"align": "left",
				"links": [
					{
						"name": "Youtube",
						"url": "https://youtube.com",
						"icon": "simple-icons:youtube"
					},
					{
						"name": "Bilibili",
						"url": "https://www.bilibili.com/",
						"icon": "simple-icons:bilibili"
					},
					{
						"name": "Reddit",
						"url": "https://www.reddit.com/",
						"icon": "mdi:reddit"
					}
				]
			},
			{
				"title": "Job",
				"color": "yellow",
				"align": "left",
				"links": [
					{
						"name": "Strata Scratch",
						"url": "https://platform.stratascratch.com/coding?code_type=1",
						"icon": "mdi:cable-data"
					},
					{
						"name": "Kaggle",
						"url": "https://www.kaggle.com/",
						"icon": "simple-icons:kaggle"
					},
					{
						"name": "Date Story Teller",
						"url": "https://datastoryteller.gumroad.com/p/examples-of-data-analytics-projects",
						"icon": "mdi:web"
					}
				]
			}
		]
	}
}

export default defaultConfig
