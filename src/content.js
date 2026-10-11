export const updated = 'October 11, 2026';
export const sources = {
  walkthrough: { label: 'PowerPyx · Gage’s full walkthrough', url: 'https://www.powerpyx.com/clive-barkers-hellraiser-revival-100-walkthrough/' },
  collectibles: { label: 'PowerPyx · Collectible locations', url: 'https://www.powerpyx.com/clive-barkers-hellraiser-revival-all-collectible-locations-guide/' },
  trophies: { label: 'PowerPyx · Trophy roadmap', url: 'https://www.powerpyx.com/clive-barkers-hellraiser-revival-trophy-guide-roadmap/' },
  steam: { label: 'Steam · Official game listing', url: 'https://store.steampowered.com/app/1551980/Clive_Barkers_Hellraiser_Revival/' },
  official: { label: 'Saber Interactive · Hellraiser: Revival', url: 'https://saber.games/hellraiserrevival/' },
  files: { label: 'Steam Support · Verify game files', url: 'https://help.steampowered.com/en/faqs/view/0C48-FCBD-DA71-93EB' },
  support: { label: 'Saber Interactive · Support', url: 'https://support.saber.games/hc/en' },
};

export const categories = [
  { id: 'walkthrough', name: 'Walkthrough', icon: 'book', description: 'Your next step, without losing your way.' },
  { id: 'puzzles', name: 'Puzzle solutions', icon: 'cube', description: 'Clues first. Answers when you need them.' },
  { id: 'collectibles', name: 'Collectibles', icon: 'compass', description: 'Keep track of the things worth finding.' },
  { id: 'locker-codes', name: 'Locker codes', icon: 'key', description: 'The combination, the location, the clue.' },
  { id: 'trophies', name: 'Trophies', icon: 'trophy', description: 'Plan your run and watch for missables.' },
  { id: 'crashing-fix', name: 'PC fixes', icon: 'tools', description: 'Practical checks to get back into the game.' },
];

export const guides = [
  {
    slug: 'beginners-guide', category: 'walkthrough', title: 'What the game is & how to play', shortTitle: 'New to the game?',
    description: 'What Hellraiser: Revival is, how its combat and puzzle boxes work, and the habits that make the first hours go smoothly.',
    image: 'walkthrough', reading: '3 min', tag: 'NEW TO THE GAME',
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
    description: 'Opening objectives, a first puzzle hint and a route to the full walkthrough.', image: 'walkthrough', reading: '2 min', tag: 'START HERE',
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
    description: 'Two early mechanisms explained, with hints before the solution.', image: 'puzzles', reading: '2 min', tag: 'PUZZLE HELP',
    intro: 'Use the hint first if you want a nudge. Each solution stays hidden until you choose to reveal it.',
    sections: [
      { id: 'tongue-key', title: 'The office skull', kind: 'spoiler', hint: 'Inspect the skull’s orientation before touching the nails.', answer: 'Turn the skull away from you. Press the left, back, right, then top nail to release the Tongue Key.' },
      { id: 'mansion-safe', title: 'The mansion disc safe', kind: 'spoiler', hint: 'This sequence assumes the discs are still in their starting positions.', answer: 'Rotate the left disc once, then the top disc four times. If you already moved them, the sequence will not apply to that changed state.' },
      { id: 'keypad-help', title: 'Looking at a number pad?', body: 'A keypad is a different kind of lock. Open the locker-code guide below to match the location before revealing its combination.' },
    ], sources: ['walkthrough'], related: ['locker-codes', 'genesis-configuration', 'walkthrough'],
  },
  {
    slug: 'collectibles', category: 'collectibles', title: 'Collectibles & your firearm checklist', shortTitle: 'Find what you missed',
    description: 'The four collectible groups, missable-item advice and a saved firearm checklist.', image: 'collectibles', reading: '3 min', tag: 'KEEP TRACK',
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
    ], sources: ['collectibles'], related: ['trophies', 'walkthrough', 'puzzles'],
  },
  {
    slug: 'locker-codes', category: 'locker-codes', title: 'Locker codes & safe combinations', shortTitle: 'Open the lock',
    description: 'Five location-specific combinations, hidden until you need them.', image: 'puzzles', reading: '2 min', tag: 'QUICK ANSWERS',
    intro: 'Match the location first, then reveal the code. These entries are attributed to the full-game PowerPyx walkthrough, not independently playtested by this site.',
    sections: [
      { id: 'combinations', title: 'Find your lock', kind: 'codes', items: [
        { name: 'Hallway after Bruno', hint: 'Painting plaques', code: '0199', alternative: '9901', detail: 'The source reports both orders; try the alternative if needed.' },
        { name: 'Bathroom cabinet', hint: 'Near the tub', code: '9891' },
        { name: 'Graveyard safe', hint: 'Southeastern house', code: '9606' },
        { name: 'Mansion cabinet', hint: 'Upper floor, southeast', code: '1966' },
        { name: 'Voyeur room cabinet', hint: 'Near the ticket', code: '1952' },
      ] },
      { id: 'does-not-work', title: 'If a combination is rejected', body: 'Check that the room matches this entry. Keep leading zeroes when entering a code. For the first hallway lock, the source records an alternate order.' },
    ], sources: ['walkthrough'], related: ['puzzles', 'walkthrough', 'trophies'],
  },
  {
    slug: 'trophies', category: 'trophies', title: 'Trophies: plan a safer completion run', shortTitle: 'Before you chase Platinum',
    description: 'Save planning, collectible requirements and the reported shop-trophy issue.', image: 'collectibles', reading: '3 min', tag: 'COMPLETION',
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
    description: 'Official PC requirements, Steam file verification and useful support details.', image: 'walkthrough', reading: '3 min', tag: 'PC SUPPORT',
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
    description: 'The puzzle box at the center of Aidan’s story and supernatural abilities.', image: 'puzzles', reading: '2 min', tag: 'THE ESSENTIALS',
    intro: 'The Genesis Configuration is more than an object to carry. It connects Aidan’s search for Sunny to the Labyrinth and the powers he uses to survive.',
    sections: [
      { id: 'the-box', title: 'A tool at the heart of the story', body: 'Saber’s official description identifies this mysterious box as Aidan’s means of helping Sunny escape the Labyrinth. Its supernatural powers work alongside conventional weapons.' },
      { id: 'combat', title: 'Weapons and supernatural abilities', body: 'The official overview describes combining the Configuration’s abilities with an arsenal of earthly weapons against cultists and other infernal enemies. This introduction does not claim a complete skill tree or exact damage values.' },
      { id: 'puzzle-help', title: 'Need a specific solution?', body: 'The puzzle guide provides individual mechanisms with optional reveals. Keep the answer closed if you only want a hint.' },
    ], sources: ['official'], related: ['puzzles', 'walkthrough', 'locker-codes'],
  },
];

export const getGuide = slug => guides.find(guide => guide.slug === slug);
export function searchGuides(query = '', category = 'all') {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return guides.filter(guide => (category === 'all' || guide.category === category) && words.every(word => JSON.stringify(guide).toLowerCase().includes(word)));
}
export const pagePaths = ['/', '/guides/', ...guides.map(g => `/${g.slug}/`), '/about/', '/privacy/'];
export function pageMeta(path) {
  const guide = getGuide(path.split('/').filter(Boolean)[0]);
  if (guide) return { title: `${guide.title} | Hellraiser Guides`, description: guide.description };
  if (path === '/guides/') return { title: 'Guide Library | Hellraiser Revival Walkthroughs & Codes', description: 'Search focused Hellraiser: Revival guides for puzzles, locker codes, collectibles, trophies and PC troubleshooting.' };
  if (path === '/about/') return { title: 'About & Editorial Policy | Hellraiser Revival Guides', description: 'How this independent fan guide uses sources, labels coverage and handles corrections.' };
  if (path === '/privacy/') return { title: 'Privacy | Hellraiser Revival Guides', description: 'Local bookmarks and checklists, with no account required.' };
  if (path !== '/') return { title: 'Page not found | Hellraiser Revival Guides', description: 'Find your way back to the Hellraiser: Revival guide library.' };
  return { title: 'Hellraiser Revival Guides | Walkthrough & Puzzle Help', description: 'Independent Hellraiser: Revival guide: what the game is, how to play, walkthrough notes, puzzle solutions, locker codes and PC help.' };
}
