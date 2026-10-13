export const reviewedOn = '2026-10-11';
export const sources = {
  walkthrough: { label: 'PowerPyx · Gage’s full walkthrough', url: 'https://www.powerpyx.com/clive-barkers-hellraiser-revival-100-walkthrough/' },
  collectibles: { label: 'PowerPyx · Collectible locations', url: 'https://www.powerpyx.com/clive-barkers-hellraiser-revival-all-collectible-locations-guide/' },
  trophies: { label: 'PowerPyx · Trophy roadmap', url: 'https://www.powerpyx.com/clive-barkers-hellraiser-revival-trophy-guide-roadmap/' },
  steam: { label: 'Steam · Official game listing', url: 'https://store.steampowered.com/app/1551980/Clive_Barkers_Hellraiser_Revival/' },
  official: { label: 'Saber Interactive · Hellraiser: Revival', url: 'https://saber.games/hellraiserrevival/' },
  files: { label: 'Steam Support · Verify game files', url: 'https://help.steampowered.com/en/faqs/view/0C48-FCBD-DA71-93EB' },
  support: { label: 'Saber Interactive · Support', url: 'https://support.saber.games/hc/en' },
  codes: { label: 'GamesRadar+ · Vic Hood’s keypad code guide', url: 'https://www.gamesradar.com/games/horror/hellraiser-revival-codes/' },
  sister: { label: 'TheGameSlayer · Callum Marshall’s Sister of Mercy guide', url: 'https://thegameslayer.com/guides/hellraiser-revival-sister-of-mercy-boss-guide/' },
  gamesradarReview: { label: 'GamesRadar+ · Leon Hurley’s full-game review', url: 'https://www.gamesradar.com/games/horror/clive-barkers-hellraiser-revival-review/' },
  tomsReview: { label: 'Tom’s Guide · Rory Mellon’s PS5 Pro review', url: 'https://www.tomsguide.com/gaming/hellraiser-revival-is-intense-graphic-and-disturbing-but-its-not-ready-for-halloween-2026' },
};

export const categories = [
  { id: 'walkthrough', name: 'Walkthrough', icon: 'book', description: 'Your next step, without losing your way.' },
  { id: 'puzzles', name: 'Puzzle solutions', icon: 'cube', description: 'Clues first. Answers when you need them.' },
  { id: 'collectibles', name: 'Collectibles', icon: 'compass', description: 'Keep track of the things worth finding.' },
  { id: 'locker-codes', name: 'Locker codes', icon: 'key', description: 'The combination, the location, the clue.' },
  { id: 'trophies', name: 'Trophies', icon: 'trophy', description: 'Plan your run and watch for missables.' },
  { id: 'crashing-fix', name: 'PC fixes', icon: 'tools', description: 'Practical checks to get back into the game.' },
];

export const navigationLinks = [
  { label: 'Codes', href: '/locker-codes/', priority: true },
  { label: 'Walkthrough', href: '/walkthrough/' },
  { label: 'Puzzles', href: '/puzzles/' },
  { label: 'Collectibles', href: '/collectibles/' },
  { label: 'Boss guide', href: '/sister-of-mercy/', priority: true },
  { label: 'Zora', href: '/zora/', priority: true },
  { label: 'Trophies', href: '/trophies/' },
  { label: 'PC fixes', href: '/crashing-fix/' },
  { label: 'Playtime', href: '/how-long-to-beat/' },
  { label: 'All guides', href: '/guides/', priority: true },
];

export const guides = [
  {
    slug: 'beginners-guide', category: 'walkthrough', title: 'What the game is & how to play', shortTitle: 'New to the game?',
    seoTitle: 'Hellraiser Revival Beginner’s Guide: How to Play',
    seoDescription: 'New to Hellraiser Revival? Learn how objectives, combat and the Genesis Configuration work, with exploration and manual-save tips for your first hours.',
    description: 'What Hellraiser: Revival is, how its combat and puzzle boxes work, and the habits that make the first hours go smoothly.',
    image: 'official-beginners-guide', reading: '3 min', tag: 'NEW TO THE GAME',
    intro: 'New to Clive Barker’s Hellraiser: Revival? Here is what kind of game it is, how a run fits together and the habits worth building in the first hours.',
    note: 'An orientation, not a walkthrough. Objective routes live in the walkthrough guide and the linked sources.',
    sections: [
      { id: 'what-it-is', title: 'What is Hellraiser: Revival?', body: 'A single-player horror adventure set in Clive Barker’s universe, developed by Boss Team Games and published by Saber Interactive. You play as Aidan, searching for Sunny through the Labyrinth — a shifting, hostile otherworld — on PC and PS5.' },
      { id: 'how-a-run-works', title: 'How a run fits together', kind: 'steps', items: ['Follow the named objectives in your menu rather than hunting for chapter numbers.', 'Explore side rooms for codes, keys and crafting materials before moving on.', 'Solve locks and puzzle boxes to open new routes; hints come before solutions on this site.', 'Keep manual saves in different slots — there is no chapter select or post-story free roam.'] },
      { id: 'combat-and-powers', title: 'Weapons and the Genesis Configuration', body: 'Combat mixes an arsenal of earthly weapons with the supernatural abilities of the Genesis Configuration, the puzzle box at the center of the story. Firearms are limited and worth tracking — the collectibles guide includes a saved checklist of all five.' },
      { id: 'first-session', title: 'Habits for the first session', kind: 'steps', items: ['Pick the difficulty you enjoy; no trophy is reported to require a specific one.', 'Enter locker and safe codes with leading zeroes included.', 'Save before shops — launch builds reported tracking problems with the buying and selling trophies on PS5.', 'When a room looks familiar, the walkthrough guide explains the opening loop.'] },
    ], sources: ['official', 'steam', 'trophies'], related: ['walkthrough', 'puzzles', 'genesis-configuration'],
  },
  {
    slug: 'walkthrough', category: 'walkthrough', title: 'Walkthrough: where to begin', shortTitle: 'Follow the walkthrough',
    seoTitle: 'Hellraiser Revival Walkthrough: Opening Guide',
    seoDescription: 'Start the Hellraiser Revival walkthrough with opening objectives, a Labyrinth puzzle hint and links to the full campaign route.',
    description: 'Opening objectives, a first puzzle hint and a route to the full walkthrough.', image: 'official-walkthrough', reading: '2 min', tag: 'START HERE',
    intro: 'Start with your current objective. This opening guide helps you find your bearings, then points you to the detailed, independently published route.',
    note: 'Opening-game guidance only. This page is not a complete campaign walkthrough.',
    sections: [
      { id: 'find-your-place', title: 'Find your place', body: 'Check the Objectives menu rather than looking for a chapter number: the game uses named objectives. Keep a separate manual save before moving on.' },
      { id: 'opening-route', title: 'The opening route', kind: 'steps', items: ['Find Sunny', 'Escape the Cult', 'Take Back the Genesis Configuration', 'Escape Charlotte'] },
      { id: 'first-loop', title: 'Stuck in the opening loop?', kind: 'spoiler', hint: 'A familiar-looking room does not necessarily mean the way forward is ahead.', answer: 'When the Labyrinth resembles a real room, turn around and re-enter the dark corridor.' },
      { id: 'continue', title: 'Continue your run', body: 'Use the related guides below for individual locks and puzzles. For the complete objective-by-objective route, follow Gage’s walkthrough linked in the sources.' },
    ], sources: ['walkthrough'], related: ['puzzles', 'locker-codes', 'collectibles'],
  },
  {
    slug: 'puzzles', category: 'puzzles', title: 'Puzzle solutions: the first locks', shortTitle: 'Solve the puzzle',
    seoTitle: 'Hellraiser Revival Puzzle Solutions: Skull & Disc Safe',
    seoDescription: 'Solve Hellraiser Revival’s office skull and mansion disc safe with hints and hidden answers, plus links to keypad codes.',
    description: 'Two early mechanisms explained, with hints before the solution.', image: 'official-puzzles', reading: '2 min', tag: 'PUZZLE HELP',
    intro: 'Use the hint first if you want a nudge. Each solution stays hidden until you choose to reveal it.',
    sections: [
      { id: 'tongue-key', title: 'The office skull', kind: 'spoiler', hint: 'Inspect the skull’s orientation before touching the nails.', answer: 'Turn the skull away from you. Press the left, back, right, then top nail to release the Tongue Key.' },
      { id: 'mansion-safe', title: 'The mansion disc safe', kind: 'spoiler', hint: 'This sequence assumes the discs are still in their starting positions.', answer: 'Rotate the left disc once, then the top disc four times. If you already moved them, the sequence will not apply to that changed state.' },
      { id: 'keypad-help', title: 'Looking at a number pad?', body: 'A keypad is a different kind of lock. Open the locker-code guide below to match the location before revealing its combination.' },
    ], sources: ['walkthrough'], related: ['locker-codes', 'genesis-configuration', 'walkthrough'],
  },
  {
    slug: 'collectibles', category: 'collectibles', title: 'Collectibles & your firearm checklist', shortTitle: 'Find what you missed', reviewedOn: '2026-10-12',
    seoTitle: 'Hellraiser Revival Collectibles & Firearm Checklist',
    seoDescription: 'Track Hellraiser Revival’s five firearms with a saved checklist. Review collectible groups, recipe requirements and tips for avoiding missed items.',
    description: 'The four collectible groups, missable-item advice and a saved firearm checklist.', image: 'official-collectibles', reading: '3 min', tag: 'KEEP TRACK',
    intro: 'Check your inventory before leaving an area. This overview covers trophy-related collectible groups; the checklist below tracks firearms only.',
    note: 'No chapter select is available. Keep earlier manual saves if you want the option to return to a missed item.',
    sections: [
      { id: 'collectible-groups', title: 'What counts toward completion?', kind: 'stats', items: [['5', 'Firearms'], ['12', 'Crafting recipes'], ['5', 'Pain pillars'], ['5', 'Suffering pillars']] },
      { id: 'firearms', title: 'Your firearm checklist', kind: 'checklist', items: [
        { id: 'pistol', name: 'Pistol', detail: 'Received after restoring power near the flashlight.' },
        { id: 'shotgun', name: 'Shotgun', detail: 'Near your landing point in the graveyard.' },
        { id: 'smg', name: 'SMG', detail: 'Inside the upper-floor mansion safe.' },
        { id: 'revolver', name: 'Revolver', detail: 'Buy from Zora after obtaining the statue head.' },
        { id: 'assault-rifle', name: 'Assault rifle', detail: 'Sold at Zora’s third shop.' },
      ] },
      { id: 'recipes', title: 'Recipes and pillars', body: 'Finding recipes and crafting their items are separate requirements. Keep your own crafting record. Notes add lore but are not needed for these collectible trophies. Follow the source’s location guide for the complete recipe and pillar route.' },
    ], sources: ['collectibles'], related: ['trophies', 'zora', 'puzzles'],
  },
  {
    slug: 'locker-codes', category: 'locker-codes', title: 'All locker codes & safe combinations', shortTitle: 'All codes & combinations', reviewedOn: '2026-10-12',
    seoTitle: 'Hellraiser Revival Codes: All Lockers, Cabinets & Safes',
    seoDescription: 'Find 10 reported Hellraiser Revival cabinet, locker, safe and door codes. Search rooms, filter areas, reveal answers and copy combinations.',
    description: 'Find ten reported cabinet, locker, safe and door codes by area, with location clues, optional reveals and copy buttons.', image: 'official-locker-codes', reading: '4 min', tag: 'QUICK ANSWERS',
    intro: 'Looking for all Hellraiser: Revival codes? Match your cabinet, locker, safe or door to one of ten reported locations, then reveal its combination.',
    note: 'Full-game references checked October 12, 2026. PowerPyx lists nine of these locks; GamesRadar+ also records the sewer lever room. We have not independently playtested them.',
    sections: [
      { id: 'using-the-list', title: 'Match the room before the code', body: 'Filter by area or search a room name. The jump links take you straight to a lock; its answer stays closed. Item quantities can vary, so rewards below are examples rather than a guaranteed inventory.' },
      { id: 'combinations', title: 'Find your lock', kind: 'codes', items: [
        { id: 'red-hallway', name: 'Red hallway cabinet', area: 'Cult & graveyard', objective: 'Escape the Cult', location: 'Hallway after sneaking past Bruno.', hint: 'Painting plaques', code: '0199', alternative: '9901', detail: 'Both sources report an alternate order.', reward: 'Bandage and crafting materials', sources: ['walkthrough', 'codes'] },
        { id: 'bathroom', name: 'Bathroom / medical room locker', area: 'Cult & graveyard', objective: 'Escape the Cult', location: 'After the knife, beside the bathtub.', hint: 'Look at the tattoo', code: '9891', reward: 'Coins and crafting materials', sources: ['walkthrough', 'codes'] },
        { id: 'graveyard', name: 'Graveyard house safe', area: 'Cult & graveyard', objective: 'Find a Way Out of the Graveyard', location: 'Southeastern house, beneath the kitchen print.', hint: 'Check the kitchen', code: '9606', reward: 'Pistol magazine-release upgrade', sources: ['walkthrough', 'codes'] },
        { id: 'mansion', name: 'Mansion music room cabinet', area: 'Mansion', objective: 'Find a Statue’s Missing Part', location: 'Southeast room, upstairs in Bruno’s mansion.', hint: 'Painting date plus 300', code: '1966', reward: 'Ammunition and crafting materials', sources: ['walkthrough', 'codes'] },
        { id: 'snake-room', name: 'Snake / voyeur room cabinet', area: 'Club', objective: 'Enter the Voyeur Room', location: 'Around the corner from the ticket table.', hint: 'Pictures in the area', code: '1952', reward: 'SMG Laser Pointer', sources: ['walkthrough', 'codes'] },
        { id: 'private-rooms', name: 'Private rooms bathroom cabinet', area: 'Club', objective: 'Get to Marlowe', location: 'Right-hand room after the puzzle door.', hint: 'Picture in the next room', code: '1923', reward: 'Revolver Hollow Point Rounds', sources: ['walkthrough', 'codes'] },
        { id: 'factory', name: 'Factory blue door', area: 'Factory & sewers', objective: 'Use the Elevator', location: 'Dead end south of Zora’s fourth shop.', hint: 'Numbers on statues farther ahead', code: '1362', reward: 'Rifle handguard and inventory upgrade', sources: ['walkthrough', 'codes'] },
        { id: 'laundry', name: 'Laundry room locker', area: 'Factory & sewers', objective: 'Reclaim the Genesis Configuration from Bruno', location: 'Room revealed after the moving trap.', hint: 'Two nearby TVs', code: '8571', reward: 'Revolver Overpressure Ammunition', sources: ['walkthrough', 'codes'] },
        { id: 'break-room', name: 'Break room locker', area: 'Factory & sewers', objective: 'Hunt Marlowe', location: 'Room with the ladder and TV.', hint: 'Numbers on walls facing away', code: '2342', reward: 'Ammunition', sources: ['walkthrough', 'codes'] },
        { id: 'sewer-lever', name: 'Sewer lever room locker', area: 'Factory & sewers', objective: 'Hunt Marlowe', location: 'Upstairs beside the lever-operated bridge.', hint: 'Match the bridge room', code: '1512', reward: 'Not specified in the source', sources: ['codes'] },
      ] },
      { id: 'does-not-work', title: 'If a combination is rejected', body: 'Check that the room matches this entry. Keep leading zeroes when entering a code. For the first hallway lock, the source records an alternate order.' },
      { id: 'codebreaker', title: 'Do you need every code for Codebreaker?', body: 'The trophy requires five keypad locks. Keep earlier saves before leaving an area; the campaign has no chapter select. These entries cover number pads — the rotating mansion safe is in the puzzle guide.' },
    ], sources: ['walkthrough', 'codes', 'trophies'], related: ['puzzles', 'zora', 'trophies'],
  },
  {
    slug: 'sister-of-mercy', category: 'walkthrough', title: 'Sister of Mercy: boss guide', shortTitle: 'Beat Sister of Mercy', reviewedOn: '2026-10-12',
    seoTitle: 'Hellraiser Revival: Sister of Mercy Boss Guide',
    seoDescription: 'Hellraiser Revival Sister of Mercy guide: distinguish the stealth encounter from the boss fight, prepare weapons and handle the red arena.',
    description: 'Find the Sister of Mercy fight, prepare ranged weapons, survive the red arena and finish with Hellchains.',
    image: 'official-sister-of-mercy', reading: '3 min', tag: 'BOSS HELP',
    intro: 'The Sister of Mercy encounter has an earlier stealth section and a later boss fight. This guide helps you identify which one you are in.',
    note: 'Encounter spoilers below. Tactics are attributed to PowerPyx and TheGameSlayer; difficulty and patches can affect your experience.',
    sections: [
      { id: 'stealth-or-boss', title: 'Stealth encounter or boss fight?', body: 'During “Get the Genesis Configuration Back,” distract her with bottles and reach the opening upstairs. The later “Claim the Sister of Mercy’s Heart” objective is the boss fight. Place the Gagged Skull in the door beside the shop to continue toward it.' },
      { id: 'prepare', title: 'Prepare at the nearby shop', kind: 'steps', items: ['Save, replenish ammunition and carry healing items.', 'Bring the shotgun with Dragon Breath Rounds if available, plus an SMG or assault rifle.', 'Keep a ranged weapon ready: she flies around the dance floor, making melee a poor fit.'] },
      { id: 'attack-patterns', title: 'Fire, ranged damage and knife attacks', body: 'TheGameSlayer recommends igniting her with the shotgun, then using automatic fire during the opening. Keep moving to collect arena ammunition. When she throws blades, prioritize dodging or cover; later volleys are more dangerous.' },
      { id: 'red-arena', title: 'When the arena turns red', kind: 'spoiler', hint: 'The red haze marks a change in the fight. Watch for her approach instead of firing blindly.', answer: 'Find her silhouette and shoot as she closes in. Enough damage drops her and opens a Hellchains prompt. Use that prompt, then repeat the attack-and-dodge cycle through the remaining phases.' },
      { id: 'after-the-fight', title: 'Before leaving the dance floor', body: 'Collect the heart and her Whip, which can be sold to Zora. The route onward opens behind the DJ booth. Defeating her awards the “No Mercy” story trophy.' },
    ], sources: ['walkthrough', 'sister', 'trophies'], related: ['zora', 'genesis-configuration', 'trophies'],
  },
  {
    slug: 'zora', category: 'collectibles', title: 'Zora: shops & buying guide', shortTitle: 'Zora’s shops & upgrades', reviewedOn: '2026-10-12',
    seoTitle: 'Hellraiser Revival Zora: Shops, Upgrades & Buying Tips',
    seoDescription: 'Find Zora’s five shop stops in Hellraiser Revival, selected weapons and recipe prices, buying tips and notes on the reported PS5 shop trophy issue.',
    description: 'Find Zora’s five shop stops, key weapon and recipe unlocks, buying priorities and the reported PS5 shop trophy issue.',
    image: 'official-zora', reading: '3 min', tag: 'SHOP & UPGRADES',
    intro: 'Zora sells weapons, upgrades and crafting recipes. Use your current objective to match the shop stop, then check which purchases your progress has unlocked.',
    note: 'Selected stock, not a complete inventory. Prices and progression are taken from PowerPyx’s launch guides. This page covers shopping without revealing Zora’s late-story role.',
    sections: [
      { id: 'shop-stops', title: 'Where do you find Zora?', kind: 'table', headers: ['Shop stop', 'Progress marker', 'Plan ahead'], rows: [
        ['1 · Sewers', 'Climb the ladder during Escape Charlotte', 'Save before buying or selling'],
        ['2 · Mansion / swamp', 'Open the Gate to Charlotte', 'Recheck stock after statue parts'],
        ['3 · Club', 'Hunt Marlowe, after Charlotte', 'Assault rifle becomes available'],
        ['4 · Factory', 'Use the Elevator, after Sister of Mercy', 'Finish recipes before moving on'],
        ['5 · Final stop', 'After climbing out of the trapdoor', 'Last purchases before the final boss'],
      ] },
      { id: 'selected-stock', title: 'Key purchases and unlocks', kind: 'table', headers: ['Item', 'When available', 'Coins'], rows: [
        ['Lockpick recipe', 'First shop', '120'],
        ['Basic Repair Kit recipe', 'First shop', '120'],
        ['Medkit recipe', 'First shop', '200'],
        ['Advanced Repair Kit recipe', 'Second shop', '180'],
        ['Revolver', 'Second shop, after the Statue’s Head', '300'],
        ['Shotgun Dragon Breath Rounds', 'Second shop, after the Statue’s Head', '360'],
        ['Assault rifle', 'Third shop', '450'],
        ['Assault Rifle AP Rounds', 'Third shop, after returning from the Labyrinth', '180'],
      ] },
      { id: 'buying-priorities', title: 'What should you buy first?', body: 'Our planning advice: cover ammunition and healing for the next encounter before spending on optional upgrades. Completion runs also need recipe money. Sell items marked Treasure and use the shop storage chest to free inventory space; boss valuables are useful sale items.' },
      { id: 'shop-trophies', title: 'Save before the first shop', body: 'PowerPyx reports a launch PS5 tracking problem after this visit. The thresholds are 666 coins spent and 999 earned from sales. Keep a manual save before trying the source’s buy-and-sell workaround, and check its current notes for your build.' },
      { id: 'last-chance', title: 'Use the factory stop for completion planning', body: 'The fourth shop gives you time to finish recipe purchases and crafting. The final shop is followed by the last boss, so gather the materials you need beforehand. See the collectible checklist and trophy roadmap for the rest of your run.' },
    ], sources: ['walkthrough', 'collectibles', 'trophies'], related: ['collectibles', 'sister-of-mercy', 'trophies'],
  },
  {
    slug: 'how-long-to-beat', category: 'walkthrough', title: 'How long to beat Hellraiser: Revival?', shortTitle: 'How long to beat?', reviewedOn: '2026-10-12',
    seoTitle: 'How Long Is Hellraiser Revival? Campaign & Platinum',
    seoDescription: 'How long is Hellraiser Revival? Compare reported campaign times with a guided Platinum estimate and plan sessions, saves and collectible checks.',
    description: 'Compare reported campaign times and the guided Platinum estimate, with practical advice for planning your play sessions.',
    image: 'official-how-long-to-beat', reading: '2 min', tag: 'PLAN YOUR RUN',
    intro: 'Allow roughly 9–10 hours for a first campaign as a planning estimate. Published reviewers report just under nine hours and ten hours; those are individual runs, not a measured player average.',
    note: 'Full-game reports checked October 12, 2026. Your difficulty, exploration, retries and use of guides will change the time you need.',
    sections: [
      { id: 'reported-times', title: 'Campaign and completion reports', kind: 'table', headers: ['Type of run', 'Reported time', 'Source / scope'], rows: [
        ['Campaign', 'Just under 9 hours', 'Leon Hurley · GamesRadar+ review'],
        ['Campaign', '10 hours', 'Rory Mellon · Tom’s Guide, PS5 Pro'],
        ['Guided Platinum / 100%', '8–10 hours', 'PowerPyx roadmap estimate'],
      ] },
      { id: 'why-times-differ', title: 'Why can a completion estimate look shorter?', body: 'These figures come from different players and methods. A route-led trophy estimate cannot be compared directly with a first review playthrough. Allow extra time if you explore without answers or need to replay an earlier save.' },
      { id: 'plan-sessions', title: 'Plan your play sessions', body: 'At two hours per session, a 9–10-hour campaign works out to about five sessions; at three hours, about three to four. These are calculations from the planning range, rather than extra playtest results.' },
      { id: 'completion-planning', title: 'Leave room for missed items', body: 'PowerPyx reports no chapter select or post-story free roam. Spread out your eight manual saves and check recipes, firearms and pillars before moving on. A missed requirement can add replay time beyond the guided estimate.' },
      { id: 'demo-length', title: 'Does this estimate include the demo?', body: 'No: the figures above describe full-game runs. We do not have a verified demo completion average to compare with them. Use the demo as a separate trial rather than subtracting a fixed duration from the campaign.' },
    ], sources: ['gamesradarReview', 'tomsReview', 'trophies'], related: ['beginners-guide', 'walkthrough', 'trophies'],
  },
  {
    slug: 'trophies', category: 'trophies', title: 'Trophies: plan a safer completion run', shortTitle: 'Before you chase Platinum',
    seoTitle: 'Hellraiser Revival Trophy Guide & Platinum Roadmap',
    seoDescription: 'Plan a Hellraiser Revival PS5 trophy run with a compact roadmap, manual-save tips, collectible requirements and notes on reported shop trophy issues.',
    description: 'Save planning, collectible requirements and the reported shop-trophy issue.', image: 'official-trophies', reading: '3 min', tag: 'COMPLETION',
    intro: 'A little planning can save a second run. This is a compact roadmap, not a full trophy list. Counts and launch issues below come from PowerPyx’s PS5 guide.',
    sections: [
      { id: 'roadmap', title: 'The roadmap at a glance', kind: 'stats', items: [['45', 'PS5 trophies'], ['0', 'Online trophies'], ['1', 'Minimum run'], ['20', 'Missable trophies']] },
      { id: 'saves', title: 'Keep saves at different points', body: 'The game offers eight manual-save slots. Spread them across your run instead of repeatedly overwriting one slot. With no chapter select or post-story free roam, earlier saves are your route back.' },
      { id: 'shop-issue', title: 'Watch the shop trophies', body: 'PowerPyx reports launch tracking problems with the buying and selling trophies on PS5 after the first shop. Make a manual save before that encounter and check the linked roadmap for the current workaround. Patch behavior can change; this is a reported issue, not a guarantee that your build is affected.' },
      { id: 'difficulty', title: 'Choose a difficulty you enjoy', body: 'The source reports no difficulty-specific trophy requirement. Balance story progress with collectible checks and miscellaneous tasks as you go.' },
    ], sources: ['trophies'], related: ['collectibles', 'walkthrough', 'locker-codes'],
  },
  {
    slug: 'crashing-fix', category: 'crashing-fix', title: 'PC crashing: start with these checks', shortTitle: 'Get back into the game',
    seoTitle: 'Hellraiser Revival PC Crashes: Troubleshooting Guide',
    seoDescription: 'Troubleshoot Hellraiser Revival PC crashes with published system requirements, Steam file verification steps and details to include in a support report.',
    description: 'Official PC requirements, Steam file verification and useful support details.', image: 'official-crashing-fix', reading: '3 min', tag: 'PC SUPPORT',
    intro: 'Start with checks you can reverse and record what changes. These are general Steam troubleshooting steps; there is no single confirmed fix for every Hellraiser: Revival crash.',
    sections: [
      { id: 'requirements', title: 'Check the published requirements', kind: 'table', headers: ['Component', 'Minimum', 'Recommended'], rows: [
        ['CPU', 'Ryzen 5 1500X / Core i5-8400', 'Ryzen 5 5600X / Core i5-12400F'],
        ['Memory', '8 GB RAM', '16 GB RAM'],
        ['Graphics', 'RX Vega 64 8 GB / GTX 1660', 'RX 6600 XT / RTX 3060'],
        ['Storage', '80 GB; SSD recommended', '80 GB; SSD recommended'],
        ['OS', 'Windows 10 64-bit, 22H2 or later', 'Windows 10 64-bit, 22H2 or later'],
      ] },
      { id: 'verify-files', title: 'Verify the installation in Steam', kind: 'steps', items: ['Restart your PC and open Steam.', 'In Library, right-click Hellraiser: Revival and open Properties.', 'Choose Installed Files, then Verify integrity of game files.', 'Wait for verification to finish, then try the same part of the game again.'] },
      { id: 'support-report', title: 'Still crashing? Make the report useful', body: 'Write down your platform, game version, CPU, GPU, driver version and the exact moment the crash occurs. Include any error message and whether the crash repeats after file verification. Send those details through Saber’s support site below. Avoid deleting saves while investigating.' },
    ], sources: ['steam', 'files', 'support'], related: ['walkthrough', 'genesis-configuration'],
  },
  {
    slug: 'genesis-configuration', category: 'puzzles', title: 'The Genesis Configuration', shortTitle: 'Understand the box',
    seoTitle: 'Hellraiser Revival Genesis Configuration Explained',
    seoDescription: 'Learn what the Genesis Configuration does in Hellraiser Revival, how it connects to Aidan’s story and combat, and where to find puzzle help.',
    description: 'The puzzle box at the center of Aidan’s story and supernatural abilities.', image: 'official-genesis-configuration', reading: '2 min', tag: 'THE ESSENTIALS',
    intro: 'The Genesis Configuration is more than an object to carry. It connects Aidan’s search for Sunny to the Labyrinth and the powers he uses to survive.',
    sections: [
      { id: 'the-box', title: 'A tool at the heart of the story', body: 'Saber’s official description identifies this mysterious box as Aidan’s means of helping Sunny escape the Labyrinth. Its supernatural powers work alongside conventional weapons.' },
      { id: 'combat', title: 'Weapons and supernatural abilities', body: 'The official overview describes combining the Configuration’s abilities with an arsenal of earthly weapons against cultists and other infernal enemies. This introduction does not claim a complete skill tree or exact damage values.' },
      { id: 'puzzle-help', title: 'Need a specific solution?', body: 'The puzzle guide provides individual mechanisms with optional reveals. Keep the answer closed if you only want a hint.' },
    ], sources: ['official'], related: ['puzzles', 'walkthrough', 'locker-codes'],
  },
];

export const popularGuides = ['locker-codes', 'sister-of-mercy', 'zora', 'how-long-to-beat'];
export const lastReviewedOn = guides.reduce((date, guide) => guide.reviewedOn > date ? guide.reviewedOn : date, reviewedOn);
export const formatReviewDate = date => new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

export const getGuide = slug => guides.find(guide => guide.slug === slug);
export function searchGuides(query = '', category = 'all') {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return guides.filter(guide => (category === 'all' || guide.category === category) && words.every(word => JSON.stringify(guide).toLowerCase().includes(word)));
}
export const pagePaths = ['/', '/guides/', ...guides.map(g => `/${g.slug}/`), '/about/', '/privacy/'];
export function pageMeta(path) {
  const guide = getGuide(path.split('/').filter(Boolean)[0]);
  if (guide && path === `/${guide.slug}/`) return { title: guide.seoTitle || `${guide.title} | Hellraiser Guides`, description: guide.seoDescription || guide.description };
  if (path === '/guides/') return { title: 'Guide Library | Hellraiser Revival Walkthroughs & Codes', description: 'Search Hellraiser Revival guides for codes, puzzles, collectibles, Sister of Mercy, trophies and PC help. Filter by category or return to your saved guides.' };
  if (path === '/about/') return { title: 'About & Editorial Policy | Hellraiser Revival Guides', description: 'About hellraiserrevival.help: an independent Hellraiser Revival fan guide. Read our source policy, coverage limits, correction notes and artwork disclosure.' };
  if (path === '/privacy/') return { title: 'Privacy | Hellraiser Revival Guides', description: 'Read how hellraiserrevival.help handles local bookmarks, checklists and search, plus Google Analytics, Microsoft Clarity and hosting request logs.' };
  if (path !== '/') return { title: 'Page not found | Hellraiser Revival Guides', description: 'This Hellraiser Revival page could not be found. Return to the guide library for codes, puzzles, walkthrough notes, collectibles and PC help.' };
  return { title: 'Hellraiser Revival Wiki | Walkthrough, Codes & Guides', description: 'Hellraiser Revival wiki with walkthrough notes, locker and safe codes, puzzle solutions, Sister of Mercy tactics, Zora shops, trophies and PC help.' };
}
