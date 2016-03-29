# Outline 

## Introduction

## Tracking
- **Definition**
  - **Whence and whither: Analytics, Advertising, or Surveillance**: Tracking as it will be described is a _technique_ which can be used for various ends, such as gaining insight into user behaviour, using that insight to target advertising, or using that insight for surveillance. This ambiguity of purpose should be kept in mind while discussing the techniques in the next section.
  - **Two Problems: Identifying and Profiling**: Tracking needs to do two things: First, it reveals some data, static or behavioural. Second, to make the collected data useful to the tracking entity, it needs to tie that data bundle to the identity of a given user. The ends shape the means that will be discussed next.
  	- **Identifying**r: The core problem is that HTTP is a stateless protocol. That means that by default, if a user clicks visits a website and clicks on five links, the server couldn't tell if it was five users requesting five URLs or one user making her way through the site. From this unauspicious starting point, tracking has to build out an elaborate infrastructure for tying streams of requests into identifiable bundles.
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

## Advertising
- **Shift: Carpet bombing to microtargeting**: For advertising, the ability to microtarget, and, importantly, micro-measure the impact of ad campaigns/spending sounded like a promised land compared to the fire-and-forget habits of the newspaper / TV age. This is the demand side to tracking's supply side, and the incentives of both sides of the equation explain why it has become so prevalent. 
- **Q: Click fraud, ad blocking and the arms race**: The brave new world of online ads was soon distrubed by automated click fraud, and later by ad blocking. Since a sizeable proportion of the online economy was by that time inseparable from tracking-based advertising funding it, a technical (and political) escalation of tracking technology ensued. This, in turn, causes more and more invasions of ...
## Privacy
- **Shift: Identity and Privacy needs in digital**: After discussing the how and why of tracking, this is, ostensibly, the reason for worrying about it in the first place. But privacy is a mushy concept. This section deals with some conceptions of it.
  - **From Anonymity to Misrepresentation?**: TBD. Wrestling with the argument that 20th-century conceptions of privacy as concealment are outdated. Can ways be imagined to replace blanket concealment with tools (technical, political, social) to reliably misrepresent a user's identity on command?
- **The need for transparency**: Ideally, users should be able to exert some measure of control about their data. For this to happen, users would need a technique to demonstrate their intent to a servie provider and be able to verify that this intent is respected. This, however, implies legibility. When a user visits a site, her intent is to browse that site, not to communicate that intent to 65 external parties. By analogy, do consumers also need to fully understand and explicitly acknowledge the supply chain that makes a pencil they just bought? Is there a meaningful distinction between first-party services and third-party services?
## Regulation
- **Deficiencies**: Short of a comprehensive survey, common problems can be identified: Regulatory authorities scrambling to catch up to rapidly evolving realities, hampered by regulatory capture. These deficiencies may be overcome by regulation that relies more on principles and tackles the problem on a higher lever, rather than mandating individual programs (See EU cookie law snafu)
- **Proposals*
  - **Limiting collection**: Imposing legal restrictions on _what data_ can be collected in _what ways_.
  - **Limiting storage**: Imposing limits on what data can be stored for how long. 
