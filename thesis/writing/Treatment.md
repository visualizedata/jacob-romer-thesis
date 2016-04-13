# Treatment

## Advertising
The expansion of advertising in the digital domain is the principal reason for the development of tracking technologies.
The internet is the first medium to enable advertisers to evaluate the performance of their product. The old advertiser adage held that half the money spent on advertising is wasted, but nobody knows which half. This spoke to the fact that only proxy measures such as newspaper circulation, coupon programs or TV ratings could be used to approximate the size and demographic composition of the audience an advertisement was expected to reach. The internet, however, is a duplex channel by nature, and in principle allows advertisers to buy inventory tailored to their goals.

### The Advertising Market
The amount of spending on advertising as a share of Gross Domestic Product (GDP) in the United States has remained flat for almost a century, varying between 1 and 2 percent of GDP at an average of 1.29%.
The overall growth of ad spending has tracked GDP growth, with the U.S. market reaching $174 billion in 2015. Global advertising spending is at around half a trillion dollars, with 2014 estimates ranging from $452 billion (McKinsey Global Media Report) to $524 billion (Strategy Analytics Advertising Market Forecast).

### Digital Advertising
The share of digital advertising has risen to capture about 30% of the overall ad market (Strategy Analytics). Because of the underlying linear growth in total ad spending, this has come at the expense of other media, with print (newspaper and magazine), radio and television advertising losing market share.
Within the digital market, search-based advertising is the incumbent, accounting for 45% of spending, with Google firmly at the helm. The highest growth rates, however, are found in new digital realms, with social media advertising growing at 30%, video at 29%, and mobile at 20% year over year.

### Targeting
In addition to measuring audience size, advertisers put a high value on information about who it is they are advertising to. The valuation of a given advertising slot is based on, *inter alia*, the likelihood that it will lead to the intended result, which is commonly either brand awareness or a recipient following a call to action. This likelihood is increased when the ad can be targeted more precisely, e.g. a car advertisement will have a higher impact on people interested in cars, and those who may be in the market for a new one. This incentive gives rise to the principle that the price charged for displaying an ad (Cost per Impression, or CPI) is closely related to the amount of information which can be ascertained about the prospective recipient of that ad. This information can include search behaviour, location, interests, communications, and demographic information. It is the interplay of this supply of information and the demand for precise targeting that produces economic incentives for the increasing collection of user data.

### Online Advertising Fraud
Another factor that leads to increasing sophistication of tracking technologies is the need to combat online advertising fraud.
Since the beginning of online advertising there has been abuse in the market, and the technical countermeasures that were developed in response have relied on gathering information on a user's technical setup, from browser to operating system.

## Tracking
- **Definition**
  - **Whence and whither: Analytics, Advertising, or Surveillance**: Tracking as it will be described is a _technique_ which can be used for various ends, such as gaining insight into user behaviour, using that insight to target advertising, or using that insight for mining data about user behaviour at a later date. This ambiguity of purpose should be kept in mind while discussing the techniques in the next section.
  - **Two Problems: Identifying and Profiling**: Tracking needs to do two things: First, it reveals some data, static or behavioural. Second, to make the collected data useful to the tracking entity, it needs to tie that data bundle to the identity of a given user. The ends shape the means that will be discussed next.
  	- **Identifying**: The core problem is that HTTP is a stateless protocol. That means that by default, if a user clicks visits a website and clicks on five links, the server couldn't tell if it was five users requesting five URLs or one user making her way through the site.
      - **Fingerprinting, Cookies**: The challenge of the tracker is to associate some identifiable bits of data with every single request made to her servers. All the techniques discussed are elaborate and sometimes sneaky ways to deposit information into the user's computer, persist it in place, and extract it again at a later date.
      - **Q: Cross-Device / Cross-Channels / On-Offline**: To make things more difficult, users have multiple devices they use to visit the same site / use the same service. A growing sector of ad tech concerns itself with linking data bundles resulting from browsing activity across devices. Another question is how to connect data on a user's online activity with data on a user's offline activity.
			- **Profiling**: Profiling means aggregating raw data on browsing activity into intelligible concepts of user _behaviour_. 
	- **Evolution**: Tracking / ad tech has grown into a behemoth industry, piping massive flows of programs and content into outlets auctioned of in split-seconds. This will explore the reasons behind the surge and why it's come out this way.
    - **VC, Aggregation Theory, and planetary-scale user farming**: TBD. Argue that winner-take-all economics propelled by limitless capital incentivize companies to forego other business models in favor of ad-supported free-to-use services. Intransparency and an ad tech arms race are the best strategy for incumbents to build a moat around their business, further driving investment.
	- **Forms of tracking**: Getting concrete (with no claims of completeness), this will dissect commonly used tracking techniques found in the wild. They are the source of the data used for treatment part 2.
		- 3rd party requests
		- Cookies
		- LSO
		- Canvas tagging
		- ETags
		- Pugins / Fonts
		- History forging
	- Cross-Device
    - Email newsletters

## Privacy
- **Shift: Identity and Privacy needs in digital**: After discussing the how and why of tracking, this is, ostensibly, the reason for worrying about it in the first place. But privacy is a mushy concept. This section deals with some conceptions of it.
  - **From Anonymity to Misrepresentation?**: TBD. Wrestling with the argument that 20th-century conceptions of privacy as concealment are outdated. Can ways be imagined to replace blanket concealment with tools (technical, political, social) to reliably misrepresent a user's identity on command?
- **The need for transparency**: Ideally, users should be able to exert some measure of control about their data. For this to happen, users would need a technique to demonstrate their intent to a servie provider and be able to verify that this intent is respected. This, however, implies legibility. When a user visits a site, her intent is to browse that site, not to communicate that intent to 65 external parties. By analogy, do consumers also need to fully understand and explicitly acknowledge the supply chain that makes a pencil they just bought? Is there a meaningful distinction between first-party services and third-party services?

## Regulation

- **Deficiencies**: Short of a comprehensive survey, common problems can be identified: Regulatory authorities scrambling to catch up to rapidly evolving realities, hampered by regulatory capture. These deficiencies may be overcome by regulation that relies more on principles and tackles the problem on a higher lever, rather than mandating individual programs (See EU cookie law snafu)
- **Proposals**
  - **Limiting collection**: Imposing legal restrictions on _what data_ can be collected in _what ways_.
  - **Limiting storage**: Imposing limits on what data can be stored for how long.

