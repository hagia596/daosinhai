/**
 * Complete I Ching 64 Hexagrams Data
 * Based on King Wen order with comprehensive meanings and interpretations
 */

export const HEXAGRAMS_DATA = [
  {
    number: 1,
    name: "乾",
    nameEnglish: "Qian - The Creative",
    symbol: "䷀",
    description: "Heaven. The Creative. Pure Yang energy. Represents strength, action, and creation.",
    meaning: "The beginning of all things. Pure creative force. Represents heaven, strength, and the masculine principle.",
    interpretation: "This hexagram symbolizes the creative principle in its purest form. It represents potential, initiative, and the power to bring things into being.",
    advice: "Take initiative. Trust your strength. Be bold and creative. This is a time for action and new beginnings.",
    lines: [
      { position: 1, type: "yang", meaning: "Hidden dragon - not yet time to act" },
      { position: 2, type: "yang", meaning: "Dragon appearing in the field - time to see great people" },
      { position: 3, type: "yang", meaning: "Creative man works all day - be careful not to overextend" },
      { position: 4, type: "yang", meaning: "Dragon hovering in the sky - decide whether to advance or retreat" },
      { position: 5, type: "yang", meaning: "Flying dragon in the sky - favorable to see great people" },
      { position: 6, type: "yang", meaning: "Arrogant dragon will have cause for regret" }
    ],
    relatedHexagrams: [2, 14, 43]
  },
  {
    number: 2,
    name: "坤",
    nameEnglish: "Kun - The Receptive",
    symbol: "䷁",
    description: "Earth. The Receptive. Pure Yin energy. Represents receptivity, support, and nurturing.",
    meaning: "The receptive principle. Pure Yin energy. Represents earth, receptivity, and the feminine principle.",
    interpretation: "This hexagram symbolizes the receptive principle in its purest form. It represents support, nurturing, and the power to receive and sustain.",
    advice: "Be receptive and supportive. Trust in nurturing. Embrace your receptive nature. This is a time for support and growth.",
    lines: [
      { position: 1, type: "yin", meaning: "Treading on frost - solid ice will come" },
      { position: 2, type: "yin", meaning: "Straight, square, great - nothing not beneficial" },
      { position: 3, type: "yin", meaning: "Hidden lines - capable of perseverance" },
      { position: 4, type: "yin", meaning: "Tied up in a bag - no blame, no praise" },
      { position: 5, type: "yin", meaning: "Yellow lower garment - supreme good fortune" },
      { position: 6, type: "yin", meaning: "Dragons fight in the field - blood is black and yellow" }
    ],
    relatedHexagrams: [1, 15, 44]
  },
  {
    number: 3,
    name: "屯",
    nameEnglish: "Zhun - Difficulty at the Beginning",
    symbol: "䷂",
    description: "Water over Thunder. New growth and difficulty. Represents the struggle of beginning.",
    meaning: "Difficulty at the beginning. New growth and struggle. Represents the challenges of starting.",
    interpretation: "This hexagram represents the principle of difficulty at the beginning. It shows how new things must struggle to emerge.",
    advice: "Persevere through initial difficulties. Seek support. This is a time for patience and persistence.",
    lines: [
      { position: 1, type: "yang", meaning: "Hesitation and difficulty - advantageous to remain persevering" },
      { position: 2, type: "yin", meaning: "Difficulties multiply - a horse team is lost" },
      { position: 3, type: "yin", meaning: "Hunting in the forest - advantageous to advance" },
      { position: 4, type: "yin", meaning: "A horse team is lost - seek union - good fortune" },
      { position: 5, type: "yin", meaning: "Difficulties in blessing - small good fortune" },
      { position: 6, type: "yin", meaning: "A horse team is lost - weeping blood in streams" }
    ],
    relatedHexagrams: [2, 4, 29]
  },
  {
    number: 4,
    name: "蒙",
    nameEnglish: "Meng - Youthful Folly",
    symbol: "䷃",
    description: "Mountain over Water. Ignorance and learning. Represents the need for education.",
    meaning: "Youthful folly. Ignorance and learning. Represents the need for instruction.",
    interpretation: "This hexagram represents the principle of youthful folly and the need for education. It emphasizes the importance of seeking guidance.",
    advice: "Seek instruction. Learn from experience. This is a time for education and growth.",
    lines: [
      { position: 1, type: "yin", meaning: "To punish folly - advantageous to remove shackles" },
      { position: 2, type: "yang", meaning: "Bearing with folly brings good fortune" },
      { position: 3, type: "yin", meaning: "Do not take a woman - seeing a man of bronze" },
      { position: 4, type: "yin", meaning: "Bound folly - humiliation" },
      { position: 5, type: "yin", meaning: "Youthful folly - good fortune" },
      { position: 6, type: "yang", meaning: "Punishing folly - not advantageous to attack" }
    ],
    relatedHexagrams: [3, 5, 8]
  },
  {
    number: 5,
    name: "需",
    nameEnglish: "Xu - Waiting",
    symbol: "䷄",
    description: "Water over Heaven. Waiting and nourishment. Represents the need for patience.",
    meaning: "Waiting. Patience and nourishment. Represents the principle of waiting.",
    interpretation: "This hexagram represents the principle of waiting and patience. It shows how proper timing is essential for success.",
    advice: "Wait patiently. Trust in timing. This is a time for patience and proper nourishment.",
    lines: [
      { position: 1, type: "yang", meaning: "Waiting in the meadow - advantageous for persistence" },
      { position: 2, type: "yin", meaning: "Waiting on sand - small talk - in the end good fortune" },
      { position: 3, type: "yin", meaning: "Waiting in mud - brings about the arrival of the enemy" },
      { position: 4, type: "yin", meaning: "Waiting in blood - emerge from the cave" },
      { position: 5, type: "yang", meaning: "Waiting with wine and food - perseverance brings good fortune" },
      { position: 6, type: "yin", meaning: "Enter the cave - three uninvited guests arrive" }
    ],
    relatedHexagrams: [4, 6, 9]
  },
  {
    number: 6,
    name: "訟",
    nameEnglish: "Song - Conflict",
    symbol: "䷅",
    description: "Heaven over Water. Conflict and opposition. Represents disputes and resolution.",
    meaning: "Conflict. Opposition and dispute. Represents the principle of conflict.",
    interpretation: "This hexagram represents the principle of conflict and opposition. It warns against conflict but shows how to resolve it.",
    advice: "Avoid conflict when possible. Seek resolution. This is a time for careful negotiation.",
    lines: [
      { position: 1, type: "yin", meaning: "Not perpetuating the affair - small talk brings good fortune" },
      { position: 2, type: "yin", meaning: "Cannot contend - return to your home" },
      { position: 3, type: "yin", meaning: "Nourished by ancient virtue - perseverance brings good fortune" },
      { position: 4, type: "yang", meaning: "Cannot contend - turn back and accept fate" },
      { position: 5, type: "yang", meaning: "Contending - supreme good fortune" },
      { position: 6, type: "yang", meaning: "Even if given a leather belt, by noon it is taken away" }
    ],
    relatedHexagrams: [5, 7, 13]
  },
  {
    number: 7,
    name: "師",
    nameEnglish: "Shi - The Army",
    symbol: "䷆",
    description: "Earth over Water. Organization and discipline. Represents military order.",
    meaning: "The army. Organization and discipline. Represents collective action.",
    interpretation: "This hexagram represents the principle of organization and discipline. It emphasizes the importance of proper structure.",
    advice: "Organize properly. Maintain discipline. This is a time for collective action.",
    lines: [
      { position: 1, type: "yin", meaning: "The army must move with discipline - misfortune otherwise" },
      { position: 2, type: "yin", meaning: "In the midst of the army - good fortune, no blame" },
      { position: 3, type: "yin", meaning: "The army may have corpses - misfortune" },
      { position: 4, type: "yin", meaning: "The army retreats - no blame" },
      { position: 5, type: "yang", meaning: "There is game in the field - advantageous to capture" },
      { position: 6, type: "yin", meaning: "The great prince issues commands - small people are established" }
    ],
    relatedHexagrams: [6, 8, 29]
  },
  {
    number: 8,
    name: "比",
    nameEnglish: "Bi - Holding Together",
    symbol: "䷇",
    description: "Water over Earth. Union and cooperation. Represents togetherness and support.",
    meaning: "Holding together. Union and cooperation. Represents the power of unity.",
    interpretation: "This hexagram represents the principle of holding together and unity. It emphasizes the importance of cooperation.",
    advice: "Seek unity and cooperation. Hold together. This is a time for togetherness.",
    lines: [
      { position: 1, type: "yin", meaning: "Sincere holding together - no blame" },
      { position: 2, type: "yin", meaning: "Holding together from within - perseverance brings good fortune" },
      { position: 3, type: "yin", meaning: "Holding together with the wrong people - misfortune" },
      { position: 4, type: "yang", meaning: "Holding together outwardly - perseverance brings good fortune" },
      { position: 5, type: "yang", meaning: "Manifestation of holding together - the king hunts with three beaters" },
      { position: 6, type: "yang", meaning: "No head for holding together - misfortune" }
    ],
    relatedHexagrams: [7, 9, 16]
  },
  {
    number: 9,
    name: "小畜",
    nameEnglish: "Xiao Xu - Small Taming",
    symbol: "䷈",
    description: "Wind over Heaven. Small restraint and accumulation. Represents gentle control.",
    meaning: "Small taming. Gentle restraint and accumulation. Represents small discipline.",
    interpretation: "This hexagram represents the principle of small taming and gentle restraint. It shows how small disciplines lead to great results.",
    advice: "Exercise gentle restraint. Accumulate gradually. This is a time for small disciplines.",
    lines: [
      { position: 1, type: "yang", meaning: "Return to the way - what blame?" },
      { position: 2, type: "yin", meaning: "Drawn back - good fortune" },
      { position: 3, type: "yin", meaning: "The spokes of the wheel fall out - husband and wife avert their eyes" },
      { position: 4, type: "yin", meaning: "Sincerity in the center - blood and terror disappear" },
      { position: 5, type: "yin", meaning: "Sincerity in the center - bonds of wealth - the neighbor is not at fault" },
      { position: 6, type: "yang", meaning: "The rain has come and rests - the accumulation reaches its peak" }
    ],
    relatedHexagrams: [8, 10, 26]
  },
  {
    number: 10,
    name: "履",
    nameEnglish: "Lu - Treading",
    symbol: "䷉",
    description: "Heaven over Lake. Conduct and propriety. Represents proper behavior and walking.",
    meaning: "Treading. Conduct and propriety. Represents the way of walking.",
    interpretation: "This hexagram represents the principle of treading and proper conduct. It emphasizes the importance of correct behavior.",
    advice: "Conduct yourself properly. Tread carefully. This is a time for correct behavior.",
    lines: [
      { position: 1, type: "yang", meaning: "Treading simply - going forward without blame" },
      { position: 2, type: "yin", meaning: "Treading on a smooth path - the hermit perseveres" },
      { position: 3, type: "yin", meaning: "The one-eyed can see - the lame can walk - treading on the tail" },
      { position: 4, type: "yang", meaning: "Treading on the tail - trembling in fear - in the end good fortune" },
      { position: 5, type: "yang", meaning: "Treading firmly - perseverance brings good fortune" },
      { position: 6, type: "yang", meaning: "Treading and looking back - supreme good fortune" }
    ],
    relatedHexagrams: [9, 11, 15]
  },
  {
    number: 11,
    name: "泰",
    nameEnglish: "Tai - Peace",
    symbol: "䷊",
    description: "Earth over Heaven. Harmony and peace. Represents balance and prosperity.",
    meaning: "Peace. Harmony and balance. Represents the principle of peace.",
    interpretation: "This hexagram represents the principle of peace and harmony. It shows how heaven and earth work together in balance.",
    advice: "Seek peace and harmony. Maintain balance. This is a time for prosperity.",
    lines: [
      { position: 1, type: "yang", meaning: "When the grass is pulled out, the sod comes with it - each in its kind" },
      { position: 2, type: "yang", meaning: "Bearing with the uncultivated - crossing the great stream" },
      { position: 3, type: "yang", meaning: "No plain not followed by a slope - no going not followed by return" },
      { position: 4, type: "yin", meaning: "He flutters down - not boasting of his wealth" },
      { position: 5, type: "yin", meaning: "The sovereign I gives his daughter in marriage - supreme good fortune" },
      { position: 6, type: "yin", meaning: "The wall falls back into the moat - use no army now" }
    ],
    relatedHexagrams: [10, 12, 19]
  },
  {
    number: 12,
    name: "否",
    nameEnglish: "Pi - Standstill",
    symbol: "䷋",
    description: "Heaven over Earth. Stagnation and blockage. Represents obstacles and decline.",
    meaning: "Standstill. Stagnation and blockage. Represents the principle of stagnation.",
    interpretation: "This hexagram represents the principle of standstill and stagnation. It warns of obstacles but shows how to endure them.",
    advice: "Endure stagnation. Maintain integrity. This is a time for patience.",
    lines: [
      { position: 1, type: "yin", meaning: "When the grass is pulled out, the sod comes with it - each in its kind" },
      { position: 2, type: "yin", meaning: "Bearing and bringing - small people good fortune" },
      { position: 3, type: "yin", meaning: "Bearing shame" },
      { position: 4, type: "yang", meaning: "He who acts at the command of the supreme will - no blame" },
      { position: 5, type: "yang", meaning: "Standstill is changing - good fortune for the great man" },
      { position: 6, type: "yang", meaning: "When the standstill ends - first standstill, then joy" }
    ],
    relatedHexagrams: [11, 13, 20]
  },
  {
    number: 13,
    name: "同人",
    nameEnglish: "Tong Ren - Fellowship with Men",
    symbol: "䷌",
    description: "Fire over Heaven. Fellowship and unity. Represents brotherhood and togetherness.",
    meaning: "Fellowship with men. Unity and brotherhood. Represents the principle of fellowship.",
    interpretation: "This hexagram represents the principle of fellowship and unity among people. It emphasizes the power of working together.",
    advice: "Seek fellowship. Work together. This is a time for unity and brotherhood.",
    lines: [
      { position: 1, type: "yang", meaning: "Fellowship at the gate - no blame" },
      { position: 2, type: "yin", meaning: "Fellowship within the family - regret" },
      { position: 3, type: "yin", meaning: "He hides weapons in the thicket - he climbs the high hill" },
      { position: 4, type: "yang", meaning: "He climbs the wall - cannot attack - good fortune" },
      { position: 5, type: "yang", meaning: "Men in fellowship first weep and shout - then laugh" },
      { position: 6, type: "yang", meaning: "Fellowship in the meadow - no regret" }
    ],
    relatedHexagrams: [12, 14, 30]
  },
  {
    number: 14,
    name: "大有",
    nameEnglish: "Da You - Great Possession",
    symbol: "䷍",
    description: "Fire over Heaven. Abundance and wealth. Represents great possession and prosperity.",
    meaning: "Great possession. Abundance and wealth. Represents the principle of great possession.",
    interpretation: "This hexagram represents the principle of great possession and abundance. It emphasizes the importance of proper use of wealth.",
    advice: "Use abundance wisely. Share prosperity. This is a time for great possession.",
    lines: [
      { position: 1, type: "yin", meaning: "No relationship with what is harmful - no blame" },
      { position: 2, type: "yin", meaning: "The great wagon for loading - advantageous to go somewhere" },
      { position: 3, type: "yin", meaning: "The prince makes an offering to heaven - the small cannot do it" },
      { position: 4, type: "yang", meaning: "Not boasting of his wealth - no blame" },
      { position: 5, type: "yang", meaning: "Sincerity in the center - bonds of wealth - no blame" },
      { position: 6, type: "yang", meaning: "Blessed by heaven - good fortune, nothing not beneficial" }
    ],
    relatedHexagrams: [13, 15, 34]
  },
  {
    number: 15,
    name: "謙",
    nameEnglish: "Qian - Modesty",
    symbol: "䷎",
    description: "Earth over Mountain. Humility and modesty. Represents humble conduct.",
    meaning: "Modesty. Humility and humble conduct. Represents the principle of modesty.",
    interpretation: "This hexagram represents the principle of modesty and humility. It shows how humility leads to success.",
    advice: "Be modest and humble. Conduct yourself humbly. This is a time for modesty.",
    lines: [
      { position: 1, type: "yin", meaning: "Modesty in its expression - advantageous to cross the great stream" },
      { position: 2, type: "yin", meaning: "Modesty in its expression - good fortune" },
      { position: 3, type: "yin", meaning: "The superior man of modesty - perseverance brings good fortune" },
      { position: 4, type: "yang", meaning: "Nothing not beneficial - modesty in movement" },
      { position: 5, type: "yin", meaning: "Not enriching his neighbor - advantageous to attack" },
      { position: 6, type: "yang", meaning: "Modesty in its expression - advantageous to move the army" }
    ],
    relatedHexagrams: [14, 16, 21]
  },
  {
    number: 16,
    name: "豫",
    nameEnglish: "Yu - Enthusiasm",
    symbol: "䷏",
    description: "Thunder over Earth. Joy and enthusiasm. Represents excitement and readiness.",
    meaning: "Enthusiasm. Joy and excitement. Represents the principle of enthusiasm.",
    interpretation: "This hexagram represents the principle of enthusiasm and joy. It emphasizes the importance of positive energy.",
    advice: "Embrace enthusiasm. Cultivate joy. This is a time for positive energy.",
    lines: [
      { position: 1, type: "yin", meaning: "Enthusiasm expressed - misfortune" },
      { position: 2, type: "yin", meaning: "Firm as a rock - not a day's delay - good fortune" },
      { position: 3, type: "yin", meaning: "Hesitant enthusiasm - regret" },
      { position: 4, type: "yang", meaning: "Great enthusiasm brings achievement - do not doubt" },
      { position: 5, type: "yin", meaning: "Persistent illness - but not unto death" },
      { position: 6, type: "yin", meaning: "Enthusiasm that leads astray - change brings regret" }
    ],
    relatedHexagrams: [15, 17, 22]
  },
  {
    number: 17,
    name: "隨",
    nameEnglish: "Sui - Following",
    symbol: "䷐",
    description: "Thunder over Lake. Following and adaptation. Represents flexibility and going with the flow.",
    meaning: "Following. Adaptation and flexibility. Represents the ability to follow and adapt to circumstances.",
    interpretation: "This hexagram represents the principle of following and adaptation. Success comes through flexibility and willingness to follow the right path.",
    advice: "Be flexible and adaptable. Follow the right guidance. This is a time for going with the flow and adapting to circumstances.",
    lines: [
      { position: 1, type: "yin", meaning: "The standard changes - good fortune in going forth" },
      { position: 2, type: "yang", meaning: "Clinging to the little boy - lose the strong man" },
      { position: 3, type: "yang", meaning: "Clinging to the man - lose the little boy - follow and gain" },
      { position: 4, type: "yin", meaning: "Following creates entanglement - perseverance brings good fortune" },
      { position: 5, type: "yang", meaning: "Good faith and confidence - supreme good fortune" },
      { position: 6, type: "yin", meaning: "Bound to him - then to the king's court" }
    ],
    relatedHexagrams: [16, 18, 19]
  },
  {
    number: 18,
    name: "蠱",
    nameEnglish: "Gu - Work on What Has Been Spoiled",
    symbol: "䷑",
    description: "Mountain over Wind. Decay and renewal. Represents the need to address problems and restore order.",
    meaning: "Work on what has been spoiled. Decay and renewal. Represents the need to address problems.",
    interpretation: "This hexagram represents the need to work on what has decayed or been spoiled. It requires effort and determination to restore order.",
    advice: "Address problems directly. Work on restoration and renewal. This is a time for hard work and correction.",
    lines: [
      { position: 1, type: "yang", meaning: "Setting right what has been spoiled by the father" },
      { position: 2, type: "yin", meaning: "Setting right what has been spoiled by the mother" },
      { position: 3, type: "yin", meaning: "Setting right what has been spoiled by the father - slight regret" },
      { position: 4, type: "yin", meaning: "Tolerating what has been spoiled - misfortune" },
      { position: 5, type: "yin", meaning: "Setting right what has been spoiled by the father - praise" },
      { position: 6, type: "yang", meaning: "Not serving kings and princes - setting higher goals" }
    ],
    relatedHexagrams: [17, 19, 20]
  },
  {
    number: 19,
    name: "臨",
    nameEnglish: "Lin - Approach",
    symbol: "䷒",
    description: "Earth over Lake. Approach and drawing near. Represents growth and positive influence.",
    meaning: "Approach. Drawing near and growth. Represents positive influence and expansion.",
    interpretation: "This hexagram represents the principle of approach and drawing near. It indicates a time of growth and positive influence.",
    advice: "Approach with confidence. Expand your influence. This is a time for growth and positive development.",
    lines: [
      { position: 1, type: "yang", meaning: "Joint approach - good fortune" },
      { position: 2, type: "yang", meaning: "Joint approach - supreme good fortune" },
      { position: 3, type: "yin", meaning: "Comfortable approach - nothing not beneficial" },
      { position: 4, type: "yin", meaning: "Complete approach - no blame" },
      { position: 5, type: "yin", meaning: "Wise approach - appropriate for a great prince" },
      { position: 6, type: "yin", meaning: "Magnanimous approach - good fortune, no blame" }
    ],
    relatedHexagrams: [18, 20, 21]
  },
  {
    number: 20,
    name: "觀",
    nameEnglish: "Guan - Contemplation",
    symbol: "䷓",
    description: "Wind over Earth. Observation and contemplation. Represents perspective and understanding.",
    meaning: "Contemplation. Observation and perspective. Represents the ability to see clearly.",
    interpretation: "This hexagram represents the principle of contemplation and observation. It emphasizes the importance of perspective and understanding.",
    advice: "Observe carefully. Gain perspective. This is a time for contemplation and understanding the bigger picture.",
    lines: [
      { position: 1, type: "yin", meaning: "Childlike observation - no blame for the inferior person" },
      { position: 2, type: "yin", meaning: "Observation through the crack - advantageous for a woman" },
      { position: 3, type: "yin", meaning: "Observation of my life - advance or retreat" },
      { position: 4, type: "yin", meaning: "Observation of the light of the kingdom - advantageous to be a guest" },
      { position: 5, type: "yang", meaning: "Observation of my life - the superior person is without blame" },
      { position: 6, type: "yang", meaning: "Observation of his life - the superior person is without blame" }
    ],
    relatedHexagrams: [19, 21, 22]
  },
  {
    number: 21,
    name: "咬嗑",
    nameEnglish: "Shi He - Biting Through",
    symbol: "䷔",
    description: "Fire over Thunder. Obstacles and breakthrough. Represents overcoming difficulties.",
    meaning: "Biting through. Overcoming obstacles. Represents the power to break through difficulties.",
    interpretation: "This hexagram represents the power to bite through obstacles. It indicates a time for overcoming difficulties through determination.",
    advice: "Overcome obstacles. Bite through difficulties. This is a time for determination and breakthrough.",
    lines: [
      { position: 1, type: "yang", meaning: "Shoes off - toes exposed - no blame" },
      { position: 2, type: "yin", meaning: "Biting through meat - nose cut off - no blame" },
      { position: 3, type: "yin", meaning: "Biting through dried meat - slight poison - no blame" },
      { position: 4, type: "yang", meaning: "Biting through dried meat with bone - gains metal - difficult" },
      { position: 5, type: "yin", meaning: "Biting through dried meat - gains yellow metal - perseverance brings danger" },
      { position: 6, type: "yang", meaning: "Wearing the cangue - ears cut off - misfortune" }
    ],
    relatedHexagrams: [20, 22, 23]
  },
  {
    number: 22,
    name: "賁",
    nameEnglish: "Bi - Grace",
    symbol: "䷕",
    description: "Fire over Mountain. Beauty and adornment. Represents elegance and refinement.",
    meaning: "Grace. Beauty and adornment. Represents elegance and refinement.",
    interpretation: "This hexagram represents the principle of grace and beauty. It emphasizes the importance of refinement and elegance.",
    advice: "Cultivate grace and elegance. Adorn yourself with refinement. This is a time for beauty and cultural development.",
    lines: [
      { position: 1, type: "yang", meaning: "Adorning the feet - abandon the carriage, go on foot" },
      { position: 2, type: "yin", meaning: "Adorning the beard" },
      { position: 3, type: "yin", meaning: "Adorning, glistening - perpetual good fortune" },
      { position: 4, type: "yang", meaning: "Adorning in white - no blame" },
      { position: 5, type: "yin", meaning: "Adorning in the hills and gardens - the roll of silk is meager" },
      { position: 6, type: "yang", meaning: "Plain adornment - no blame" }
    ],
    relatedHexagrams: [21, 23, 24]
  },
  {
    number: 23,
    name: "剝",
    nameEnglish: "Bo - Splitting Apart",
    symbol: "䷖",
    description: "Mountain over Earth. Decay and dissolution. Represents the natural process of decline.",
    meaning: "Splitting apart. Decay and dissolution. Represents natural decline and endings.",
    interpretation: "This hexagram represents the natural process of decay and dissolution. It emphasizes acceptance of endings and transitions.",
    advice: "Accept natural decline. Let go of what is ending. This is a time for patience and acceptance.",
    lines: [
      { position: 1, type: "yin", meaning: "The leg of the bed splits - those who destroy it" },
      { position: 2, type: "yin", meaning: "The bed splits at the frame - those who destroy it" },
      { position: 3, type: "yin", meaning: "He splits it - no blame" },
      { position: 4, type: "yin", meaning: "The bed splits at the skin - misfortune" },
      { position: 5, type: "yin", meaning: "A string of fishes - the favor of the palace women" },
      { position: 6, type: "yang", meaning: "The great fruit is not eaten - the superior person gets a carriage" }
    ],
    relatedHexagrams: [22, 24, 25]
  },
  {
    number: 24,
    name: "復",
    nameEnglish: "Fu - Return",
    symbol: "䷗",
    description: "Thunder over Earth. Return and renewal. Represents new beginnings and restoration.",
    meaning: "Return. Renewal and new beginnings. Represents the return of positive energy.",
    interpretation: "This hexagram represents the principle of return and renewal. After decline comes return and restoration.",
    advice: "Return to the beginning. Embrace renewal. This is a time for new starts and restoration.",
    lines: [
      { position: 1, type: "yang", meaning: "Return from a short distance - no regret" },
      { position: 2, type: "yin", meaning: "Quiet return - good fortune" },
      { position: 3, type: "yin", meaning: "Return in confusion - danger" },
      { position: 4, type: "yin", meaning: "Return alone - following the path" },
      { position: 5, type: "yin", meaning: "Sincere return - no regret" },
      { position: 6, type: "yin", meaning: "Confused return - misfortune, disaster" }
    ],
    relatedHexagrams: [23, 25, 26]
  },
  {
    number: 25,
    name: "無妄",
    nameEnglish: "Wu Wang - Innocence",
    symbol: "䷘",
    description: "Heaven over Thunder. Innocence and spontaneity. Represents natural action without artifice.",
    meaning: "Innocence. Natural action and spontaneity. Represents acting without pretense.",
    interpretation: "This hexagram represents the principle of innocence and natural action. Success comes through acting without artifice or calculation.",
    advice: "Act naturally and honestly. Be innocent and sincere. This is a time for authentic action.",
    lines: [
      { position: 1, type: "yang", meaning: "Innocent action brings good fortune" },
      { position: 2, type: "yin", meaning: "Not plowing the field - not clearing the fallow" },
      { position: 3, type: "yin", meaning: "Undeserved misfortune - the cow tied by someone" },
      { position: 4, type: "yang", meaning: "Can constrain - no blame" },
      { position: 5, type: "yang", meaning: "Innocent sickness - do not use medicine" },
      { position: 6, type: "yang", meaning: "Innocent action brings misfortune - nothing is advantageous" }
    ],
    relatedHexagrams: [24, 26, 27]
  },
  {
    number: 26,
    name: "大畜",
    nameEnglish: "Da Xu - Great Taming",
    symbol: "䷙",
    description: "Mountain over Heaven. Restraint and accumulation. Represents the power of restraint.",
    meaning: "Great taming. Restraint and accumulation. Represents the power of discipline.",
    interpretation: "This hexagram represents the principle of great restraint and accumulation. Through discipline, great things are achieved.",
    advice: "Exercise restraint and discipline. Accumulate resources. This is a time for building strength through restraint.",
    lines: [
      { position: 1, type: "yang", meaning: "Danger - advantageous to stop" },
      { position: 2, type: "yang", meaning: "The axle of the wagon comes off" },
      { position: 3, type: "yang", meaning: "Good horses follow - advantageous to persevere" },
      { position: 4, type: "yin", meaning: "The headboard of a young bull - supreme good fortune" },
      { position: 5, type: "yin", meaning: "The tusks of a castrated boar - good fortune" },
      { position: 6, type: "yang", meaning: "Attaining the way of heaven - success" }
    ],
    relatedHexagrams: [25, 27, 28]
  },
  {
    number: 27,
    name: "頤",
    nameEnglish: "Yi - Nourishment",
    symbol: "䷚",
    description: "Mountain over Thunder. Nourishment and sustenance. Represents proper care and feeding.",
    meaning: "Nourishment. Care and sustenance. Represents the importance of proper nourishment.",
    interpretation: "This hexagram represents the principle of nourishment. It emphasizes the importance of proper care and feeding of body and spirit.",
    advice: "Nourish yourself properly. Care for your needs. This is a time for proper sustenance and self-care.",
    lines: [
      { position: 1, type: "yang", meaning: "Abandon the magic tortoise - look at me with drooping jaw" },
      { position: 2, type: "yin", meaning: "Nourishment from the summit - seeking nourishment from the slope" },
      { position: 3, type: "yin", meaning: "Seeking nourishment - not persevering - misfortune" },
      { position: 4, type: "yin", meaning: "Seeking nourishment from the summit - good fortune" },
      { position: 5, type: "yin", meaning: "Not persevering - advantageous to cross the great stream" },
      { position: 6, type: "yang", meaning: "The source of nourishment - danger, good fortune" }
    ],
    relatedHexagrams: [26, 28, 29]
  },
  {
    number: 28,
    name: "大過",
    nameEnglish: "Da Guo - Great Exceeding",
    symbol: "䷛",
    description: "Lake over Wind. Excess and extremity. Represents going beyond normal limits.",
    meaning: "Great exceeding. Excess and extremity. Represents going beyond normal boundaries.",
    interpretation: "This hexagram represents the principle of great exceeding. It warns of the dangers of excess and the need for balance.",
    advice: "Be cautious of excess. Seek balance. This is a time for moderation and careful action.",
    lines: [
      { position: 1, type: "yin", meaning: "Place rushes underneath - no blame" },
      { position: 2, type: "yang", meaning: "A withered poplar produces shoots - an old husband takes a young wife" },
      { position: 3, type: "yang", meaning: "The ridgepole sags - misfortune" },
      { position: 4, type: "yang", meaning: "The ridgepole is braced - good fortune" },
      { position: 5, type: "yang", meaning: "A withered poplar produces flowers - an old wife takes a young husband" },
      { position: 6, type: "yin", meaning: "Crossing through water - the head goes under - misfortune, no blame" }
    ],
    relatedHexagrams: [27, 29, 30]
  },
  {
    number: 29,
    name: "坎",
    nameEnglish: "Kan - The Abysmal",
    symbol: "䷜",
    description: "Water over Water. Danger and depth. Represents the power of water and danger.",
    meaning: "The abysmal. Danger and depth. Represents facing danger with sincerity.",
    interpretation: "This hexagram represents the principle of danger and depth. It emphasizes the importance of sincerity when facing difficulties.",
    advice: "Face danger with sincerity. Go through difficulties. This is a time for courage and authenticity.",
    lines: [
      { position: 1, type: "yin", meaning: "Repetition of the abysmal - in the abyss, a pit" },
      { position: 2, type: "yang", meaning: "The abyss has danger - seek small attainments" },
      { position: 3, type: "yin", meaning: "Coming and going - the abyss" },
      { position: 4, type: "yin", meaning: "A cup of wine, two bowls of rice - earthenware vessels" },
      { position: 5, type: "yang", meaning: "The abyss is not full - the level is maintained - no blame" },
      { position: 6, type: "yin", meaning: "Bound with cords and rope - confined in a thicket of thorns" }
    ],
    relatedHexagrams: [28, 30, 31]
  },
  {
    number: 30,
    name: "離",
    nameEnglish: "Li - The Clinging",
    symbol: "䷝",
    description: "Fire over Fire. Brightness and clarity. Represents illumination and dependence.",
    meaning: "The clinging. Brightness and clarity. Represents illumination and attachment.",
    interpretation: "This hexagram represents the principle of clinging and brightness. Like fire, it illuminates but also requires fuel to continue.",
    advice: "Seek clarity and illumination. Cultivate brightness. This is a time for understanding and clarity.",
    lines: [
      { position: 1, type: "yang", meaning: "The first step is confused - respect brings good fortune" },
      { position: 2, type: "yin", meaning: "Yellow light - supreme good fortune" },
      { position: 3, type: "yang", meaning: "The light of the setting sun - not singing but wailing" },
      { position: 4, type: "yang", meaning: "The sudden arrival - burning, dying, abandoned" },
      { position: 5, type: "yin", meaning: "Tears flowing in streams - sighs and lamentation" },
      { position: 6, type: "yang", meaning: "The king uses this to go on punitive expeditions" }
    ],
    relatedHexagrams: [29, 31, 32]
  },
  {
    number: 31,
    name: "咸",
    nameEnglish: "Xian - Influence",
    symbol: "䷞",
    description: "Lake over Mountain. Mutual influence and resonance. Represents attraction and connection.",
    meaning: "Influence. Mutual attraction and resonance. Represents the power of influence.",
    interpretation: "This hexagram represents the principle of mutual influence and resonance. It emphasizes the power of attraction and connection.",
    advice: "Cultivate positive influence. Seek resonance with others. This is a time for connection and mutual benefit.",
    lines: [
      { position: 1, type: "yin", meaning: "Influence in the big toe" },
      { position: 2, type: "yin", meaning: "Influence in the calf - misfortune, staying brings good fortune" },
      { position: 3, type: "yin", meaning: "Influence in the thigh - holding to what follows" },
      { position: 4, type: "yang", meaning: "Perseverance brings good fortune - regret disappears" },
      { position: 5, type: "yin", meaning: "Influence in the back of the neck - no regret" },
      { position: 6, type: "yang", meaning: "Influence in the jaws, cheeks, and tongue" }
    ],
    relatedHexagrams: [30, 32, 33]
  },
  {
    number: 32,
    name: "恆",
    nameEnglish: "Heng - Duration",
    symbol: "䷟",
    description: "Thunder over Wind. Constancy and duration. Represents persistence and endurance.",
    meaning: "Duration. Constancy and endurance. Represents the power of persistence.",
    interpretation: "This hexagram represents the principle of duration and constancy. Success comes through persistent effort over time.",
    advice: "Persist and endure. Maintain constancy. This is a time for long-term effort and dedication.",
    lines: [
      { position: 1, type: "yin", meaning: "Seeking duration too eagerly - misfortune, nothing is advantageous" },
      { position: 2, type: "yin", meaning: "Regret disappears" },
      { position: 3, type: "yin", meaning: "Not persevering in virtue - some are ashamed" },
      { position: 4, type: "yang", meaning: "No game in the field" },
      { position: 5, type: "yin", meaning: "Persevering in virtue - good fortune for women, misfortune for men" },
      { position: 6, type: "yang", meaning: "Restlessness brings misfortune" }
    ],
    relatedHexagrams: [31, 33, 34]
  },
  {
    number: 33,
    name: "遯",
    nameEnglish: "Tun - Retreat",
    symbol: "䷠",
    description: "Mountain over Heaven. Retreat and withdrawal. Represents strategic withdrawal.",
    meaning: "Retreat. Withdrawal and strategic retreat. Represents knowing when to withdraw.",
    interpretation: "This hexagram represents the principle of retreat and withdrawal. Sometimes wisdom lies in knowing when to step back.",
    advice: "Know when to retreat. Strategic withdrawal is sometimes necessary. This is a time for prudent withdrawal.",
    lines: [
      { position: 1, type: "yin", meaning: "At the tail of the retreat - danger, do not use force" },
      { position: 2, type: "yin", meaning: "Holding it fast with yellow oxhide - no one can pull it away" },
      { position: 3, type: "yang", meaning: "A retreat with ties - sickness and distress" },
      { position: 4, type: "yang", meaning: "Voluntary retreat - good fortune for the superior person" },
      { position: 5, type: "yin", meaning: "Friendly retreat - perseverance brings good fortune" },
      { position: 6, type: "yang", meaning: "Cheerful retreat - everything is advantageous" }
    ],
    relatedHexagrams: [32, 34, 35]
  },
  {
    number: 34,
    name: "大壯",
    nameEnglish: "Da Zhuang - Great Power",
    symbol: "䷡",
    description: "Thunder over Heaven. Great power and strength. Represents the power of yang energy.",
    meaning: "Great power. Strength and vigor. Represents the power of positive energy.",
    interpretation: "This hexagram represents the principle of great power. It emphasizes the importance of using power righteously.",
    advice: "Use your power wisely. Cultivate strength. This is a time for powerful action guided by righteousness.",
    lines: [
      { position: 1, type: "yang", meaning: "Power in the feet - disadvantageous to advance" },
      { position: 2, type: "yang", meaning: "Perseverance brings good fortune" },
      { position: 3, type: "yang", meaning: "The inferior person uses force - the superior person does not" },
      { position: 4, type: "yang", meaning: "Perseverance brings good fortune - regret disappears" },
      { position: 5, type: "yin", meaning: "Loses the goat with ease - no regret" },
      { position: 6, type: "yin", meaning: "The goat butts a hedge - cannot advance, cannot retreat" }
    ],
    relatedHexagrams: [33, 35, 36]
  },
  {
    number: 35,
    name: "晉",
    nameEnglish: "Jin - Progress",
    symbol: "䷢",
    description: "Fire over Earth. Progress and advancement. Represents steady advancement and growth.",
    meaning: "Progress. Advancement and growth. Represents steady forward movement.",
    interpretation: "This hexagram represents the principle of progress and advancement. It emphasizes steady, continuous growth.",
    advice: "Advance steadily. Seek progress. This is a time for continuous advancement and growth.",
    lines: [
      { position: 1, type: "yin", meaning: "Progress, but blocked - perseverance brings good fortune" },
      { position: 2, type: "yin", meaning: "Progress like a squirrel - perseverance brings danger" },
      { position: 3, type: "yin", meaning: "All are in accord - regret disappears" },
      { position: 4, type: "yin", meaning: "Progress like a hamster - perseverance brings good fortune" },
      { position: 5, type: "yang", meaning: "Regret disappears - do not worry about loss" },
      { position: 6, type: "yang", meaning: "Progress with the horns - only for punitive expeditions" }
    ],
    relatedHexagrams: [34, 36, 37]
  },
  {
    number: 36,
    name: "明夷",
    nameEnglish: "Ming Yi - Darkening of the Light",
    symbol: "䷣",
    description: "Earth over Fire. Darkness and concealment. Represents adversity and hidden strength.",
    meaning: "Darkening of the light. Adversity and concealment. Represents enduring through darkness.",
    interpretation: "This hexagram represents the darkening of light and adversity. It emphasizes the importance of maintaining inner light during dark times.",
    advice: "Maintain inner light during darkness. Endure adversity. This is a time for hidden strength and patience.",
    lines: [
      { position: 1, type: "yang", meaning: "Darkening of the light during flight - lower the wings" },
      { position: 2, type: "yin", meaning: "Darkening of the light injures the left thigh - use a horse" },
      { position: 3, type: "yin", meaning: "Darkening of the light during the hunt in the south" },
      { position: 4, type: "yin", meaning: "Entering the left belly - grasping the heart of darkening light" },
      { position: 5, type: "yin", meaning: "Darkening of the light - as with Prince Ji - perseverance is advantageous" },
      { position: 6, type: "yin", meaning: "Not light but darkness - first ascending to heaven" }
    ],
    relatedHexagrams: [35, 37, 38]
  },
  {
    number: 37,
    name: "家人",
    nameEnglish: "Jia Ren - The Family",
    symbol: "䷤",
    description: "Fire over Wind. Family and household. Represents family bonds and domestic harmony.",
    meaning: "The family. Household and family bonds. Represents the importance of family.",
    interpretation: "This hexagram represents the principle of family and household. It emphasizes the importance of family harmony and proper roles.",
    advice: "Strengthen family bonds. Maintain harmony. This is a time for family unity and proper relationships.",
    lines: [
      { position: 1, type: "yang", meaning: "Setting up boundaries - regret disappears" },
      { position: 2, type: "yin", meaning: "No place to go - good fortune in the kitchen" },
      { position: 3, type: "yang", meaning: "Harsh words in the family - regret and danger" },
      { position: 4, type: "yin", meaning: "Richness in the family - supreme good fortune" },
      { position: 5, type: "yin", meaning: "The king approaches his family - do not be anxious" },
      { position: 6, type: "yang", meaning: "Sincere reverence - in the end good fortune" }
    ],
    relatedHexagrams: [36, 38, 39]
  },
  {
    number: 38,
    name: "睽",
    nameEnglish: "Kui - Opposition",
    symbol: "䷥",
    description: "Fire over Lake. Opposition and separation. Represents differences and conflict.",
    meaning: "Opposition. Separation and conflict. Represents the principle of opposition.",
    interpretation: "This hexagram represents the principle of opposition and separation. It shows how opposition can lead to understanding.",
    advice: "Understand opposition. Seek common ground. This is a time for bridging differences.",
    lines: [
      { position: 1, type: "yin", meaning: "Regret disappears - lose the horse, do not chase it" },
      { position: 2, type: "yang", meaning: "Encounter in a narrow lane - no blame" },
      { position: 3, type: "yin", meaning: "The wagon dragged back - the ox halted" },
      { position: 4, type: "yang", meaning: "Isolated opposition - encounter a like-minded person" },
      { position: 5, type: "yin", meaning: "Regret disappears - the bite penetrates the skin" },
      { position: 6, type: "yang", meaning: "Isolated opposition - see a pig covered with mud" }
    ],
    relatedHexagrams: [37, 39, 40]
  },
  {
    number: 39,
    name: "蹇",
    nameEnglish: "Jian - Obstruction",
    symbol: "䷦",
    description: "Water over Mountain. Obstruction and difficulty. Represents obstacles and the need for patience.",
    meaning: "Obstruction. Difficulty and obstacles. Represents the need to overcome obstacles.",
    interpretation: "This hexagram represents the principle of obstruction and difficulty. It emphasizes the importance of patience and proper action.",
    advice: "Face obstacles with patience. Seek proper solutions. This is a time for careful navigation.",
    lines: [
      { position: 1, type: "yin", meaning: "Going leads to obstruction - coming meets praise" },
      { position: 2, type: "yin", meaning: "The king's servant is obstructed - not because of his fault" },
      { position: 3, type: "yin", meaning: "Going leads to obstruction - returning brings union" },
      { position: 4, type: "yang", meaning: "Going leads to obstruction - coming brings union" },
      { position: 5, type: "yin", meaning: "In the midst of obstruction - friends come" },
      { position: 6, type: "yang", meaning: "Going leads to obstruction - coming leads to great good fortune" }
    ],
    relatedHexagrams: [38, 40, 41]
  },
  {
    number: 40,
    name: "解",
    nameEnglish: "Xie - Deliverance",
    symbol: "䷧",
    description: "Thunder over Water. Deliverance and release. Represents liberation and resolution.",
    meaning: "Deliverance. Release and liberation. Represents freedom from obstacles.",
    interpretation: "This hexagram represents the principle of deliverance and release. It shows how obstacles can be overcome and freedom achieved.",
    advice: "Seek deliverance. Release what binds you. This is a time for liberation and resolution.",
    lines: [
      { position: 1, type: "yin", meaning: "Without blame" },
      { position: 2, type: "yin", meaning: "Catching three foxes in the hunt - gains yellow metal" },
      { position: 3, type: "yin", meaning: "Carrying a burden on the back and riding in a carriage" },
      { position: 4, type: "yang", meaning: "Deliver yourself from your big toe - then friends will come" },
      { position: 5, type: "yin", meaning: "The superior person alone can deliver - good fortune" },
      { position: 6, type: "yang", meaning: "The duke shoots at the hawk on the high wall" }
    ],
    relatedHexagrams: [39, 41, 42]
  },
  {
    number: 41,
    name: "損",
    nameEnglish: "Sun - Decrease",
    symbol: "䷨",
    description: "Mountain over Lake. Decrease and reduction. Represents the principle of letting go.",
    meaning: "Decrease. Reduction and letting go. Represents the power of sacrifice.",
    interpretation: "This hexagram represents the principle of decrease and sacrifice. Sometimes success comes through giving up something.",
    advice: "Let go of excess. Make sacrifices. This is a time for reduction and simplification.",
    lines: [
      { position: 1, type: "yang", meaning: "Quickly finish the business - no blame" },
      { position: 2, type: "yin", meaning: "Perseverance is advantageous - undertaking brings misfortune" },
      { position: 3, type: "yin", meaning: "When three people walk together, they decrease to two" },
      { position: 4, type: "yin", meaning: "Decrease the sickness - quickly, be happy, no blame" },
      { position: 5, type: "yin", meaning: "Someone augments it - ten pairs of tortoise shells" },
      { position: 6, type: "yang", meaning: "Not decreasing but augmenting - no blame" }
    ],
    relatedHexagrams: [40, 42, 43]
  },
  {
    number: 42,
    name: "益",
    nameEnglish: "Yi - Increase",
    symbol: "䷩",
    description: "Wind over Thunder. Increase and growth. Represents expansion and abundance.",
    meaning: "Increase. Growth and expansion. Represents the principle of increase.",
    interpretation: "This hexagram represents the principle of increase and growth. It emphasizes the importance of generosity and expansion.",
    advice: "Seek increase and growth. Be generous. This is a time for expansion and abundance.",
    lines: [
      { position: 1, type: "yang", meaning: "Advantageous to undertake great things - supreme good fortune" },
      { position: 2, type: "yin", meaning: "Someone augments it - ten pairs of tortoise shells" },
      { position: 3, type: "yin", meaning: "Increase through misfortune - no blame" },
      { position: 4, type: "yin", meaning: "If you are sincere, it is advantageous to move to a new position" },
      { position: 5, type: "yin", meaning: "Good faith and confidence - supreme good fortune" },
      { position: 6, type: "yang", meaning: "Not increasing but decreasing - no blame" }
    ],
    relatedHexagrams: [41, 43, 44]
  },
  {
    number: 43,
    name: "夬",
    nameEnglish: "Guai - Breakthrough",
    symbol: "䷪",
    description: "Lake over Heaven. Breakthrough and decision. Represents the power of decisive action.",
    meaning: "Breakthrough. Decision and resolution. Represents the power of breakthrough.",
    interpretation: "This hexagram represents the principle of breakthrough and decisive action. It emphasizes the importance of firm decision.",
    advice: "Make decisive action. Break through obstacles. This is a time for breakthrough and resolution.",
    lines: [
      { position: 1, type: "yang", meaning: "Power in the front feet - advancing brings misfortune" },
      { position: 2, type: "yang", meaning: "Alertness brings good fortune - no blame" },
      { position: 3, type: "yang", meaning: "Power in the cheeks - misfortune" },
      { position: 4, type: "yang", meaning: "No skin on the buttocks - walking with difficulty" },
      { position: 5, type: "yin", meaning: "Weeds in the wheat - no blame" },
      { position: 6, type: "yang", meaning: "No cry - in the end misfortune" }
    ],
    relatedHexagrams: [42, 44, 45]
  },
  {
    number: 44,
    name: "姤",
    nameEnglish: "Gou - Coming to Meet",
    symbol: "䷫",
    description: "Heaven over Wind. Meeting and encounter. Represents unexpected meetings and encounters.",
    meaning: "Coming to meet. Encounter and meeting. Represents the principle of meeting.",
    interpretation: "This hexagram represents the principle of meeting and encounter. It emphasizes the importance of proper response to meetings.",
    advice: "Be prepared for encounters. Meet challenges. This is a time for readiness and proper response.",
    lines: [
      { position: 1, type: "yin", meaning: "Restrained by a metal brake - perseverance brings good fortune" },
      { position: 2, type: "yang", meaning: "There is a fish in the tank - no blame" },
      { position: 3, type: "yang", meaning: "No skin on the buttocks - walking with difficulty" },
      { position: 4, type: "yang", meaning: "No fish in the tank - misfortune" },
      { position: 5, type: "yin", meaning: "Wrapping in willow - yellow - supreme good fortune" },
      { position: 6, type: "yang", meaning: "Meeting with the horns - humiliation, no blame" }
    ],
    relatedHexagrams: [43, 45, 46]
  },
  {
    number: 45,
    name: "萃",
    nameEnglish: "Cui - Gathering Together",
    symbol: "䷬",
    description: "Lake over Earth. Gathering and assembly. Represents unity and collective action.",
    meaning: "Gathering together. Assembly and unity. Represents the power of gathering.",
    interpretation: "This hexagram represents the principle of gathering and assembly. It emphasizes the importance of unity and collective effort.",
    advice: "Gather together. Seek unity. This is a time for collective action and assembly.",
    lines: [
      { position: 1, type: "yin", meaning: "If you are sincere but not to the end - there is confusion" },
      { position: 2, type: "yin", meaning: "Leading brings good fortune - no blame" },
      { position: 3, type: "yin", meaning: "Gathering with sighs - no blame" },
      { position: 4, type: "yang", meaning: "Great good fortune - no blame" },
      { position: 5, type: "yin", meaning: "Gathering - no blame, but some are not sincere" },
      { position: 6, type: "yang", meaning: "Weeping and wailing - no blame" }
    ],
    relatedHexagrams: [44, 46, 47]
  },
  {
    number: 46,
    name: "升",
    nameEnglish: "Sheng - Ascending",
    symbol: "䷭",
    description: "Earth over Wind. Ascension and rising. Represents steady upward movement.",
    meaning: "Ascending. Rising and upward movement. Represents gradual ascension.",
    interpretation: "This hexagram represents the principle of ascending and rising. It emphasizes steady, gradual upward movement.",
    advice: "Rise steadily. Seek ascension. This is a time for gradual advancement and rising.",
    lines: [
      { position: 1, type: "yin", meaning: "Sincere ascension - supreme good fortune" },
      { position: 2, type: "yin", meaning: "If you are sincere, it is advantageous to make small offerings" },
      { position: 3, type: "yin", meaning: "Ascending into an empty city" },
      { position: 4, type: "yin", meaning: "The king makes an offering on Mount Qi - good fortune" },
      { position: 5, type: "yang", meaning: "Perseverance brings good fortune - ascending by steps" },
      { position: 6, type: "yin", meaning: "Ascending in darkness - advantageous to be unceasing" }
    ],
    relatedHexagrams: [45, 47, 48]
  },
  {
    number: 47,
    name: "困",
    nameEnglish: "Kun - Oppression",
    symbol: "䷮",
    description: "Lake over Water. Oppression and exhaustion. Represents hardship and endurance.",
    meaning: "Oppression. Hardship and exhaustion. Represents the need to endure.",
    interpretation: "This hexagram represents the principle of oppression and hardship. It emphasizes the importance of perseverance through difficulty.",
    advice: "Endure oppression. Persist through hardship. This is a time for patience and inner strength.",
    lines: [
      { position: 1, type: "yin", meaning: "Oppression at the buttocks - on a wooden stake" },
      { position: 2, type: "yin", meaning: "Oppression through wine and food - scarlet knee pads" },
      { position: 3, type: "yin", meaning: "Oppression through stone and thorns - grasping thistles" },
      { position: 4, type: "yang", meaning: "Oppression through gold and jade - perseverance brings good fortune" },
      { position: 5, type: "yin", meaning: "Oppression through purple and scarlet - perseverance brings good fortune" },
      { position: 6, type: "yang", meaning: "Oppression through creeping vines - uneasiness brings regret" }
    ],
    relatedHexagrams: [46, 48, 49]
  },
  {
    number: 48,
    name: "井",
    nameEnglish: "Jing - The Well",
    symbol: "䷯",
    description: "Water over Wind. The well and nourishment. Represents resources and sustenance.",
    meaning: "The well. Nourishment and resources. Represents the source of sustenance.",
    interpretation: "This hexagram represents the principle of the well as a source of nourishment. It emphasizes the importance of reliable resources.",
    advice: "Seek reliable sources. Maintain resources. This is a time for nourishment and sustenance.",
    lines: [
      { position: 1, type: "yin", meaning: "The well is muddy - no one drinks from it" },
      { position: 2, type: "yin", meaning: "The well is a fish trap - the jar is broken" },
      { position: 3, type: "yin", meaning: "The well is cleaned but not drunk from - my heart grieves" },
      { position: 4, type: "yang", meaning: "The well is lined - no blame" },
      { position: 5, type: "yin", meaning: "The well is clear and cold - supreme good fortune" },
      { position: 6, type: "yang", meaning: "The well is drawn from without restraint - good fortune" }
    ],
    relatedHexagrams: [47, 49, 50]
  },
  {
    number: 49,
    name: "革",
    nameEnglish: "Ge - Revolution",
    symbol: "䷰",
    description: "Fire over Lake. Revolution and transformation. Represents radical change.",
    meaning: "Revolution. Transformation and change. Represents the power of revolution.",
    interpretation: "This hexagram represents the principle of revolution and transformation. It emphasizes the importance of timely change.",
    advice: "Embrace transformation. Make necessary changes. This is a time for revolution and renewal.",
    lines: [
      { position: 1, type: "yang", meaning: "Wrapped in the hide of a yellow ox - perseverance" },
      { position: 2, type: "yin", meaning: "On the day of revolution, take action - good fortune, no blame" },
      { position: 3, type: "yin", meaning: "Undertaking brings misfortune - perseverance brings good fortune" },
      { position: 4, type: "yang", meaning: "Regret disappears - good faith and confidence - change of government" },
      { position: 5, type: "yang", meaning: "The great man transforms like a tiger - before the divination" },
      { position: 6, type: "yin", meaning: "The superior man transforms like a leopard - the inferior man changes his face" }
    ],
    relatedHexagrams: [48, 50, 51]
  },
  {
    number: 50,
    name: "鼎",
    nameEnglish: "Ding - The Cauldron",
    symbol: "䷱",
    description: "Fire over Wind. The cauldron and transformation. Represents nourishment and change.",
    meaning: "The cauldron. Transformation and nourishment. Represents the vessel of change.",
    interpretation: "This hexagram represents the principle of the cauldron as a vessel of transformation. It emphasizes the importance of proper transformation.",
    advice: "Transform properly. Seek nourishment. This is a time for positive transformation.",
    lines: [
      { position: 1, type: "yin", meaning: "The cauldron is overturned - advantageous to remove the stagnant" },
      { position: 2, type: "yin", meaning: "The cauldron has substance - my enemy is sick" },
      { position: 3, type: "yin", meaning: "The cauldron's ears are broken - the pheasant is not eaten" },
      { position: 4, type: "yang", meaning: "The cauldron's legs are broken - the duke's meal is spilled" },
      { position: 5, type: "yin", meaning: "The cauldron has yellow ears - golden carrying rings" },
      { position: 6, type: "yang", meaning: "The cauldron has jade rings - supreme good fortune" }
    ],
    relatedHexagrams: [49, 51, 52]
  },
  {
    number: 51,
    name: "震",
    nameEnglish: "Zhen - The Arousing",
    symbol: "䷲",
    description: "Thunder over Thunder. Shock and movement. Represents awakening and action.",
    meaning: "The arousing. Shock and awakening. Represents the power of thunder.",
    interpretation: "This hexagram represents the principle of arousal and shock. It emphasizes the importance of being awakened to action.",
    advice: "Be awakened to action. Respond to shock. This is a time for movement and arousal.",
    lines: [
      { position: 1, type: "yang", meaning: "Thunder comes - oh, oh - afterward comes laughter" },
      { position: 2, type: "yin", meaning: "Thunder brings danger - lose the coins in a hundred thousand" },
      { position: 3, type: "yin", meaning: "Thunder is aroused - no blame" },
      { position: 4, type: "yin", meaning: "Thunder is mired - no blame" },
      { position: 5, type: "yin", meaning: "Thunder comes and goes - danger" },
      { position: 6, type: "yin", meaning: "Thunder brings terror - looking about in confusion" }
    ],
    relatedHexagrams: [50, 52, 53]
  },
  {
    number: 52,
    name: "艮",
    nameEnglish: "Gen - Keeping Still",
    symbol: "䷳",
    description: "Mountain over Mountain. Stillness and rest. Represents meditation and stopping.",
    meaning: "Keeping still. Stillness and rest. Represents the power of stopping.",
    interpretation: "This hexagram represents the principle of keeping still and stopping. It emphasizes the importance of rest and meditation.",
    advice: "Keep still and rest. Stop unnecessary action. This is a time for meditation and stillness.",
    lines: [
      { position: 1, type: "yang", meaning: "Keeping the toes still - no blame - perseverance is advantageous" },
      { position: 2, type: "yin", meaning: "Keeping the calves still - cannot save what follows" },
      { position: 3, type: "yin", meaning: "Keeping the hips still - the sacrum is tense" },
      { position: 4, type: "yin", meaning: "Keeping the trunk still - no blame" },
      { position: 5, type: "yin", meaning: "Keeping the cheeks still - the words are orderly" },
      { position: 6, type: "yang", meaning: "Keeping still through generous restraint - good fortune" }
    ],
    relatedHexagrams: [51, 53, 54]
  },
  {
    number: 53,
    name: "漸",
    nameEnglish: "Jian - Gradual Progress",
    symbol: "䷴",
    description: "Wind over Mountain. Gradual progress and development. Represents slow advancement.",
    meaning: "Gradual progress. Slow development and advancement. Represents steady progress.",
    interpretation: "This hexagram represents the principle of gradual progress. It emphasizes the importance of slow, steady advancement.",
    advice: "Progress gradually. Advance slowly but steadily. This is a time for gradual development.",
    lines: [
      { position: 1, type: "yin", meaning: "The wild goose gradually approaches the shore - the young one is in danger" },
      { position: 2, type: "yin", meaning: "The wild goose gradually approaches the meadow - eating and drinking in peace" },
      { position: 3, type: "yin", meaning: "The wild goose gradually approaches the plateau - the husband goes on campaign" },
      { position: 4, type: "yin", meaning: "The wild goose gradually approaches the tree - it finds a flat branch" },
      { position: 5, type: "yang", meaning: "The wild goose gradually approaches the summit - the feathers can be used" },
      { position: 6, type: "yang", meaning: "The wild goose gradually approaches the clouds - its feathers are for ritual" }
    ],
    relatedHexagrams: [52, 54, 55]
  },
  {
    number: 54,
    name: "歸妹",
    nameEnglish: "Gui Mei - The Marrying Maiden",
    symbol: "䷵",
    description: "Thunder over Lake. Marriage and transition. Represents union and new beginnings.",
    meaning: "The marrying maiden. Marriage and union. Represents the transition of marriage.",
    interpretation: "This hexagram represents the principle of marriage and union. It emphasizes the importance of proper transitions.",
    advice: "Embrace transitions. Seek proper union. This is a time for marriage and new beginnings.",
    lines: [
      { position: 1, type: "yang", meaning: "The marrying maiden as a concubine - the lame can walk" },
      { position: 2, type: "yin", meaning: "The one-eyed can see - advantageous for the hermit" },
      { position: 3, type: "yin", meaning: "The marrying maiden as a slave - she returns as a concubine" },
      { position: 4, type: "yang", meaning: "The marrying maiden delays the time - a late marriage" },
      { position: 5, type: "yin", meaning: "The lord of Di marries his daughter - the sleeves of the princess" },
      { position: 6, type: "yin", meaning: "The marrying maiden has no basket - no fish in the basket" }
    ],
    relatedHexagrams: [53, 55, 56]
  },
  {
    number: 55,
    name: "豐",
    nameEnglish: "Feng - Abundance",
    symbol: "䷶",
    description: "Fire over Thunder. Abundance and fullness. Represents prosperity and plenty.",
    meaning: "Abundance. Fullness and prosperity. Represents the principle of abundance.",
    interpretation: "This hexagram represents the principle of abundance and fullness. It emphasizes the importance of enjoying prosperity.",
    advice: "Enjoy abundance. Celebrate prosperity. This is a time for fullness and plenty.",
    lines: [
      { position: 1, type: "yang", meaning: "Meeting his lord - ten days no blame - going brings good fortune" },
      { position: 2, type: "yin", meaning: "The curtains are so thick - at noon the stars are visible" },
      { position: 3, type: "yin", meaning: "The abundance is so great - at noon there is darkness" },
      { position: 4, type: "yin", meaning: "The curtains are so thick - at noon the stars are visible" },
      { position: 5, type: "yin", meaning: "Coming lines bring good fortune - praise and esteem" },
      { position: 6, type: "yin", meaning: "His house is abundant - his family is screened" }
    ],
    relatedHexagrams: [54, 56, 57]
  },
  {
    number: 56,
    name: "旅",
    nameEnglish: "Lu - The Wanderer",
    symbol: "䷷",
    description: "Fire over Mountain. Travel and wandering. Represents journeys and transitions.",
    meaning: "The wanderer. Travel and transition. Represents the journey and movement.",
    interpretation: "This hexagram represents the principle of travel and wandering. It emphasizes the importance of proper conduct during journeys.",
    advice: "Travel wisely. Embrace journeys. This is a time for movement and transition.",
    lines: [
      { position: 1, type: "yin", meaning: "The wanderer is petty - brings misfortune" },
      { position: 2, type: "yin", meaning: "The wanderer arrives at an inn - carrying his possessions" },
      { position: 3, type: "yang", meaning: "The wanderer's inn burns - he loses his servants" },
      { position: 4, type: "yang", meaning: "The wanderer rests at a shelter - gains his possessions and ax" },
      { position: 5, type: "yin", meaning: "He shoots a pheasant - loses his arrow - good fortune in the end" },
      { position: 6, type: "yang", meaning: "The bird's nest burns - the wanderer laughs at first, then cries" }
    ],
    relatedHexagrams: [55, 57, 58]
  },
  {
    number: 57,
    name: "巽",
    nameEnglish: "Xun - The Gentle",
    symbol: "䷸",
    description: "Wind over Wind. Gentleness and penetration. Represents flexibility and adaptation.",
    meaning: "The gentle. Gentleness and penetration. Represents the power of gentleness.",
    interpretation: "This hexagram represents the principle of gentleness and penetration. Like wind, gentleness can penetrate and influence.",
    advice: "Be gentle and flexible. Penetrate gently. This is a time for gentleness and adaptation.",
    lines: [
      { position: 1, type: "yin", meaning: "Advancing and retreating - advantageous for a warrior" },
      { position: 2, type: "yin", meaning: "Penetration under the bed - using priests and shamans" },
      { position: 3, type: "yin", meaning: "Repeated penetration - humiliation" },
      { position: 4, type: "yin", meaning: "Regret disappears - catching three kinds of game" },
      { position: 5, type: "yang", meaning: "Advantageous in the southwest - no going in the northeast" },
      { position: 6, type: "yang", meaning: "Penetration under the bed - loses property and ax" }
    ],
    relatedHexagrams: [56, 58, 59]
  },
  {
    number: 58,
    name: "兌",
    nameEnglish: "Dui - The Joyful",
    symbol: "䷹",
    description: "Lake over Lake. Joy and pleasure. Represents happiness and satisfaction.",
    meaning: "The joyful. Joy and pleasure. Represents the principle of joy.",
    interpretation: "This hexagram represents the principle of joy and pleasure. It emphasizes the importance of finding joy in life.",
    advice: "Seek joy and pleasure. Celebrate happiness. This is a time for enjoyment and satisfaction.",
    lines: [
      { position: 1, type: "yin", meaning: "Harmonious joy - good fortune" },
      { position: 2, type: "yin", meaning: "Sincere joy - good fortune" },
      { position: 3, type: "yin", meaning: "Joy that seeks - misfortune" },
      { position: 4, type: "yang", meaning: "Debating joy - not at peace - deliberation dispels sorrow" },
      { position: 5, type: "yang", meaning: "Trusting in dissolution - danger" },
      { position: 6, type: "yang", meaning: "Enticing joy" }
    ],
    relatedHexagrams: [57, 59, 60]
  },
  {
    number: 59,
    name: "渙",
    nameEnglish: "Huan - Dissolution",
    symbol: "䷺",
    description: "Wind over Water. Dissolution and dispersal. Represents the breaking up of obstacles.",
    meaning: "Dissolution. Dispersal and breaking up. Represents the clearing of obstacles.",
    interpretation: "This hexagram represents the principle of dissolution and dispersal. It shows how obstacles can be cleared away.",
    advice: "Clear obstacles. Dissolve barriers. This is a time for dispersal and clearing.",
    lines: [
      { position: 1, type: "yang", meaning: "Using a horse with strength - good fortune" },
      { position: 2, type: "yin", meaning: "Dissolving at the crossroads - regret disappears" },
      { position: 3, type: "yin", meaning: "Dissolving his self - no regret" },
      { position: 4, type: "yang", meaning: "Dissolving his group - supreme good fortune" },
      { position: 5, type: "yang", meaning: "Dissolving his sweat - great dissolution - no blame" },
      { position: 6, type: "yang", meaning: "Dissolving his blood - departing, hearing, going far away" }
    ],
    relatedHexagrams: [58, 60, 61]
  },
  {
    number: 60,
    name: "節",
    nameEnglish: "Jie - Limitation",
    symbol: "䷻",
    description: "Water over Lake. Limitation and boundaries. Represents proper restraint and moderation.",
    meaning: "Limitation. Boundaries and restraint. Represents the principle of limitation.",
    interpretation: "This hexagram represents the principle of limitation and boundaries. It emphasizes the importance of proper restraint.",
    advice: "Set proper limits. Exercise restraint. This is a time for moderation and boundaries.",
    lines: [
      { position: 1, type: "yin", meaning: "Not going out the gate - no blame" },
      { position: 2, type: "yin", meaning: "Not going out the gate - misfortune" },
      { position: 3, type: "yin", meaning: "No weeping, no singing - good fortune" },
      { position: 4, type: "yang", meaning: "Contentment in limitation - good fortune" },
      { position: 5, type: "yin", meaning: "Sweet limitation - good fortune" },
      { position: 6, type: "yang", meaning: "Bitter limitation - perseverance brings misfortune" }
    ],
    relatedHexagrams: [59, 61, 62]
  },
  {
    number: 61,
    name: "中孚",
    nameEnglish: "Zhong Fu - Inner Truth",
    symbol: "䷼",
    description: "Wind over Lake. Inner truth and sincerity. Represents authenticity and faith.",
    meaning: "Inner truth. Sincerity and authenticity. Represents the power of inner truth.",
    interpretation: "This hexagram represents the principle of inner truth and sincerity. It emphasizes the importance of authenticity.",
    advice: "Be sincere and authentic. Trust inner truth. This is a time for authenticity and faith.",
    lines: [
      { position: 1, type: "yin", meaning: "Preparation brings good fortune - if there is disquiet" },
      { position: 2, type: "yin", meaning: "A crane cries in the shade - its young respond" },
      { position: 3, type: "yin", meaning: "He finds a companion - now a drum, now a stop" },
      { position: 4, type: "yang", meaning: "The moon is nearly full - the horse pair is lost - no blame" },
      { position: 5, type: "yang", meaning: "They are bound in truth - no blame" },
      { position: 6, type: "yang", meaning: "Cocks crow to the sky - perseverance brings misfortune" }
    ],
    relatedHexagrams: [60, 62, 63]
  },
  {
    number: 62,
    name: "小過",
    nameEnglish: "Xiao Guo - Small Exceeding",
    symbol: "䷽",
    description: "Thunder over Mountain. Small excess and caution. Represents minor transgressions.",
    meaning: "Small exceeding. Minor excess and caution. Represents small transgressions.",
    interpretation: "This hexagram represents the principle of small exceeding. It warns against small excesses and emphasizes caution.",
    advice: "Avoid small excesses. Exercise caution. This is a time for careful moderation.",
    lines: [
      { position: 1, type: "yin", meaning: "The bird flies - misfortune" },
      { position: 2, type: "yin", meaning: "Passing by the grandfather - meeting the grandmother" },
      { position: 3, type: "yin", meaning: "Not passing by - meeting from behind - danger" },
      { position: 4, type: "yang", meaning: "No blame - meeting from behind" },
      { position: 5, type: "yang", meaning: "Dense clouds - no rain from the southwest" },
      { position: 6, type: "yang", meaning: "The bird flies away - misfortune - this is called disaster" }
    ],
    relatedHexagrams: [61, 63, 64]
  },
  {
    number: 63,
    name: "既濟",
    nameEnglish: "Ji Ji - After Completion",
    symbol: "䷾",
    description: "Fire over Water. Completion and fulfillment. Represents the end of a cycle.",
    meaning: "After completion. Fulfillment and endings. Represents the completion of cycles.",
    interpretation: "This hexagram represents the principle of completion and fulfillment. It emphasizes the importance of proper endings.",
    advice: "Complete your work. Fulfill your goals. This is a time for completion and fulfillment.",
    lines: [
      { position: 1, type: "yang", meaning: "Dragging the tail - humiliation" },
      { position: 2, type: "yin", meaning: "The woman loses her carriage - do not chase" },
      { position: 3, type: "yin", meaning: "The high ancestor attacks the ghost kingdom" },
      { position: 4, type: "yin", meaning: "The finest cloth - vigilance all day" },
      { position: 5, type: "yin", meaning: "The neighbor in the east slaughters an ox" },
      { position: 6, type: "yang", meaning: "Wetting the head - danger" }
    ],
    relatedHexagrams: [62, 64, 1]
  },
  {
    number: 64,
    name: "未濟",
    nameEnglish: "Wei Ji - Before Completion",
    symbol: "䷿",
    description: "Water over Fire. Incompletion and beginning. Represents new cycles and potential.",
    meaning: "Before completion. Incompletion and beginning. Represents new beginnings.",
    interpretation: "This hexagram represents the principle of incompletion and new beginnings. It emphasizes the importance of proper beginning.",
    advice: "Begin properly. Embrace new cycles. This is a time for new beginnings and potential.",
    lines: [
      { position: 1, type: "yin", meaning: "Wetting the tail - humiliation" },
      { position: 2, type: "yang", meaning: "Dragging the carriage - perseverance brings good fortune" },
      { position: 3, type: "yang", meaning: "Before completion - attack brings good fortune" },
      { position: 4, type: "yin", meaning: "Perseverance brings good fortune - regret disappears" },
      { position: 5, type: "yin", meaning: "Good faith - supreme good fortune" },
      { position: 6, type: "yang", meaning: "Drunken confidence - if you wade through water" }
    ],
    relatedHexagrams: [63, 1, 2]
  }
];
