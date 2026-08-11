const traitMeta = [
  ["will", "意志"], ["empathy", "共情"], ["strategy", "谋略"], ["discipline", "自律"],
  ["independence", "独立"], ["leadership", "领导"], ["shadow", "阴影"], ["idealism", "理想"]
];

const makeTraits = values => Object.fromEntries(traitMeta.map((item, index) => [item[0], values[index]]));
const character = (name, romanized, emblem, accent, group, village, archetype, tags, lead, image, inner, tension, values) => ({
  name, romanized, emblem, accent, group, village, archetype, tags, lead, image, inner, tension, traits: makeTraits(values)
});

const characters = [
  character("漩涡鸣人", "Uzumaki Naruto", "鸣", "#ed7a37", "木叶", "木叶隐村", "以羁绊点燃世界的理想行动者", ["韧性", "感染力", "共情成长"], "他用外放的热情对抗童年的孤独，把“被看见”的渴望逐渐升华为让所有人彼此理解的愿望。", "明亮、直接、行动先于计算；总能让停滞的关系重新流动。", "对同伴的痛苦极度敏感。认同感是早期驱动力，成熟后则变成主动承担他人孤独的能力。", "不肯放弃是力量，也可能让他低估边界与代价；他需要学会相信他人也能承担自己的战斗。", [98, 92, 55, 62, 72, 92, 28, 98]),
  character("宇智波佐助", "Uchiha Sasuke", "佐", "#7589c9", "木叶", "木叶／宇智波", "把伤痛锻成方向的孤高复仇者", ["独立", "决断", "压抑情感"], "冷静与锋利是他的盔甲。真正推动他的并非单纯的憎恨，而是对失去、真相与归属的强烈执念。", "寡言、自持、目标感极强；习惯以能力而非语言证明自己。", "情感浓度远高于表达程度。越珍视羁绊，越害怕再次失去，因此会主动切断关系来夺回控制感。", "渴望连接却用疏离保护自己；追求公正时也容易被单一答案吞没。", [94, 43, 82, 86, 96, 52, 88, 71]),
  character("春野樱", "Haruno Sakura", "樱", "#dc7588", "木叶", "木叶隐村", "从自我怀疑中长出的坚韧守护者", ["成长", "责任", "情绪洞察"], "她的力量并非天生笃定，而是在一次次看见自身不足后选择不再退后。", "清醒、细致、情绪鲜明；在关键时刻拥有极强的执行力与照护能力。", "敏感于评价，也因此更能觉察关系里的细微变化。她真正的成熟来自把比较心转化为专业和担当。", "想被认可与想保护他人并存；越重要的关系，越容易让她承担过量责任。", [87, 88, 73, 91, 62, 77, 36, 79]),
  character("旗木卡卡西", "Hatake Kakashi", "卡", "#8fa09e", "木叶", "木叶隐村", "用松弛表象包裹创伤的沉静导师", ["洞察", "克制", "守护"], "看似散漫，实则始终在观察全局。他把失去藏进规则与幽默里，也把遗憾化为对后辈的保护。", "低调、从容、边界清晰；危机中能迅速切换为精准的决策者。", "强烈的责任感带着幸存者愧疚。他不轻易诉苦，更愿意让自己的经验成为别人少走弯路的地图。", "极度可靠，却不擅长让别人照顾自己；理性保护了他，也隔开了他与自身伤痛。", [88, 77, 94, 91, 81, 84, 64, 72]),
  character("日向雏田", "Hyuga Hinata", "雏", "#a78bbd", "木叶", "木叶／日向", "安静却不退让的温柔坚定者", ["温柔", "勇气", "持久力"], "她并非没有恐惧，而是常在恐惧存在时仍向前一步。温柔是她主动选择的力量，而不是软弱。", "安静、体贴、敏锐；不争夺中心，却能在关键时刻稳定他人。", "长期承受家族期待，使她容易低估自身价值。对认定之人的欣赏，最终被内化为自己的勇气。", "共情很深但表达较慢；成长课题是把支持别人的坚定，同样用在为自己发声上。", [89, 96, 62, 84, 55, 58, 28, 91]),
  character("奈良鹿丸", "Nara Shikamaru", "鹿", "#8a9271", "木叶", "木叶隐村", "厌恶麻烦却接住责任的现实军师", ["谋略", "务实", "担当"], "他用“怕麻烦”过滤无意义的消耗，却从不逃避真正重要的责任。", "懒散、冷静、擅长从复杂局面中抓住决定性变量。", "情感表达克制，却非常重视承诺与同伴。他的成熟常发生在失去之后：把悲伤转化为更周全的保护。", "洞察力让他预见代价，也容易令他提前疲惫；他需要允许自己偶尔不做那个最清醒的人。", [76, 73, 99, 78, 79, 88, 42, 65]),
  character("我爱罗", "Gaara", "砂", "#b65b45", "砂隐", "砂隐村", "从封闭防御走向共情领导的重生者", ["重建信任", "克制", "领导"], "早年的敌意是被拒绝后的生存策略。当他第一次被真正理解，便开始把保护自己的力量转向保护村子。", "沉静、威严、界限分明；很少浪费语言，但承诺具有重量。", "内心对孤独有深刻记忆，因此能够识别他人的隔绝。他的共情不是天真，而是从黑暗中走出来后的选择。", "害怕被抛弃曾使他只相信自己；重建后仍会过度承担，以证明自己值得被需要。", [92, 84, 81, 88, 86, 91, 71, 83]),
  character("李洛克", "Rock Lee", "李", "#72a552", "木叶", "木叶隐村", "把限制变成训练计划的纯粹奋斗者", ["勤奋", "坦率", "热血"], "他清楚自己的短板，却拒绝让先天条件替自己决定上限。努力对他而言不是口号，而是一种身份。", "热情、礼貌、毫不遮掩自己的认真；用行动给团队带来向上的节奏。", "渴望证明努力可以对抗天赋，因而对失败格外敏感。但他恢复得快，因为自尊建立在过程而非一次结果上。", "极端自律能创造奇迹，也可能忽略身体和情绪的求救信号。", [99, 81, 48, 100, 58, 69, 18, 93]),
  character("日向宁次", "Hyuga Neji", "宁", "#7e91a0", "木叶", "木叶／日向", "在宿命论中重新夺回选择的人", ["精准", "克制", "觉醒"], "他曾用“命运不可改变”解释创伤，也借此维持秩序感；真正的转变来自承认自己仍拥有选择。", "冷静、锐利、自尊强；对规则、结构和能力差距有高度敏感。", "愤怒之下是对不公与失去的哀伤。他需要先相信改变可能，才允许自己重新靠近家人与同伴。", "看透限制让他成熟，也可能使他把可能性过早判死；自由来自不再让伤痛替未来发言。", [86, 64, 88, 92, 83, 63, 67, 62]),
  character("宇智波鼬", "Uchiha Itachi", "鼬", "#a54443", "晓", "晓／宇智波", "将自己献给大局的悲剧理想主义者", ["牺牲", "远见", "孤独"], "他拥有近乎残酷的全局视角，也因此习惯独自决定什么代价“必须被支付”。", "安静、礼貌、极度克制；情绪和意图都藏在严密控制之下。", "对弟弟的爱是最深驱动力。背负污名让他避免亲密，因为被理解可能动摇他执行选择的决心。", "和平理想与控制倾向共存；承担一切看似无私，也剥夺了他人共同选择的权利。", [95, 79, 97, 98, 90, 74, 94, 86]),
  character("自来也", "Jiraiya", "自", "#b35d47", "木叶", "木叶／三忍", "用幽默遮住失落的浪漫引路人", ["探索", "希望", "传承"], "表面不拘小节，内里一直寻找结束仇恨循环的答案。他相信答案也许不在自己身上，而在后来者身上。", "外向、自由、好奇；能在严肃使命与生活乐趣之间快速切换。", "多次失去与未竟关系让他带着淡淡的漂泊感。他把无法兑现的愿望，转化为培养下一代。", "理想宏大却回避私人脆弱；他擅长启发别人，却较少为自己争取安稳。", [91, 85, 78, 69, 88, 82, 52, 96]),
  character("纲手", "Tsunade", "纲", "#c18845", "木叶", "木叶／三忍", "带着失去继续承担的务实领袖", ["担当", "疗愈", "果断"], "她曾用逃离和冒险麻痹伤痛，最终仍选择回到最容易触碰旧伤的位置，承担守护者的责任。", "强势、直接、务实；在危机中会优先保护生命与系统稳定。", "对死亡的恐惧来自深刻的爱。她不是不再害怕，而是让专业、承诺和信任比恐惧更有决定权。", "坚强容易被误解为不需要支持；她的疗愈能力很强，却常把自己的恢复放在最后。", [92, 88, 82, 83, 81, 96, 61, 80]),
  character("大蛇丸", "Orochimaru", "蛇", "#8d7c9e", "晓", "叛忍／三忍", "让求知欲越过边界的极端探索者", ["求知", "控制", "越界"], "对死亡与局限的恐惧，被他转化为无止境的知识追求。他把一切都视作可研究、可替换的系统。", "冷静、好奇、善于诱导；面对禁忌时几乎没有常人的退缩。", "深层驱动力是拒绝有限性。他需要掌控变化，因而把关系工具化，以避免依赖和失去。", "开放探索带来突破，也可能在缺少共情约束时侵蚀底线。", [89, 21, 96, 82, 100, 71, 99, 57]),
  character("波风水门", "Namikaze Minato", "门", "#e0ad45", "木叶", "木叶隐村", "在温和与极速决断间切换的成熟领袖", ["冷静", "责任", "温和"], "他的自信不靠压迫感建立，而来自充分准备与危机中的清晰判断。", "谦和、敏捷、低调；擅长让身边人感到被尊重和信任。", "对责任的接受近乎本能。他珍视家庭，却在公共使命与私人情感冲突时选择承担最沉重的决定。", "高度可靠使他容易独自消化压力；果断背后也藏着无法陪伴所爱之人的遗憾。", [95, 88, 96, 95, 77, 95, 38, 91]),
  character("漩涡玖辛奈", "Uzumaki Kushina", "玖", "#c24d4a", "木叶", "木叶／漩涡", "以炽烈情感守护归属的生命力", ["直率", "保护", "生命力"], "她对排斥极其敏感，却没有因此收缩自己，而是用更鲜明的存在感争取尊重与归属。", "热烈、坦率、行动果断；爱与愤怒都表达得毫不含糊。", "外在强悍之下非常珍惜被选择、被接纳的感觉。一旦认定家人，就会把保护置于自身安危之前。", "强烈情感让关系真挚，也可能在被触碰伤口时过快反应；柔软和力量始终共存。", [96, 91, 61, 72, 78, 83, 45, 94]),
  character("宇智波带土", "Uchiha Obito", "带", "#9a655b", "晓", "晓／宇智波", "被理想破碎推向虚无的失落救赎者", ["理想反转", "执念", "双重自我"], "他原本以帮助他人为荣；巨大创伤后，他不是失去理想，而是认定现实配不上理想。", "早期热心笨拙，后期冷酷疏离；两个面貌都源于极强的情感投入。", "无法承受重要关系的断裂，于是试图否定整个现实。他的攻击性，本质是对无力感的极端反抗。", "共情与虚无并存；当世界不符合心中标准时，他容易用彻底推翻代替艰难修复。", [91, 69, 86, 78, 87, 77, 100, 93]),
  character("宇智波斑", "Uchiha Madara", "斑", "#93423e", "晓", "宇智波／其他", "以绝对控制追求和平的宏大意志", ["支配", "远见", "不信任"], "他洞察冲突的循环，却不再相信人与人能自发打破循环，因此把和平定义为可被强制实现的秩序。", "强势、自信、极具压迫感；习惯从历史尺度而非个人尺度思考。", "深处有对失去兄弟与信任破裂的恐惧。越渴望永久和平，越不能容忍不可控的人性。", "理想主义与权力意志合为一体；看见系统问题，却把自己的答案置于所有人的选择之上。", [99, 35, 96, 94, 95, 100, 98, 85]),
  character("千手柱间", "Senju Hashirama", "柱", "#9a7350", "木叶", "木叶／千手", "以包容凝聚对立的开创型领袖", ["包容", "愿景", "魄力"], "他既能真诚地看见敌人的人性，也能在原则与整体安全受到威胁时做出艰难决断。", "开放、亲和、带有感染力；不依赖威严也能聚拢不同立场。", "相信连接可以重塑制度，这是他最核心的心理支点。对朋友的信任很深，因此背叛也会造成更大伤口。", "宽广理想需要制度来承接；单靠个人魅力建立的和平，可能把未解决的矛盾留给后人。", [98, 91, 80, 79, 76, 100, 39, 100]),
  character("千手扉间", "Senju Tobirama", "扉", "#5886a0", "木叶", "木叶／千手", "用制度管理风险的冷静建设者", ["制度", "风险意识", "执行"], "他对人性和权力的风险保持警惕，倾向用清晰规则让系统不依赖任何一个人的善意。", "直接、严谨、效率优先；会把感情收进职责之后。", "对家族与村子的忠诚极深，却更愿意通过结构而非语言表达。战争经验让他很难对未知风险保持轻松。", "谨慎能保护集体，也可能把统计风险投射到具体个体，形成过度防范。", [92, 55, 98, 99, 84, 94, 58, 72]),
  character("迈特凯", "Might Guy", "凯", "#70a250", "木叶", "木叶隐村", "把热血变成他人勇气的能量导师", ["积极", "自律", "激励"], "他的夸张热情并非逃避现实，而是一种主动的心理训练：永远为努力赋予意义。", "高能、真诚、毫不吝惜赞美；把竞争变成彼此成长的游戏。", "非常理解天赋差距与自我怀疑，因此用稳定的肯定守护学生。他的乐观建立在长期自律之上。", "总能点燃他人，也容易将自我价值绑定在持续超越上；休息对他同样是一门功课。", [100, 88, 54, 100, 66, 89, 16, 95]),
  character("佐井", "Sai", "墨", "#87959a", "木叶", "木叶／根", "从情感断联中重新学习连接的观察者", ["观察", "学习连接", "克制"], "长期训练让他习惯把情感视作干扰，却仍保留着对关系的好奇，并通过模仿、观察逐渐建立真实连接。", "平静、字面化、社交表达生涩；擅长在情绪之外观察细节。", "并非没有感受，而是缺少识别与命名感受的语言。关系安全感建立后，他会显露稳定而真诚的忠诚。", "理性使他可靠，也可能让表达显得冒犯；成长来自允许情绪不是漏洞，而是信息。", [71, 63, 84, 93, 79, 51, 56, 60]),
  character("大和", "Yamato", "和", "#73877b", "木叶", "木叶隐村", "用秩序托住团队的稳定执行者", ["稳定", "边界", "协作"], "他擅长为高能量团队提供结构，让不同性格的人能在安全边界内发挥。", "沉稳、谨慎、具有低调幽默；倾向先建立规则再行动。", "特殊成长经历使他重视可控与归属。被团队需要会强化他的身份感，也让他愿意承担协调工作。", "稳定有时会滑向过度控制；他需要相信混乱并不总等于危险。", [78, 75, 86, 94, 68, 80, 47, 68]),
  character("山中井野", "Yamanaka Ino", "井", "#a47cad", "木叶", "木叶隐村", "擅长看见他人也敢于表达自己的联结者", ["社交洞察", "自信", "支持"], "她对关系动态非常敏锐，既能正面竞争，也能在对方真正需要时提供支持。", "明快、直接、有审美与存在感；不害怕表达偏好。", "自信之下有很强的照护倾向。她通过主动连接确认关系，也愿意成为别人情绪混乱时的支点。", "习惯照顾场面可能让她忽略自己的失落；坦率若缺少停顿，也会变成替别人下判断。", [77, 88, 72, 76, 72, 80, 27, 76]),
  character("秋道丁次", "Akimichi Choji", "丁", "#b87945", "木叶", "木叶隐村", "把善意藏在柔软外表下的忠诚守护者", ["善意", "忠诚", "自尊"], "他重视友谊远胜于输赢。温和并不等于没有底线，一旦所爱之人被伤害，他会释放惊人的决心。", "友善、享受生活、避免无意义冲突；给团队带来情感上的安全感。", "曾因评价而自卑，因此格外珍惜不以表象衡量他的朋友。被真正信任时，他的潜力会迅速展开。", "渴望和谐可能延迟表达不满；成长是相信自己的愤怒也值得被认真对待。", [87, 95, 53, 72, 54, 64, 24, 82]),
  character("犬冢牙", "Inuzuka Kiba", "牙", "#99664e", "木叶", "木叶隐村", "以直觉和竞争确认存在的冲锋者", ["直觉", "竞争", "忠诚"], "他喜欢率先行动，也通过公开竞争确认自己的位置。强烈自尊背后，是对伙伴毫无保留的忠诚。", "外向、好胜、反应快速；在不确定中更相信感官和行动。", "需要被认可，但不喜欢用脆弱的方式请求认可。与伙伴的并肩关系能让他感到完整和踏实。", "勇气可能变成冲动，竞争也可能遮住合作；他的成长来自把敏锐用在倾听而非只用在抢先。", [86, 70, 54, 68, 82, 72, 35, 72]),
  character("油女志乃", "Aburame Shino", "志", "#68766a", "木叶", "木叶隐村", "沉默而细密的系统观察者", ["观察", "耐心", "可靠"], "他不主动争夺注意力，却希望自己的存在和贡献被认真看见。", "冷静、严谨、表达精确；习惯收集信息后再行动。", "情绪比外表更丰富，对被忽略尤其敏感。他通过知识、准备和稳定兑现承诺来建立关系。", "独立可靠容易让别人忘记询问他的需要；偶尔直接表达失望，比等待别人发现更有效。", [76, 68, 92, 94, 82, 57, 38, 66]),
  character("手鞠", "Temari", "鞠", "#c79c48", "砂隐", "砂隐村", "用清醒与锋利保护秩序的现实主义者", ["果断", "洞察", "直率"], "她能快速判断局势，也不愿用模糊措辞浪费时间。强硬表达背后有明确的保护意识。", "自信、务实、言辞锐利；在团队摇摆时愿意做决定。", "对脆弱的家人有深层责任感。她较少用温柔语言表达爱，更常通过纠偏、提醒与实际支持来承担。", "清晰能带来安全，也可能让情绪较慢的人感到被推进；柔软表达不会削弱她的力量。", [84, 69, 91, 87, 83, 87, 40, 70]),
  character("迪达拉", "Deidara", "迪", "#d0a34a", "晓", "晓／岩隐叛忍", "把自我证明燃成瞬间艺术的激进创造者", ["创造", "刺激", "自我证明"], "他用爆发性创作对抗被忽视和被定义，坚信价值存在于不可复制的瞬间冲击。", "张扬、好辩、寻求刺激；对审美判断有强烈主权感。", "他非常在意作品是否被承认，尤其难以忍受自己无法理解的力量。挑衅常是维护自尊的方式。", "创造力与破坏欲紧密相连；越需要证明自己，越可能让作品服务于胜负而非表达。", [83, 31, 71, 65, 95, 66, 86, 77]),
  character("小南", "Konan", "南", "#657e9e", "晓", "晓／雨隐", "把柔软理想折成坚韧行动的守望者", ["忠诚", "克制", "理想"], "她不是最响亮的理想宣告者，却是长期守住共同愿景的人。", "沉静、理性、坚定；擅长把复杂情感折叠进明确行动。", "对同伴的忠诚构成她的方向感。经历战乱后仍保存希望，但希望必须经得起现实与失去。", "忠诚给予力量，也可能让自我愿望依附于他人的道路；她需要确认自己同样是理想的作者。", [91, 84, 87, 92, 76, 74, 69, 94]),
  character("长门", "Nagato", "长", "#a65b5b", "晓", "晓／雨隐", "因承受世界之痛而走向极端秩序的理想者", ["痛感", "理想", "极端化"], "他对苦难拥有异常敏锐的感受，却在连续创伤后认定：只有共同恐惧才能迫使人理解和平。", "庄严、疏离、目标绝对；说服力来自亲身承受的痛苦。", "原始愿望是保护朋友与终止战争。无法消化的悲伤让他把“让人理解痛苦”变成了控制世界的方法。", "强共情在创伤中可能反转成惩罚逻辑；他需要重新相信理解不只通过痛苦发生。", [93, 77, 89, 86, 82, 90, 97, 96])
];

const A = (text, values) => ({ text, scores: makeTraits(values) });
const questions = [
  { type: "choice", label: "任务情境 · 四选一", title: "小队突入险境，原计划已经失效。你会先做什么？", context: "没有完美答案，只有你最自然的第一反应。", answers: [
    A("冲到最前面吸引火力，为同伴争取时间", [95,72,42,52,64,78,34,88]), A("退到视野开阔处，十秒内重构行动路线", [72,48,98,91,78,76,37,63]), A("先确认每个人的状态，再分配最合适的位置", [75,92,78,80,55,94,28,80]), A("不等指令，从敌方忽略的侧翼单独突破", [87,37,83,79,98,42,67,68])
  ]},
  { type: "choice", label: "关系判断 · 四选一", title: "你信任的人隐瞒了一个足以改变关系的秘密。", context: "真相已经摆在面前，对方却还没开口。", answers: [
    A("给对方一次完整解释的机会，再决定关系去留", [75,91,72,65,59,66,36,77]), A("立即切断联系，信任一旦破裂就不能假装无事", [81,28,70,82,97,42,81,54]), A("直接摊牌追问，宁可争执也不要继续猜测", [84,67,61,61,76,76,48,73]), A("先不表态，观察他的动机和后续行为", [68,49,93,88,85,53,65,60])
  ]},
  { type: "choice", label: "团队定位 · 四选一", title: "在一支陌生小队中，你通常会自然成为——", context: "不是你想成为的角色，而是大家最后往往会把你放在的位置。", answers: [
    A("点燃气氛、让所有人敢于向前的人", [90,81,52,58,70,90,20,94]), A("看清变量、决定节奏和路线的人", [72,51,97,88,77,88,38,65]), A("察觉情绪、修复摩擦和信任的人", [69,98,64,73,49,76,23,82]), A("承担难点、独立保证结果的人", [89,41,84,96,94,57,55,68])
  ]},
  { type: "choice", label: "内在反应 · 四选一", title: "当你被严重误解时，哪种感受最接近你？", context: "想象你解释过，但对方仍坚持原来的判断。", answers: [
    A("更想证明自己，用结果让评价失效", [94,54,62,87,83,69,45,85]), A("感到受伤，但仍想理解对方为何这样看", [70,96,71,61,50,56,32,80]), A("迅速抽离：不值得的人没必要解释", [78,34,76,81,99,43,68,57]), A("暂时沉默，把情绪整理好后再谈", [74,69,89,94,78,55,49,70])
  ]},
  { type: "scale", label: "立场量尺 · 五档", title: "面对高风险机会，你更接近哪一端？", context: "从“把握窗口”到“控制变量”，选择你的真实倾向。", answers: [
    A("立刻行动，机会消失比失败更难接受", [92,44,48,45,91,71,63,88]), A("偏向行动，边走边调整就好", [84,58,63,61,79,72,43,81]), A("先看局势，风险与收益要平衡", [73,66,81,78,70,73,39,72]), A("偏向准备，没有预案不轻易开始", [67,57,91,94,75,68,41,63]), A("宁可等待，先把不可控因素降到最低", [58,48,96,98,70,62,55,56])
  ]},
  { type: "choice", label: "竞争反应 · 四选一", title: "一个强劲对手远远领先，你会如何回应？", context: "对方的优势是真实的，而且短期内很难追上。", answers: [
    A("把差距拆成训练计划，一项项追", [99,61,62,100,68,57,24,93]), A("研究他的弱点，换一条更聪明的赛道", [78,45,98,84,89,69,48,72]), A("主动接近他，把竞争变成共同成长", [82,87,68,74,63,80,23,89]), A("不再比较，建立只有自己能定义的标准", [73,58,74,75,100,49,52,78])
  ]},
  { type: "choice", label: "失去之后 · 四选一", title: "经历一次重要失败后，你通常怎样恢复？", context: "它不是小挫折，而是你投入许久后真正失去的东西。", answers: [
    A("允许自己难过，然后把意义传给下一次行动", [88,79,74,82,68,73,47,92]), A("马上投入更高强度的目标，不给情绪留位置", [92,38,72,96,86,61,82,68]), A("找可信的人复盘，也承认自己需要支持", [74,96,77,70,53,67,28,82]), A("长时间独处，直到我能重新理解发生了什么", [71,55,88,78,97,39,72,66])
  ]},
  { type: "choice", label: "规则困境 · 四选一", title: "执行命令会守住规则，却可能伤害一个无辜的人。", context: "时间只够你做一次选择。", answers: [
    A("违抗命令，生命与同伴永远优先", [92,94,52,50,72,79,31,94]), A("执行命令，个人判断不能替代集体秩序", [76,38,86,99,61,83,52,63]), A("寻找第三条路，哪怕同时承担双方风险", [88,78,97,83,82,86,46,90]), A("先救人，再主动接受违令的全部后果", [97,88,64,84,91,82,39,92])
  ]},
  { type: "choice", label: "动机审视 · 四选一", title: "哪一种认可最能真正推动你？", context: "选那个会让你在疲惫时仍愿意继续的答案。", answers: [
    A("被重要的人相信：他知道我不会退缩", [93,92,58,74,67,68,28,94]), A("被专业地肯定：我的判断和能力经得起检验", [77,49,91,95,82,70,38,69]), A("被需要：我的存在确实保护或改变了别人", [87,94,66,83,52,88,29,88]), A("无需任何认可：我完成了自己设定的标准", [85,39,76,94,100,48,55,75])
  ]},
  { type: "multi", label: "双重取舍 · 选两项", title: "只能保留两种力量，你会把哪两种带上战场？", context: "请选择恰好两项。取舍本身比“全都想要”更接近真实的你。", picks: 2, answers: [
    A("即使绝境也不放弃的意志", [100,66,53,80,72,65,33,92]), A("读懂他人未说出口情绪的共情", [68,100,66,65,46,72,22,84]), A("比对手多想十步的谋略", [69,43,100,85,79,80,47,65]), A("在重复训练中不动摇的自律", [87,58,64,100,70,60,25,80]), A("不依赖任何人的独立", [76,35,72,82,100,42,66,58]), A("让不同的人共同前进的领导力", [83,84,82,79,58,100,29,91])
  ]},
  { type: "choice", label: "长期任务 · 四选一", title: "一个目标需要三年才可能见效，你会怎样维持自己？", context: "没有掌声，也无法确定坚持一定有回报。", answers: [
    A("建立稳定日程，相信可重复的微小进步", [88,59,73,100,70,64,24,82]), A("不断提醒自己最初为何出发", [92,79,56,78,62,72,29,100]), A("设置阶段挑战，用竞争感保持兴奋", [86,52,69,83,82,72,42,81]), A("持续校准方向，必要时彻底换方法", [73,53,98,84,89,68,46,72])
  ]},
  { type: "choice", label: "冲突调停 · 四选一", title: "两位同伴激烈争执，小队已经无法推进。", context: "他们都认为自己有充分理由。", answers: [
    A("让两人分别说完，再找共同在意的目标", [70,97,79,75,52,91,22,86]), A("直接指出问题核心，先定方案再处理情绪", [76,52,95,89,69,94,37,69]), A("用轻松方式降温，等大家能听进去再谈", [72,86,66,63,64,81,21,83]), A("不介入情绪，明确分工让事实给出答案", [71,42,86,93,87,76,50,57])
  ]},
  { type: "choice", label: "权力观 · 四选一", title: "如果突然拥有足以改变规则的力量，你最先会——", context: "没有人能立刻制衡你。", answers: [
    A("建立公开机制，让力量不只听命于个人", [81,77,94,91,65,96,25,90]), A("解决最紧迫的不公，之后再讨论程序", [94,88,62,65,80,86,38,96]), A("先隐藏力量，观察谁真正值得信任", [74,45,96,88,96,48,75,67]), A("重写旧秩序，只有彻底改变才能停止循环", [96,44,91,87,93,98,92,88])
  ]},
  { type: "choice", label: "羁绊困境 · 四选一", title: "挚友正在走上一条危险道路，却拒绝所有劝告。", context: "继续阻止会伤害你们的关系，放手则可能永远失去他。", answers: [
    A("无论多少次都追上去，直到他愿意回头", [100,96,52,67,57,83,37,100]), A("阻止他，即使必须成为他眼中的敌人", [95,71,88,94,82,88,67,86]), A("保留退路与联络，让他还有回来的入口", [76,94,84,80,65,73,38,89]), A("尊重他的选择；爱不等于替他决定人生", [71,67,76,82,100,50,44,73])
  ]},
  { type: "scale", label: "立场量尺 · 五档", title: "重要决定中，情感与理性谁拥有最后一票？", context: "从“心的答案”到“证据的答案”。", answers: [
    A("几乎总是相信内心，真实感受不会骗人", [86,96,48,52,76,66,53,94]), A("更相信感受，但会检查明显风险", [82,86,63,66,69,71,39,87]), A("两者必须互相校验", [77,75,82,80,70,76,36,78]), A("更相信分析，感受容易放大偏差", [70,55,93,91,78,72,48,65]), A("证据和逻辑优先，必要时压下个人感受", [72,34,99,97,85,76,66,56])
  ]},
  { type: "choice", label: "秘密负荷 · 四选一", title: "你背负一个不能公开、却越来越沉重的秘密。", context: "它不会立刻伤害别人，但正在消耗你。", answers: [
    A("找一个绝对可信的人，至少让他知道真实的我", [68,93,67,61,47,58,31,81]), A("继续独自承受，这是我选择后应付的代价", [91,39,79,96,98,56,88,73]), A("把秘密写下来，先让自己理解它的意义", [71,68,88,82,86,43,61,75]), A("寻找能改变局面的行动，不让秘密只剩重量", [88,72,91,85,81,77,57,86])
  ]},
  { type: "choice", label: "失败归因 · 四选一", title: "计划失败后，你最先审视的是什么？", context: "请选最真实的第一反应，而不是最成熟的标准答案。", answers: [
    A("我是否还不够努力、准备得不够彻底", [92,55,68,100,72,57,47,85]), A("判断模型哪里错了，哪些信息被忽略", [72,42,100,91,84,72,45,62]), A("团队是否有人没有被听见或被放错位置", [73,95,78,76,54,90,27,81]), A("目标本身是否值得，还是我被执念绑住了", [67,65,91,74,93,51,72,79])
  ]},
  { type: "choice", label: "制度冲突 · 四选一", title: "你发现敬重的领导正在利用规则掩盖错误。", context: "公开质疑会动摇团队信任，也会让你承担代价。", answers: [
    A("当众指出：信任不能靠隐瞒维持", [93,73,68,75,84,85,41,94]), A("私下交涉，给他纠正错误的最后机会", [78,86,84,85,61,80,31,83]), A("先保存证据、寻找盟友，再选择最有效时机", [74,52,99,94,89,77,59,72]), A("若系统已经腐坏，就从外部推动彻底更换", [94,47,88,82,97,92,84,87])
  ]},
  { type: "choice", label: "群体感知 · 四选一", title: "一个新人总被团队忽略，你注意到了。", context: "他没有主动求助，甚至看起来并不在意。", answers: [
    A("自然地邀请他加入，不让帮助显得像施舍", [74,100,66,68,53,82,19,89]), A("单独问他需要什么，尊重他的真实意愿", [69,94,78,78,72,68,21,82]), A("给他一个能被看见的任务，用能力建立位置", [78,76,91,89,65,91,27,78]), A("暂不干预；适应团队也是他需要完成的部分", [66,42,76,81,91,60,48,57])
  ]},
  { type: "multi", label: "价值排序 · 选两项", title: "如果你的忍道只能留下两个关键词，会是哪两个？", context: "请选择恰好两项。", picks: 2, answers: [
    A("守护", [91,96,58,76,54,80,22,94]), A("自由", [78,58,64,62,100,48,43,84]), A("真相", [74,48,98,86,90,64,62,76]), A("秩序", [73,46,88,98,59,91,48,64]), A("成长", [96,76,68,91,72,70,25,98]), A("和平", [88,91,78,79,57,88,34,100])
  ]},
  { type: "choice", label: "独处模式 · 四选一", title: "长时间独处时，你的内心通常会发生什么？", context: "没有任务、没有社交，也没有人催促你。", answers: [
    A("恢复能量，并开始整理下一步计划", [72,51,91,84,94,53,34,70]), A("反复回看过去，试图理解未完成的情绪", [66,79,82,67,87,38,76,73]), A("很快想找人说话，连接让我重新有生命力", [76,98,55,57,42,74,23,89]), A("主动训练或创作，空白必须被转化为东西", [89,52,72,96,86,59,44,88])
  ]},
  { type: "choice", label: "代价判断 · 四选一", title: "为了多数人的未来，你愿意牺牲自己珍视的东西吗？", context: "这不是抽象问题——代价确定、不可恢复。", answers: [
    A("愿意；既然看见了责任，就不能假装不知道", [97,79,85,96,82,93,75,94]), A("不会；任何宏大目标都不该抹掉具体的人", [83,100,68,70,72,74,28,96]), A("只有当所有受影响者都拥有知情与选择权", [77,88,94,91,68,85,34,91]), A("先寻找所有替代路径，不接受题目给定的二选一", [92,83,100,87,86,84,43,95])
  ]},
  { type: "scale", label: "协作量尺 · 五档", title: "完成关键任务时，你更信任独行还是协作？", context: "从“完全掌握在自己手里”到“让团队产生更大的可能”。", answers: [
    A("独自完成，关键环节不能依赖任何人", [86,31,81,93,100,39,69,61]), A("核心自己把控，外围可以交给可靠的人", [82,53,88,91,88,62,47,69]), A("按能力分配，个人和团队没有固定优先级", [78,72,92,87,73,82,31,77]), A("倾向协作，不同视角能修正盲点", [75,88,84,77,58,89,23,86]), A("完全相信团队，真正的力量来自彼此托底", [86,100,67,71,45,94,20,96])
  ]},
  { type: "choice", label: "未来想象 · 四选一", title: "你最想参与创造怎样的未来？", context: "不是最现实的那个，而是最让你心里发亮的那个。", answers: [
    A("没有人因出身被定义，每个人都能改写命运", [91,96,70,72,76,87,24,100]), A("规则清晰可靠，普通人不必依赖英雄也能安全", [80,71,98,98,62,96,29,90]), A("边界开放自由，每个人都能探索自己的可能", [84,70,75,68,100,70,37,96]), A("彼此理解痛苦，冲突不再代代复制", [94,100,79,75,64,91,41,100])
  ]},
  { type: "choice", label: "最终问 · 四选一", title: "最后，你更愿意用哪一句话定义自己的忍道？", context: "选择你愿意在最困难时仍然相信的那一句。", answers: [
    A("我不会放弃任何一个仍有可能的明天", [100,88,58,77,68,83,28,100]), A("看清现实，然后做出代价最小的正确决定", [79,54,100,94,80,87,43,72]), A("保护重要的人，就是我力量的方向", [94,100,64,84,58,80,25,96]), A("即使无人理解，我也要走完自己选择的路", [93,41,75,91,100,57,72,88])
  ]}
];

const state = { filter: "全部", search: "", quizIndex: -1, answers: Array(questions.length).fill(null) };
const grid = document.querySelector("#character-grid");
const emptyState = document.querySelector("#empty-state");
const drawerLayer = document.querySelector("#character-drawer");
const drawerContent = document.querySelector("#drawer-content");
const quizLayer = document.querySelector("#quiz-layer");
const quizStage = document.querySelector("#quiz-stage");

function renderCharacters() {
  const needle = state.search.trim().toLowerCase();
  const visible = characters.filter(item => {
    const filterMatch = state.filter === "全部" || item.group === state.filter || (state.filter === "其他" && !["木叶", "砂隐", "晓"].includes(item.group));
    const haystack = [item.name, item.romanized, item.village, item.archetype, item.tags.join(""), item.lead].join(" ").toLowerCase();
    return filterMatch && haystack.includes(needle);
  });

  grid.innerHTML = visible.map(item => {
    const index = characters.indexOf(item) + 1;
    return `<button class="character-card" style="--accent:${item.accent}" data-character="${item.name}" aria-label="查看${item.name}的心理卷宗">
      <span class="card-top"><span class="archive-code">FILE ${String(index).padStart(2, "0")}</span><span class="mini-village">${item.village}</span></span>
      <span class="character-emblem" aria-hidden="true">${item.emblem}</span>
      <h3>${item.name}</h3><p class="romanized">${item.romanized}</p><p class="archetype">${item.archetype}</p><span class="card-arrow">↗</span>
    </button>`;
  }).join("");
  emptyState.hidden = visible.length > 0;
}

function traitBars(item, className = "") {
  return `<div class="trait-bars ${className}">${traitMeta.map(([key, label]) => `<div class="trait-row"><span>${label}</span><i style="--value:${item.traits[key]}%"></i><b>${item.traits[key]}</b></div>`).join("")}</div>`;
}

function openDrawer(name) {
  const item = characters.find(char => char.name === name);
  if (!item) return;
  const index = characters.indexOf(item) + 1;
  drawerContent.innerHTML = `<div style="--accent:${item.accent}">
    <span class="drawer-id">PSYCHOLOGICAL DOSSIER · FILE ${String(index).padStart(2, "0")}</span>
    <div class="drawer-hero"><span class="character-emblem" aria-hidden="true">${item.emblem}</span><div><h2 id="drawer-name">${item.name}</h2><p>${item.romanized} · ${item.village}</p></div></div>
    <div class="drawer-lead">${item.lead}</div>
    <div class="drawer-tags">${item.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
    <section class="profile-block"><h3><span>01</span>外在形象</h3><p>${item.image}</p></section>
    <section class="profile-block"><h3><span>02</span>内心驱动</h3><p>${item.inner}</p></section>
    <section class="profile-block"><h3><span>03</span>性格张力</h3><p>${item.tension}</p></section>
    <section class="profile-block"><h3><span>04</span>八维心谱</h3>${traitBars(item)}</section>
  </div>`;
  drawerLayer.classList.add("open");
  drawerLayer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  drawerLayer.querySelector(".drawer-close").focus();
}

function closeDrawer() {
  drawerLayer.classList.remove("open");
  drawerLayer.setAttribute("aria-hidden", "true");
  if (!quizLayer.classList.contains("open")) document.body.style.overflow = "";
}

function showQuizWelcome() {
  state.quizIndex = -1;
  updateProgress();
  quizStage.innerHTML = `<section class="quiz-welcome">
    <div class="trial-seal" aria-hidden="true">心</div>
    <div class="section-kicker">PERSONALITY TRIAL · 心相试炼</div>
    <h2>准备好面对<br>真实的选择了吗？</h2>
    <p>全程约 5 分钟。答案没有优劣，也不会被上传。<br>请选择“你会怎么做”，而不是“忍者应该怎么做”。</p>
    <div class="trial-rules"><div><b>25</b><span>道渐进问题</span></div><div><b>08</b><span>项人格维度</span></div><div><b>30</b><span>位角色匹配</span></div></div>
    <button class="primary-btn begin-btn" id="begin-trial"><span>开始第一题</span><b>→</b></button>
  </section>`;
  document.querySelector("#begin-trial").addEventListener("click", () => { state.quizIndex = 0; renderQuestion(); });
}

function openQuiz() {
  closeDrawer();
  quizLayer.classList.add("open");
  quizLayer.setAttribute("aria-hidden", "false");
  document.body.classList.add("quiz-open");
  showQuizWelcome();
}

function exitQuiz(event) {
  if (event) event.preventDefault();
  quizLayer.classList.remove("open");
  quizLayer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("quiz-open");
}

function updateProgress() {
  const number = Math.max(0, state.quizIndex + 1);
  document.querySelector("#progress-label").textContent = state.quizIndex < 0 ? "试炼准备" : `试炼 ${String(number).padStart(2, "0")} / ${questions.length}`;
  document.querySelector("#progress-bar").style.width = `${state.quizIndex < 0 ? 0 : (number / questions.length) * 100}%`;
}

function renderQuestion() {
  const question = questions[state.quizIndex];
  updateProgress();
  const fragment = document.querySelector("#question-template").content.cloneNode(true);
  fragment.querySelector(".question-number").textContent = String(state.quizIndex + 1).padStart(2, "0");
  fragment.querySelector(".question-type").textContent = question.label;
  fragment.querySelector(".question-title").textContent = question.title;
  fragment.querySelector(".question-context").textContent = question.context;
  const answerList = fragment.querySelector(".answer-list");
  const saved = state.answers[state.quizIndex];
  question.answers.forEach((answer, index) => {
    const selected = question.type === "multi" ? Array.isArray(saved) && saved.includes(index) : saved === index;
    answerList.insertAdjacentHTML("beforeend", `<button class="answer-option${selected ? " selected" : ""}" data-answer="${index}"><span class="option-key">${String.fromCharCode(65 + index)}</span><span>${answer.text}</span><span class="option-check">✓</span></button>`);
  });
  const back = fragment.querySelector(".back-btn");
  back.disabled = state.quizIndex === 0;
  const next = fragment.querySelector(".next-btn");
  if (question.type === "multi") next.hidden = !(Array.isArray(saved) && saved.length === question.picks);
  quizStage.replaceChildren(fragment);

  quizStage.querySelectorAll(".answer-option").forEach(button => button.addEventListener("click", () => selectAnswer(Number(button.dataset.answer))));
  quizStage.querySelector(".back-btn").addEventListener("click", () => { if (state.quizIndex > 0) { state.quizIndex--; renderQuestion(); } });
  quizStage.querySelector(".next-btn").addEventListener("click", advanceQuestion);
}

function selectAnswer(index) {
  const question = questions[state.quizIndex];
  if (question.type === "multi") {
    let selected = Array.isArray(state.answers[state.quizIndex]) ? [...state.answers[state.quizIndex]] : [];
    if (selected.includes(index)) selected = selected.filter(value => value !== index);
    else if (selected.length < question.picks) selected.push(index);
    state.answers[state.quizIndex] = selected;
    renderQuestion();
    return;
  }
  state.answers[state.quizIndex] = index;
  quizStage.querySelectorAll(".answer-option").forEach((option, optionIndex) => option.classList.toggle("selected", optionIndex === index));
  window.setTimeout(advanceQuestion, 280);
}

function advanceQuestion() {
  if (state.quizIndex < questions.length - 1) {
    state.quizIndex++;
    renderQuestion();
  } else {
    showResult();
  }
}

function calculateProfile() {
  const totals = Object.fromEntries(traitMeta.map(([key]) => [key, 0]));
  let count = 0;
  questions.forEach((question, index) => {
    const saved = state.answers[index];
    const picked = Array.isArray(saved) ? saved.map(value => question.answers[value]) : [question.answers[saved]];
    picked.filter(Boolean).forEach(answer => {
      traitMeta.forEach(([key]) => totals[key] += answer.scores[key] / picked.length);
    });
    if (picked.some(Boolean)) count++;
  });
  return Object.fromEntries(traitMeta.map(([key]) => [key, Math.round(totals[key] / Math.max(1, count))]));
}

function getMatches(profile) {
  return characters.map(item => {
    const squaredDistance = traitMeta.reduce((sum, [key]) => sum + Math.pow(profile[key] - item.traits[key], 2), 0);
    const raw = 100 - Math.sqrt(squaredDistance) / Math.sqrt(traitMeta.length);
    return { item, score: Math.round(Math.max(0, Math.min(99, raw))) };
  }).sort((a, b) => b.score - a.score);
}

function resultNarrative(profile, match) {
  const sorted = traitMeta.map(([key, label]) => ({ key, label, value: profile[key] })).sort((a, b) => b.value - a.value);
  const first = sorted[0], second = sorted[1];
  const openings = {
    will: "你很难真正向困境低头", empathy: "你会先感到人，再看见局势", strategy: "你习惯在行动前看见隐藏的变量", discipline: "你相信稳定投入比一时爆发更可靠",
    independence: "你需要为自己的方向保留决定权", leadership: "你会自然承担让众人继续前进的责任", shadow: "你对痛苦与矛盾有很深的感受力", idealism: "你总在现实之上保留一个应然的世界"
  };
  return `${openings[first.key]}，同时你的“${second.label}”也非常突出。这使你像${match.name}一样，往往不是被表面的输赢驱动，而是被内在认定的意义推动。你们共享的优势是${match.tags.slice(0, 2).join("与")}；需要留意的是：${match.tension}`;
}

function showResult() {
  const profile = calculateProfile();
  const matches = getMatches(profile);
  const top = matches[0];
  const resultItem = { ...top.item, traits: profile };
  document.querySelector("#progress-label").textContent = "试炼完成";
  document.querySelector("#progress-bar").style.width = "100%";
  quizStage.innerHTML = `<section class="result-panel" style="--accent:${top.item.accent}">
    <div class="result-head"><div class="section-kicker">TRIAL COMPLETE · 心相结算</div><h2>你的心相已经显现</h2><p>基于 25 次选择生成；结果描述的是倾向，而不是给你下定义。</p></div>
    <div class="result-main">
      <div class="result-identity"><span class="character-emblem" aria-hidden="true">${top.item.emblem}</span><span class="match-label">YOUR INNER SHINOBI</span><h3>${top.item.name}</h3><span class="romanized">${top.item.romanized}</span><div class="match-score"><strong>${top.score}%</strong><br>心相相似度</div></div>
      <div class="result-analysis"><span>PERSONAL ANALYSIS · 你的侧写</span><h3>${top.item.archetype}</h3><p>${resultNarrative(profile, top.item)}</p>${traitBars(resultItem, "result-traits")}
        <span style="display:block;margin-top:26px">ALSO RESONATES · 次相共鸣</span>
        <div class="runner-ups">${matches.slice(1, 3).map(match => `<div class="runner" style="--accent:${match.item.accent}"><span class="small-emblem">${match.item.emblem}</span><div><b>${match.item.name} · ${match.score}%</b><small>${match.item.archetype}</small></div></div>`).join("")}</div>
      </div>
    </div>
    <div class="result-actions"><button id="view-match">查看 ${top.item.name} 完整卷宗</button><button id="restart-trial">重新测试</button><button id="return-archive">返回角色库</button></div>
  </section>`;
  quizStage.querySelector("#view-match").addEventListener("click", () => { exitQuiz(); openDrawer(top.item.name); });
  quizStage.querySelector("#restart-trial").addEventListener("click", () => { state.answers = Array(questions.length).fill(null); showQuizWelcome(); });
  quizStage.querySelector("#return-archive").addEventListener("click", () => { exitQuiz(); document.querySelector("#archive").scrollIntoView({ behavior: "smooth" }); });
}

document.querySelectorAll("[data-start-quiz]").forEach(button => button.addEventListener("click", openQuiz));
document.querySelectorAll("[data-exit-quiz]").forEach(button => button.addEventListener("click", exitQuiz));
document.querySelectorAll("[data-close-drawer]").forEach(button => button.addEventListener("click", closeDrawer));
document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
  state.filter = button.dataset.filter;
  document.querySelectorAll("[data-filter]").forEach(item => item.classList.toggle("active", item === button));
  renderCharacters();
}));
document.querySelector("#character-search").addEventListener("input", event => { state.search = event.target.value; renderCharacters(); });
grid.addEventListener("click", event => { const card = event.target.closest("[data-character]"); if (card) openDrawer(card.dataset.character); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape") { if (drawerLayer.classList.contains("open")) closeDrawer(); else if (quizLayer.classList.contains("open")) exitQuiz(); }
});

const menuButton = document.querySelector(".menu-toggle");
menuButton.addEventListener("click", () => {
  const nav = document.querySelector(".desktop-nav");
  const open = nav.classList.toggle("mobile-open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "关闭" : "菜单";
});
document.querySelectorAll(".desktop-nav a, .desktop-nav button").forEach(item => item.addEventListener("click", () => {
  document.querySelector(".desktop-nav").classList.remove("mobile-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "菜单";
}));

renderCharacters();
