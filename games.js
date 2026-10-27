/* ============================================================================
   GAMES — the only file you need to edit.

   Each entry is one item in the left sidebar. Each entry has one or more
   `versions`, shown as tabs above the stage ("Gemini 4 Argon" and, where finished, "Redesign").

   versions[].type    "html" → a self-contained .html game, shown in an iframe
   versions[].file    path relative to index.html, or a full URL
   versions[].notes   optional markdown, opens with the "Notes" button
   versions[].trajectory  optional path/URL for the "Download trajectory" button

   Rubric (optional): add `questions` to a game and `marks` / `comments` to each
   version, the same way as the 3D scene viewer, and the rubric table appears:
     questions: [{ tier: 'Functionality', q: '**Controls** — Player can jump' }]
     marks:     [true]   (true = ✓  false = ✗  null = not scored)

   Open index.html directly, or serve the folder:  python3 -m http.server 8000
   ========================================================================== */

const ARGON = 'Gemini 4 Argon Games/';

window.GAMES = [
  {
    nav: 'Puzzle',
    genre: 'Puzzle',
    title: 'Wellspring',
    description: 'Carve the parched hills. Guide the mountain spring. Save the watershed. Every drop counts against the village hunger clock.',
    // Rubric and Redesign notes from saida (1).jsonl (final rubric evaluation).
    questions: [
      {
        "tier": "The design document",
        "q": "**Core mechanic** — Water leaves the spring and follows the terrain downhill, changes course wherever the player has dug a channel or lifted the land, and reaches the field only when an unbroken downhill path connects spring to field."
      },
      {
        "tier": "The design document",
        "q": "**Mechanics — the player** — The player can at least dig channels and raise walls on soft ground but not on rock faces, with each shape staying until it is reworked, and can pick up and drop small stones to dam or deflect water while boulders roll downhill on steep slopes, crushing anything in the way, and can only be nudged slowly."
      },
      {
        "tier": "The design document",
        "q": "**Mechanics — the world** — The ground holds at least cracks, holes, and thirsty sand that swallow water, and hidden pits that open under the water's weight; the hunger meter drains from the moment the village loads and the level is lost when it empties; a village is saved when enough water reaches each of its fields, which drink only the water that arrives while the path is whole; and wasted water is water the fields never get, so losing too much of it forces a restart."
      },
      {
        "tier": "The design document",
        "q": "**Onboarding** — The first village is a single straight downhill channel with one field so the player learns to dig before anything else exists, each later mechanic is introduced on a village where it is the only new thing, and the player can only lose by running out of time, never by a mechanic they have not met."
      },
      {
        "tier": "The design document",
        "q": "**Enemies** — There are no living enemies; the opposition is the terrain and the clock, and the land itself resists the player."
      },
      {
        "tier": "The design document",
        "q": "**Rewards and power-ups** — Saving a field makes its crops grow green on the spot, and a saved village carries its clean, unblocked spring forward so the next village has a fuller water supply."
      },
      {
        "tier": "The design document",
        "q": "**Progression** — Each village sits lower in the hills and grows larger, with more fields, longer routes, and steeper drops, and later villages add boulders, then traps, then traps that interact with the player's own walls."
      },
      {
        "tier": "The design document",
        "q": "**Interface — in play** — The in-play interface shows at least the hunger meter, the water supply, the field status, a tool hint, and the village name."
      },
      {
        "tier": "The design document",
        "q": "**Interface — menus** — How to play shows each mechanic with a still of it in use, and a between-village screen shows the saved village turning green and the path to the next village."
      },
      {
        "tier": "Content and filling",
        "q": "**Volume** — A competent first-time player needs at least fifteen minutes to beat the game."
      },
      {
        "tier": "Content and filling",
        "q": "**Variety** — Later parts of the game add at least one new element — a hazard, an enemy, a mechanic or a situation — rather than only more of the same."
      },
      {
        "tier": "Content and filling",
        "q": "**Curve** — The game gets harder as it goes in at least two different ways, rather than only by making things faster, and stays beatable."
      },
      {
        "tier": "Content and filling",
        "q": "**Teaching** — Each mechanic can be tried at least once somewhere safe before the game depends on it."
      },
      {
        "tier": "Content and filling",
        "q": "**Reward** — At least one reward changes what the player can do or where they can go, rather than only raising a number."
      },
      {
        "tier": "Content and filling",
        "q": "**Opposition** — Overcoming the opposition takes at least two different player behaviours."
      },
      {
        "tier": "Content and filling",
        "q": "**Session** — Each village has a defined end the player can stop at and come back from."
      },
      {
        "tier": "Content and filling",
        "q": "**Bugs** — Five minutes of trying to break the game finds nothing visibly wrong — nothing floating, overlapping or drawn in the wrong place, no animation that never settles, no number that disagrees with the screen — and nothing that blocks progress or forces a reload."
      },
      {
        "tier": "Content and filling",
        "q": "**Controls** — A player given no instructions works out every control and every mechanic from the game alone within the first village."
      }
    ],
    versions: [
      { label: 'Gemini 4 Argon', type: 'html', file: ARGON + 'puzzle__gemini-4-argon.html' },
      {
        label: 'Redesign', type: 'html', file: 'Redesign/puzzle/index.html',
        notes: "From the reviewer's list\nRemoved the timer. Each village now has a fixed number of moves, so the puzzles are about logic instead of rushing.\nReplaced the realistic water simulation with a predictable flow. Every tile has a fixed height, water spreads in waves to every open tile at or below its level, one unit per tile, and overflows from the farthest point when the channel is full.\nSplit planning from watching. I plan with my moves, press Open the gates, then only watch; if a field stays dry, Try again returns me to the exact plan.\nChanged the controls so nothing changes until I confirm: drag, or use the arrows and Space, to paint tiles, then pick Dig or Raise, which shows how many moves it will cost.\nAdded a multi step Undo, keyboard arrows and an on screen arrow pad. Ctrl or Z marks tiles while the cursor moves, and clicking the spring or pressing Enter opens the gates.\nRock tiles cannot be dug or raised. Small stones move one tile and plug low tiles, and boulders slide until they hit something, so a careless push can block my own channel until I undo it.\nAdded water driven levers that flip every sluice of their colour, and traps: cracks, thirsty sand, holes, hidden pits and dry clay that crumbles walls.\nBuilt twelve villages that teach one rule at a time and then combine them. Each has a tight move budget and a stored solution, and I checked that it wins with exactly that budget while doing nothing or the wrong idea loses.\nTurned the recentre button into Restart level; a double right click now recentres the camera.\n\nAlso added\nStars per village, a Level Select with one card per village, a one line callout for each new rule and a hint line that names the tile under the pointer.\nHow to Play shows a still of every rule and the current controls; Settings has a sound switch and Play ending; the pause menu has Resume, sound, Restart level and main menu.\nAfter each win the journal shows a valley map with the path to the next village, and every village after the first gets two extra water from the saved spring upstream.\nCleaned up the HUD and the board: modals cover the whole HUD, every text is at least 14 px, tile picking is exact, every tile type reads at a glance, and the island holds the whole board.\nReworked the interface for readability. Every HUD text now reads at 4.5 to 1 or better, and the dock looks like a field kit. It shows a locked look while the water runs, and the floating tile hint always matches the hint bar.\nThe journal opens as a two page book with a valley map that names the saved, current and next villages, plus notes on the next rule.\nComposed new music: a plucked melody over bass and soft chords, a livelier groove with a shaker while the water runs, and short phrases for a win and a failure.\nKept every tree, stone, flower and villager on top of the island.\nRedo 1, from the reviewer's list\nMade selection unmistakable: selected tiles lift and glow teal with a cream outline.\nLaid four large push arrows flat on the tiles around a stone or boulder, with a path to where it stops; clicking one pushes, and the push buttons sit next to Push.\nMade the spring ask before opening the gates, and the stones around it never open them.\nAdded a Mark as I move toggle to the on screen pad, and a key strip in the first villages that names Space, Z, the verbs and Enter.\nA failed flow now stays on the board for a few seconds, marking dry fields and where water was lost, with Back to plan and Restart next to the map.\nStones and boulders now slide, roll and drop into holes on screen instead of jumping, and the camera stays close until they land.\nLevel Select has Act I and Act II, and every card has its own Play or Replay button in view.\nAdded Act II: ten challenge villages designed and proven in a simulator, where the obvious route and the wrong order lose, plus high ground, a raised terrain that costs two digs per tile.\nRedo 2, from the reviewer's list\nFixed the bug behind Ringmoor: on raised ground a click picked the tile behind the pointer. Every click now picks the visible tile under it at its real height.\nSelection, hover and the keyboard cursor now sit on their own tile and are no longer drawn through the terrain in front.\nAdded view turns in 90 degree steps (Q, E or the buttons under Restart level) and a top view (T) that squares the grid on screen. The arrows follow the screen after a turn.\nA failed flow now stays on the board until I choose Try again, Restart level, Main menu or Open journal; the green dock button also reads Try again there.\nThe green Open the gates button confirms itself: a second click or a double click opens the gates.\nGrass fields can no longer be selected.\nSaving a village now celebrates with a ribbon naming it, stars stamped in with a bell, a fanfare over the dipped music, petals over the fields and villagers hopping.\nAfter two failed tries a Hint button shows the next step of the solution, and the Act II texts no longer give away the answers.\nRedo 3, from the reviewer's list\nThe flight from the menu into a village no longer follows the mouse: the camera takes the same smooth path wherever the pointer is.\nRedesigned Dunewell: the sand is one column wider and a second crack sits on the straight line, so the short route along the crack loses and the clean route around the right side, two digs longer, is the way through.\nYou were right about the stars: before this change 16 of the 22 villages could not reach three. Every village can now earn three stars: save it, save it on the first opening of the gates, and keep its water goal, shown under Water reserve while planning. Each goal is the water a correct solution leaves, and the journal shows which stars a try earned. The first opening star counts the whole attempt, so Try again and Restart level keep the count; to go for three stars again, reopen the village from Level Select.\nVideo 1 shows the three: the flight at 0:13, recorded with the mouse moving across the screen (the recording does not draw the pointer); Stillwater saved with three stars at 0:24 and its journal at 0:30; Dunewell from 0:42, where the route along the crack runs dry at 0:52 and the clean route saves it at 1:10 with two stars, since it was a second try.\nHow to beat Ringmoor\nYou were right to get stuck, and it was our fault. On raised ground a click picked the tile behind the one under the pointer, so the right moves could not be entered with the mouse. That is fixed now, and the redo 2 video played it with the mouse in the top view. Ringmoor's water goal is 1, so this solution on a first try earns three stars.\nThe solution takes all 4 moves. In the field's row, dig the high tile next to the old trench twice, then dig the next two high tiles toward the field once each.\nThe water runs down the old trench and ends inside the hill, and the overflow wells up there and walks along the notch into the field, with 1 water to spare.\nFrom the second failed try in any village, the Hint button now shows the next step of the solution.\n\nAct II solutions, one line each\nKettleford: push the stone up into the near hole first, then push the boulder left so it rolls over it into the far hole, then dig the channel to the field.\nFarwater: raise the first tile of the left trunk, which dries both decoy ditches, and raise the gap in the aqueduct; the overflow rises at the right end and runs down the aqueduct.\nElbow Pass: lower the bump, raise a stopper where the boulder must stop, push the boulder right and then down into the hole of the pass, then dig to the field.\nCrumblewick: raise the clay inside the aqueduct as a stopper, push the boulder right so it stops on the leak, then dig the missing channel tile.\nLockstep: dig the branch to the amber lever and the channel to the first field, then reach the blue lever from below through the second amber gate, and dig to the second field.\nGapstone: raise the upper gap, push the stone left so it leaves the lane and plugs the second gap, then dig two tiles after the gate.\nQuarry Hollow: lower three rim tiles, push the boulder down, push the stone down into the near hole, then push the boulder right into the far hole.\nEvenfall: lower the column of high ground under the lever; the first field fills by channel, and its overflow runs the old trench, climbs the hill and pulls the lever last, so the second field fills.\nHeadwater: push the boulder left to plug the hole by the second field, dig two below the first field to the gap, lower four ridge tiles under the lever, and dig two after the gate.",
        marks: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
        comments: [
          "Water leaves the spring and spreads in steady waves over every open tile at or below its level. Dug channels lower the land and raised walls block it. A field only drinks when an unbroken path of water reaches it.",
          "I can dig channels and raise walls on soft ground, and rock refuses both. High ground needs two digs per tile, and water never climbs it. Small stones move one tile and plug low tiles, and boulders roll until they hit something. Every push slides or rolls on screen.",
          "Cracks, thirsty sand and holes drink extra water. A hidden pit looks like soil until the water opens it. Dry clay crumbles walls raised on it. Each field needs a set number of units, so wasted water fails the village.",
          "Stillwater is one straight channel to one field, so digging comes first. Every later village opens with a callout naming its only new rule. How to Play shows a still of each rule. A village is lost only by spending water or moves badly.",
          "There are no living enemies. The opposition is the terrain, the limited moves and the thirsty ground. A careless boulder push can block my own channel until I undo it.",
          "Each field turns green the moment it is full. Saving a village now celebrates: a ribbon names it and the stars stamp in with a bell. A fanfare rises over the dipped music while petals fall and villagers hop. Every village after the first gets two extra water, and three stars are possible in every village: save it, save it on the first opening and keep its water goal.",
          "Act I grows from a small board with one field to a wide valley with three fields. Act II adds ten harder villages with high ground, overflow puzzles and ordered pushes. The last one, Headwater, combines every tool.",
          "The HUD shows moves left, the water reserve with the village's star goal, and every field with its units of need. A hint line names the tile under the pointer and its rule, and the lesson stays on the top card while I plan. Under Restart level, three buttons turn the view and switch to a top view. Every label is dark ink on parchment and stays readable.",
          "How to Play shows ten rules, each with a still drawn from real game tiles. After a win the village turns green. The journal then opens like a book, with a valley map naming the saved, current and next villages. A river journey leads to the next one.",
          "There are twenty two villages with exact move budgets. Act I teaches each rule, and Act II holds ten real puzzles. By our estimate a first time player needs about forty five minutes for both acts.",
          "Act I adds a new element in almost every village. Act II brings high ground and overflow used on purpose to cross obstacles. It also adds clay that holds a boulder before it crumbles, and lever chains in two colours.",
          "Difficulty grows in board size, number of fields, combined rules and tighter water, never by speed. In Act II the obvious route and the wrong order always lose. Every village has a solution that fits its budget exactly.",
          "Each rule first appears in a small village where it is the only new thing, and a callout names it. Ringmoor's callout teaches high ground: dig twice to cut through, and water never climbs it. Dunewell lets the short route along a crack fail, so the water a crack drinks is learned by trying. After two failed tries a Hint button shows the next step without spending moves.",
          "Saving a village unlocks the next one and carries two extra water downstream. Level Select keeps every saved village open to replay for three stars, and the journal shows which stars each try earned.",
          "I have to shape the land by digging, raising and cutting high ground. I also have to push stones and boulders in the right order. Act II adds overflow as a tool and levers that the water must reach in time.",
          "Each village is a separate puzzle with its own result screen, saved progress and stars. I can stop after any village and continue from Level Select.",
          "Five minutes of trying to break it found nothing floating or overlapping on any screen. The camera flight into a village keeps one smooth path whatever the mouse does. A click on any visible tile picks that tile, even on raised ground or behind a boulder. A failed flow stays on the board with dry fields and losses marked until I choose Try again, Restart level or Main menu.",
          "A hint line and a key strip teach Space, Z, the verbs, Enter, Q, E and T in the first villages. Selected tiles glow teal, push arrows lie on the board and can be clicked, and fields cannot be selected. A double click on the green button opens the gates. After a view turn, the arrows still follow the screen."
        ],
      },
    ],
  },
  {
    nav: '3D Platform',
    genre: '3D Platform',
    title: 'The Long Slide Home',
    description: 'Race down eight icy mountains before the clock runs out and the bird of prey snatches your lost chicks.',
    // Rubric and Redesign notes from saida (1).jsonl (final rubric evaluation).
    questions: [
      {
        "tier": "The design document",
        "q": "**Core mechanic** — On a steep slope the player drops the mother to her belly to slide; sliding builds far more speed than running, but the faster she goes the harder she is to steer."
      },
      {
        "tier": "The design document",
        "q": "**Mechanics — the player** — The mother can at least run, turn, and jump over packed snow and ice; loose snow slows her, while sheer ice keeps her momentum but grips less."
      },
      {
        "tier": "The design document",
        "q": "**Mechanics — the world** — Each mountain starts a countdown when the descent begins, and the level is won by reaching the chick before it reaches zero and lost when it reaches zero. Hitting a hazard knocks the mother down and costs a little time while she gets up, without ending the run by itself; at least three kinds of hazard — crevasses, ice spurs, and falling snow slabs — line the route, and hidden chutes and ice caves cut distance down the mountain but pack tighter hazards."
      },
      {
        "tier": "The design document",
        "q": "**Onboarding** — The first mountain is gentle and mostly open, teaching running and jumping first, then the slide on a long, safe slope, and only then setting hazards along the way, while a short overlay names each new control as it appears."
      },
      {
        "tier": "The design document",
        "q": "**Enemies** — A bird of prey circles the mountain and swoops at the mother, forcing her off her line; it seizes the chick when the clock runs out, and on some mountains it blocks the path near the bottom as a boss that must be driven off by dodging and outmaneuvering."
      },
      {
        "tier": "The design document",
        "q": "**Rewards and power-ups** — Fish scattered down the route reward the player with score, and each freed chick is the run's true prize; at least a speed-burst pickup and a brief shield let the player gamble on a faster line or shrug off a single knockdown."
      },
      {
        "tier": "The design document",
        "q": "**Progression** — The rescued chicks gather into a growing flock that follows the mother between mountains, and later mountains ask more of the player's skill while adding new hazards, tighter clocks, and bosses to deal with, until the whole family reunites on the final mountain."
      },
      {
        "tier": "The design document",
        "q": "**Interface — in play** — In play, the HUD shows at least the clock, a goal marker steering toward the chick, speed, the current run's fish count, and the boss state."
      },
      {
        "tier": "The design document",
        "q": "**Interface — menus** — The How to Play screen shows the controls and each mechanic, and between mountains a story screen shows the growing flock and the next mountain."
      },
      {
        "tier": "Content and filling",
        "q": "**Volume** — A competent first-time player needs at least fifteen minutes to beat the game."
      },
      {
        "tier": "Content and filling",
        "q": "**Variety** — Later parts of the game add at least one new element — a hazard, an enemy, a mechanic or a situation — rather than only more of the same."
      },
      {
        "tier": "Content and filling",
        "q": "**Curve** — The game gets harder as it goes in at least two different ways, rather than only by making things faster, and stays beatable."
      },
      {
        "tier": "Content and filling",
        "q": "**Teaching** — Each mechanic can be tried at least once somewhere safe before the game depends on it."
      },
      {
        "tier": "Content and filling",
        "q": "**Reward** — At least one reward changes what the player can do or where they can go, rather than only raising a number."
      },
      {
        "tier": "Content and filling",
        "q": "**Opposition** — Overcoming the opposition takes at least two different player behaviours."
      },
      {
        "tier": "Content and filling",
        "q": "**Session** — Each level has a defined end the player can stop at and come back from."
      },
      {
        "tier": "Content and filling",
        "q": "**Bugs** — Five minutes of trying to break the game finds nothing visibly wrong — nothing floating, overlapping or drawn in the wrong place, no animation that never settles, no number that disagrees with the screen — and nothing that blocks progress or forces a reload."
      },
      {
        "tier": "Content and filling",
        "q": "**Controls** — A player given no instructions works out every control and every mechanic from the game alone within the first level."
      }
    ],
    versions: [
      { label: 'Gemini 4 Argon', type: 'html', file: ARGON + '3d-platform__gemini-4-argon.html' },
      {
        label: 'Redesign', type: 'html', file: 'Redesign/3d-platform/index.html',
        notes: "# Final Game Notes\n\n### Reviewer's Feedback\n\n- I improved the opening storyline with a longer storm sequence, a \"Press Any Key\" screen, and a skippable intro to make the beginning more engaging.\n- I improved the transition from the intro to gameplay with smoother camera movement and better anticipation before the descent.\n- I adjusted the title screen layout, enlarged the logo and buttons, and removed unnecessary supporting text to make the menu cleaner.\n- I improved the logo's letter spacing and typography to make the title easier to read.\n- I increased font sizes throughout the UI and updated the font styling for better readability and consistency.\n- I simplified the Settings menu by keeping the volume slider and making the Back button secondary.\n- I improved the How to Play menu with visual instructions, keyboard and controller mappings, and a layout that doesn't require scrolling.\n- I updated the level selection screen with clearer names, thumbnails, difficulty information, and improved button states.\n- I simplified the gameplay HUD to make important information easier to follow without covering the action.\n- I cleaned up the Pause menu and improved its layout to keep navigation simple.\n- I improved the ending sequence with closer camera framing, smoother movement, and better presentation of the final scene.\n- I adjusted the final scene's composition, lighting, and camera transitions to make the family reunion more emotional.\n- I improved the ending music and visual atmosphere to create a warmer and more hopeful conclusion.\n- I fixed the issue where the baby penguin could become unreachable near the end of a level.\n\n### Additional Gameplay Improvements\n\n- I improved player collision handling and recovery to prevent the penguin from getting stuck against obstacles.\n- I adjusted checkpoints and surrounding obstacles to make them easier to reach without accidental collisions.\n- I improved the ramps with better positioning, clearer takeoff areas, and safer landing zones.\n- I added breakable snow walls that react to high-speed sliding, making momentum more useful during gameplay.\n- I improved speed corridors with clearer entrances, smoother paths, and fewer obstacles blocking the player.\n- I reworked shortcuts with accessible cave entrances, continuous terrain, and better connections to the main routes.\n- I widened sharp turns and adjusted obstacle placement to give players more time to react.\n- I improved branching paths with safer alternatives and more challenging shortcuts to encourage different routes.\n- I added bright orange emissive ground arrows and animated directional indicators to make navigation easier at high speeds.\n- I improved collectible fish with sparkling particles, glow effects, and more satisfying collection feedback.\n- I improved blue power-ups with brighter materials, animated lightning effects, and better visibility.\n- I added a transparent blue protective shield around the penguin with impact reactions and clear expiration effects.\n- I enhanced speed power-ups with stronger wind streaks, flowing particles, and shockwave effects.\n- I improved falling rocks with visible warning zones, snow particles, camera shake, and automatic removal after impact.\n- I adjusted wolf encounters with clearer attack warnings, better positioning, and more controlled collision penalties.\n- I improved the rescued chicks so they follow the mother more naturally and react to movement and nearby dangers.\n- I added more expressive chick reactions during boss encounters to make the characters feel more alive.\n- I improved boss rock targeting and positioning to reduce unfair attacks and keep more space available for dodging.\n- I added planned gameplay sequences combining fish trails, gaps, speed boosts, ramps, and shortcuts to make each mountain more interesting.\n- I improved the difficulty progression across the four mountains by introducing more demanding route combinations.\n- I added near-miss effects with snow bursts and wind streaks to make close calls at high speed more exciting.\n- I improved atmospheric snowfall with more visible particles while keeping the track and obstacles readable.\n\n### Bug Fixes & Final Polish\n\n- I fixed the pause menu randomly opening during gameplay and repeatedly appearing after clicking Resume.\n- I corrected the audio behavior so pausing and resuming no longer change the player's sound preferences.\n- I improved snow and ice rendering to reduce flickering, overlapping surfaces, and z-fighting.\n- I adjusted object placement and terrain alignment to reduce floating props and clipping.\n- I improved particle visibility and glow effects while keeping the gameplay readable.\n- I refined the sliding speed effects with stronger snow trails and better visual feedback during fast descents.\n- I cleaned up unnecessary signs and interface elements to reduce visual clutter.\n- I prevented unwanted text selection and browser scrolling during gameplay.\n- I preserved the game's procedural 3D environments, characters, effects, and animations within a single HTML file.\n- I also created a separate final boss preview with the boss one hit away from defeat, making it easier to showcase the final battle and ending sequence.",
        marks: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
        comments: [
          "Sliding makes the penguin much faster than running, but reduces steering control as intended.",
          "I implemented running, turning, jumping, deep snow slowdown, and slippery ice with reduced grip.",
          "Each mountain has a countdown, different hazards, shortcuts, knockdowns, and clear win/fail conditions.",
          "I need to introduce jumping before sliding, make the first practice slope longer, and reduce early hazards.",
          "The eagle boss and timed-out chick capture work, but I still need the eagle to patrol and swoop during regular descents.",
          "I added collectible fish, score rewards, speed boosts, and shields that protect against a knockdown.",
          "Rescued chicks appear in story scenes, but I need them to actually follow the mother during later mountains.",
          "The HUD displays the countdown, chick direction and distance, speed, fish count, and active boss state.",
          "The menus and story transitions work, but I need to explain the remaining enemy and hazard types in How to Play.",
          "I need to time a complete first-time playthrough and make sure it takes at least 15 minutes.",
          "Later mountains introduce boss encounters, more enemies, different environments, and more challenging situations.",
          "I increased difficulty through narrower paths, tighter starting clocks, more enemies, and tougher boss encounters.",
          "I need safer practice opportunities for advanced hazards and boss mechanics before they become mandatory.",
          "Fish improve running speed, while shields, speed bursts, and the hidden cave change how I can approach the route.",
          "Players must jump, dodge, and slide through hazards, while bosses require baiting attacks and dodging at the right moment.",
          "Each mountain has its own ending, and I save completed-level progress so players can return later.",
          "I still need a five-minute stress test to check clipping, floating objects, animation issues, and progression blockers.",
          "I need to teach every control and major mechanic within the first level, including a safe introduction to boss behavior."
        ],
      },
    ],
  },
  {
    nav: 'Rhythm',
    genre: 'Rhythm',
    title: 'OARSONG — Rhythm of the Northern Sea',
    description: 'Row to the beat of the war drums. Waves and weather rise with the song, pitching the ship and sweeping spray across the deck. Read the true rhythm through the storm motion — the sea never alters the musical beat.',
    // Rubric and Redesign notes from saida (1).jsonl (final rubric evaluation).
    questions: [
      {
        "tier": "The design document",
        "q": "**Core mechanic** — Notes ride four lanes over the deck toward a hit line, each lane struck with its own key; striking a note as it crosses the line rows the crew and pushes the ship forward, while striking off the beat throws the rowers out of sync and drags the ship toward sinking."
      },
      {
        "tier": "The design document",
        "q": "**Mechanics — the player** — Every strike is judged against the beat: a clean hit rows the crew and feeds the score, a weak hit rows them but earns less, and a missed note breaks the rowers' rhythm; consecutive clean hits build a combo multiplier that raises the score each further hit earns, and any miss resets it; a single shared crew cohesion meter refills on clean hits and empties on misses, and at zero the rowers fall out of time and the ship sinks, ending the voyage; forward progress is the score, and reaching the required score before the song ends completes the voyage; a voyage is won by reaching the required score before the song ends and lost by sinking or by letting the song end short of the score."
      },
      {
        "tier": "The design document",
        "q": "**Mechanics — the world** — Waves and weather rise as the song builds, rocking the ship and pitching the note lanes so the beat must be read through motion and spray, without ever changing the beat itself."
      },
      {
        "tier": "The design document",
        "q": "**Onboarding** — The How to play screen explains the four lanes, the hit line and what each meter means; the first voyage brings the lanes in one at a time and lets the player find the beat before scoring demands it, and each mechanic appears with a short callout before it matters."
      },
      {
        "tier": "The design document",
        "q": "**Enemies** — The opposition is the sea and the song rather than any enemy: rising intensity pitches the ship, spray sweeps the deck, and the song presses the player to keep a beat that keeps building, while the crew's cohesion is the meter that fights back."
      },
      {
        "tier": "The design document",
        "q": "**Rewards and power-ups** — Clean hits pay out in score and build the combo multiplier; filling cohesion to the top unleashes a war cry that turns clean hits into bonus score until a miss ends it, and completing a voyage unlocks the next one."
      },
      {
        "tier": "The design document",
        "q": "**Progression** — Later voyages ask more of the player's rhythm and add new things to handle — denser note patterns, rougher seas and less forgiving cohesion — rather than only raising a number."
      },
      {
        "tier": "The design document",
        "q": "**Interface — in play** — The in-play interface shows the note lanes and hit line, the timing judgment of the last strike, the combo multiplier, the crew cohesion meter, how far the ship is from the required score, and how rough the sea and the beat are getting."
      },
      {
        "tier": "The design document",
        "q": "**Interface — menus** — Beyond the required screens, the menus add a voyage select that lets the player pick an unlocked voyage, start it, or return to the main menu, and a how-to-play explanation of the four lanes, the hit line and what each meter means."
      },
      {
        "tier": "Content and filling",
        "q": "**Volume** — A competent first-time player needs at least fifteen minutes to beat the game."
      },
      {
        "tier": "Content and filling",
        "q": "**Variety** — Later parts of the game add at least one new element — a hazard, an enemy, a mechanic or a situation — rather than only more of the same."
      },
      {
        "tier": "Content and filling",
        "q": "**Curve** — The game gets harder as it goes in at least two different ways, rather than only by making things faster, and stays beatable."
      },
      {
        "tier": "Content and filling",
        "q": "**Teaching** — Each mechanic can be tried at least once somewhere safe before the game depends on it."
      },
      {
        "tier": "Content and filling",
        "q": "**Reward** — At least one reward changes what the player can do or where they can go, rather than only raising a number."
      },
      {
        "tier": "Content and filling",
        "q": "**Opposition** — Overcoming the opposition takes at least two different player behaviours."
      },
      {
        "tier": "Content and filling",
        "q": "**Session** — Each voyage has a defined end the player can stop at and come back from."
      },
      {
        "tier": "Content and filling",
        "q": "**Bugs** — Five minutes of trying to break the game finds nothing visibly wrong — nothing floating, overlapping or drawn in the wrong place, no animation that never settles, no number that disagrees with the screen — and nothing that blocks progress or forces a reload."
      },
      {
        "tier": "Content and filling",
        "q": "**Controls** — A player given no instructions works out every control and every mechanic from the game alone within the first voyage."
      }
    ],
    versions: [
      { label: 'Gemini 4 Argon', type: 'html', file: ARGON + 'rhythm__gemini-4-argon.html' },
      {
        label: 'Redesign', type: 'html', file: 'Redesign/rhythm/index.html',
        notes: "Thank you for the last note. Streak mode now feels like a reward: during the war cry the note letters are painted in the streak gold (#ffc84a) with the same dark outline as in normal play, the disc keeps its lane colour, and each note gets a soft gold halo that pulses on the beat. The letters never turn dark any more, and I measured them on this build: inside the shield, dark pixels during the war cry are now about 3 percent, close to the 1 percent of normal play, where before they jumped to 24 percent.\n\nEverything from the previous round is unchanged:\n\nGameplay\nThe hit now happens on the drum. The perfect moment is the instant a note lands on the centre of its drumhead, where the stick strikes and the sparks fly, like a gem on a Guitar Hero fret. The lanes now run all the way to the drums, rising gently so their ends meet the drumheads, and the notes slide straight onto the drumhead without jumping or hiding behind the drum. The target rings became glowing rims on the drumheads, and the bursts, beams, judgements and the practice freeze all happen there. Measured on this build: at the perfect moment a note sits within about a tenth of a drumhead width of the drumhead centre in all four lanes, against a third to a half before. The read time is unchanged, 3.5 s from the far end, and the hull still never touches the lanes, rails or drums at the largest roll.\nThe ship never stops. It now always sails at a steady cruise, clean hits push it up to full speed, and a miss slows it down smoothly instead of stopping it. Measured in all six voyages, the speed never drops below 40 percent of top speed, not even with misses or with no input. The charts no longer leave dead air: calm stretches now use spaced single notes instead of silence, and no gap between notes is longer than two beats in any voyage, where before every voyage had 7 to 11 gaps longer than a bar (up to 12.6 s). The breathing between busy phrases from the last review is kept, the note and hold counts are the same, and notes that read like an accidental double are gone.\n\nOnboarding\nThe tutorial is now two short steps: two single taps, then one hold. It pauses only at the first tap and at the hold, and the panel shows \"Step 1 / 2\" and \"Step 2 / 2\". The double press and the stray strike exercise left the practice: doubles are learned in play, announced in voyage 2 by a short callout and a few unscored doubles that do not pause, and stray strikes stay explained in How to play.\n\nDesign\nHold notes now work like Guitar Hero sustains: while held, the tail lights up and glows, it is eaten at the drumhead with a hot spot and a stream of sparks, and its note keeps ringing; on an early release the rest of the tail turns pale grey at once and fades. The timing tolerance from the last review is kept.\nThe streak number always fits inside the dark centre of the combo shield: the font scales with the number of digits, and I checked it from single digits up to 1000. Streak callouts like \"50 NOTE STREAK!\" now appear every 50 notes, as in your Guitar Hero reference.\n\nAlso added\nThe water reacts to what touches it: the oars leave foam as they row, rocks and islets wear a foam collar, dolphins and the whale splash as they surface, and the hull has a waterline foam line. Every voyage still holds 60 fps.",
        marks: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
        comments: [
          "Notes ride four lanes over the deck straight onto four war drums, each lane with its own key, D, F, J and K, and the perfect moment is when the note lands on the centre of its drumhead, where the stick strikes. A clean strike rows the crew, plays the next note of the song's melody and pushes the longship forward, while a key pressed with no note near is a stray strike that flashes the lane red, breaks the combo and drains a little cohesion.",
          "Every strike is judged against the beat without words: a clean hit fires a gold ring and a tall beam from the drum, with a quick gold flash on the drum at x3 and x4, a weak hit shows a small grey ring and a short beam, and a miss shatters the shield on the drum and dims the lane. While a hold is held its tail glows, is eaten at the drumhead with a steady stream of sparks and its note keeps ringing; letting go early turns the rest of the tail pale grey at once, and released after the first quarter it still counts as a correct hit with part of its bonus. Clean hits build the combo and the multiplier ring, any miss resets it, cohesion refills on clean hits and drains on misses, and at zero the ship sinks. Reaching the gold marker on the top bar before the song ends wins the voyage, and ending short of it loses.",
          "The sea builds inside every voyage: the sea gauge on the top bar climbs from one wave to three as the song goes on, with more wind streaks, whitecaps, rain and spray, and each voyage has its own weather and coast, from a calm dusk fjord to a night gale among the skerries, where lightning bolts strike the sea beside the ship. In voyage 6 the storm breaks into a calm coda, the sun comes out and a rainbow rises over the fjord. As the game designer asked, the lanes and the hit line stay still on screen, so the ship rocks gently while the beat never changes, and the drums sit on a fixed platform so the hull never cuts them.",
          "The first Start opens six short How to play pages (lanes and drums, note types, stray strikes, cohesion and the war cry, the multiplier and the song bar, controls) and then a short guided practice in two steps, two single taps and one hold, whose instructions sit centred above the drums; it stops only at the first tap and at the hold until the right key is pressed. Doubles are learned in play: voyage 2 announces them with a callout and a few unscored doubles that play through without pausing. Voyage 1 brings the lanes in one at a time, only D, then D and F, then three, then all four.",
          "There are no enemies, as the design document says. The sea and the song push back: the weather rises inside every voyage and from one voyage to the next, the patterns get faster and denser, and cohesion is the meter the crew fights with.",
          "Clean hits pay score and raise the multiplier, and playing well is felt at once: from a 10 streak the score board glows gold and beats with the music like a heart, from x2 the multiplier ring does the same and the lane edges become pulsing gold rails that grow at x3 and x4. Each step up the multiplier fires a gold shockwave, sparks and a horn sting, at x4 clean hits beam gold from the drums and the wake turns gold, streak callouts like \"50 NOTE STREAK!\" appear above the lanes every 50 notes, a 30 streak raises a rainbow in a sun shower in the calm voyages and dolphins leap beside the hull. A full cohesion meter lights the horn and starts the war cry: the highway border blazes gold, the notes brighten with gold letters on their lane colours and a soft gold halo that pulses on the beat, gold lightning strikes on every bar and every clean hit earns bonus score until a miss ends it. Finishing a voyage unlocks the next one.",
          "Later voyages ask more: doubles in voyage 2, holds in voyage 3, then everything mixed, from 76 to 120 bpm and from about 37 to 76 notes a minute on average, with harder storm sections that always give way to lighter phrases, and rougher seas. The notes never stop flowing: calm stretches use spaced single notes instead of silence, so no gap between notes is longer than two beats. Cohesion forgives a little less each voyage, a miss costs 6 points in voyage 1 and 11 in voyage 6, and the clean hits right after a miss recover it faster.",
          "The HUD sits on the edges of the lanes on one carved board beside the hull: the score and the war horn at the top, the segmented cohesion meter running down to the drums and the Esc key with a pause button, with the combo shield and the multiplier ring on the right; the combo number always fits inside the dark centre of its shield, up to four digits. The top bar shows the voyage, the required score marker, the seconds left, a sea gauge and the bpm, and the timing judgement shows as the ring, beam and shield on the drums.",
          "After the first run, Start opens a voyage select with locked and unlocked voyages, stars and best score, a Start button and Back. How to play has the six pages from the main menu and from the pause menu and always opens on page 1. The pause menu has the Music and Sound effects sliders right in it, plus Resume, Controls, Settings with Sound on/off, Restart voyage and Exit to main menu.",
          "Six voyages from 2:20 to 3:00 add up to about 16 minutes of songs, plus the How to play pages, the practice, the intro and the ending, so a first time player who retries a voyage or two needs well over fifteen minutes.",
          "Every voyage adds something new: lanes opening in voyage 1, doubles in voyage 2, holds in voyage 3, holds and doubles mixed in voyage 4, the storm of voyage 5 and everything together in the gale of voyage 6, which breaks into a calm coda with a whale rising. Each has its own song, weather and place, the charts are written in phrases with calm intros, busy choruses and lighter bridges that keep the notes flowing, the longship never stops sailing, and the music follows the same form, thin in the intro, full in the chorus and quiet in the bridge.",
          "It gets harder in tempo, from 76 to 120 bpm, in density, from about 35 to 76 notes a minute with a storm peak in voyage 6, in note types and in rougher weather, while every voyage keeps lighter phrases to recover and the first voyages stay gentle enough to learn on.",
          "The guided practice before voyage 1 lets the player try two taps and a hold without losing anything and waits only at the first tap and at the hold, and each voyage that brings a new note type opens with a few unscored practice notes, which play through without pausing, before it costs cohesion.",
          "Completing a voyage unlocks the next one in the voyage select, so the reward changes where the player can go, and the voyage select shows the stars and the best score of every voyage.",
          "The player has to tap on the beat, hold through a tail, press two keys together on doubles and keep their hands quiet between notes to avoid stray strikes.",
          "Each voyage ends on a results screen with the notes hit, the longest streak, the stars and the best score, and progress, stars and best scores are saved, so the player can stop after any voyage and come back from the voyage select.",
          "I spent time trying to break it: pausing in the middle of a hold, mashing keys, restarting, losing on purpose, switching tabs and resizing the window, and playing through all six voyages and the ending on this build. The ship never touches the drums, the rails or the sand, it never stops sailing, the numbers match the screen and nothing blocks progress.",
          "Voyage 1 opens one lane at a time with the key drawn on each drum, the callouts name each new key, the war cry lights in the first voyage with a short callout, the Esc key sits on the HUD board with a pause icon, and the How to play pages are one click away in the pause menu."
        ],
      },
    ],
  },
];
