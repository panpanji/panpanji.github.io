/* ============================================================
   个人主页 · 双语内容配置  (Bilingual content configuration)
   ------------------------------------------------------------
   说明 / How to edit:
   - 每个条目都有 en（英文）和 zh（中文）两个版本。
   - 想修改文字，直接改下面对应的字符串即可；中英文页面会自动同步。
   - 新增 / 修改研究项目：编辑下方 projects 数组，复制一个对象结构。
   - 本文件只放内容，不放样式与逻辑。
   ============================================================ */

const SITE = {

  /* ---------- 页头 profile ---------- */
  profile: {
    en: {
      eyebrow: 'ECOSYSTEM MONITORING · REMOTE SENSING · SPATIAL MODELLING',
      zhName: '冀盼盼',
      email: 'Email',
      location: 'Location',
      locationValue: 'China'
    },
    zh: {
      eyebrow: '生态系统监测 · 遥感 · 空间建模',
      zhName: '冀盼盼',
      email: '邮箱',
      location: '所在地',
      locationValue: '中国'
    }
  },

  /* ---------- 导航 nav ---------- */
  nav: {
    en: ['Research Interests', 'Education', 'Publications', 'Skills', 'Trajectory', 'Projects', 'Field Work', 'GitHub'],
    zh: ['研究兴趣', '教育背景', '发表与产出', '技能与方法', '研究轨迹', '研究项目', '野外研究', 'GitHub']
  },

  /* ---------- 关于我 about ---------- */
  about: {
    en: {
      heading: 'Research Interests',
      text: 'My research applies remote sensing, spatial modelling, and data-driven methods to understand environmental change and support ecosystem restoration, integrating multi-source Earth observation, field measurements, and geospatial analysis across spatial scales. I am developing GeoAI and machine-learning skills to strengthen environmental monitoring and prediction.',
      profile: [
        'Remote sensing & Earth observation',
        'Spatial and environmental modelling',
        'Ecosystem monitoring & restoration',
        'Environmental change and ecosystem processes',
        'Data-driven environmental assessment',
        'GeoAI / machine learning'
      ]
    },
    zh: {
      heading: '研究兴趣',
      text: '我的研究应用遥感、空间建模与数据驱动方法理解环境变化并支持生态系统恢复，整合跨空间尺度的多源对地观测、野外测量与地理空间分析；并正着力发展 GeoAI 与机器学习能力，以强化环境监测与预测。',
      profile: [
        '遥感与对地观测',
        '空间与环境建模',
        '生态系统监测与恢复',
        '环境变化与生态系统过程',
        '数据驱动的环境评估',
        'GeoAI 与机器学习'
      ]
    }
  },

  /* ---------- 教育 education ---------- */
  education: {
    en: {
      heading: 'Education',
      entries: [
        { degree: 'MSc Environmental Monitoring, Modelling and Reconstruction', school: 'University of Manchester', place: 'Manchester, UK', period: 'Sep 2024 – Sep 2025' },
        { degree: 'BSc Grassland Science', school: 'Northwest A&F University', place: 'Shaanxi, China', period: 'Sep 2020 – Jun 2024' }
      ]
    },
    zh: {
      heading: '教育背景',
      entries: [
        { degree: '硕士 · 环境监测、建模与重建', school: '曼彻斯特大学', place: '英国 曼彻斯特', period: '2024年9月 – 2025年9月' },
        { degree: '学士 · 草业科学', school: '西北农林科技大学', place: '中国 陕西', period: '2020年9月 – 2024年6月' }
      ]
    }
  },

  /* ---------- 研究项目章节标题与字段标签（projectsMeta） ---------- */
  projectsMeta: {
    en: {
      researchHeading: 'Research Projects',
      courseHeading: 'Selected Course Projects',
      researchBadge: 'RESEARCH',
      courseBadge: 'COURSE',
      keywordsLabel: 'Keywords',
      problemLabel: 'Key Problem',
      approachLabel: 'Methods',
      resultsLabel: 'Key Results',
      outputLabel: 'Output',
      skillsLabel: 'Skills'
    },
    zh: {
      researchHeading: '科研项目',
      courseHeading: '课程项目',
      researchBadge: '科研项目',
      courseBadge: '课程项目',
      keywordsLabel: '关键词',
      problemLabel: '关键问题',
      approachLabel: '方法',
      resultsLabel: '主要结果',
      outputLabel: '产出',
      skillsLabel: '技能'
    }
  },

  /* ---------- 研究项目 projects ----------
     字段说明：
     - id: 项目锚点编号
     - period / site / role: 时间、地点、角色（中英通用部分保留原文）
     - supervisor: 导师/合作者
     - en / zh: 标题与各结构化字段
  */
  projects: [
    {
      id: 'project-1',
      type: 'research',
      period: 'Feb 2025 – Aug 2025',
      role: 'MSc dissertation',
      site: 'Bolton Fell Moss, Cumbria, UK',
      supervisor: 'Dr Emma Shuttleworth, Department of Geography, University of Manchester',
      en: {
        title: 'Assessing Nitrogen and Sediment Export during Peatland Restoration at Bolton Fell Moss (MSc Dissertation)',
        keywords: ['Peatland restoration', 'InVEST NDR/SDR', 'Data-limited environments', 'Google Earth Engine', 'Land cover change', 'Spatial modelling', 'Bare peat'],
        problem: 'Bolton Fell Moss is a ~381 ha lowland raised bog in Cumbria, UK, degraded by drainage and commercial peat extraction (bare peat covered nearly half the site by 2013) and restored since then under the Cumbria BogLIFE programme (peat dams, ditch blocking, rewetting, Sphagnum transplanting). This dissertation asked three questions: to what extent does restoration reduce nitrogen and sediment export at the site scale; can the InVEST model capture this process under data-limited conditions; and what do the results imply for assessing restoration effectiveness and future peatland management?',
        approach: 'Built a multi-source, low-data spatial framework for two periods (2015 vs 2020). Harmonised a 1 m DEM, a 25 m land-cover map reclassified in Google Earth Engine (5 restoration-specific classes: bare peat / low, medium, high-vegetation peat / farmland-grassland), and 1 km precipitation and soil-erodibility (K-factor) grids, all resampled to 10 m. Ran InVEST 3.16.2 NDR (nitrogen delivery ratio) and SDR (sediment delivery ratio) with restoration-specific parameter sets in ArcGIS 10.8. Given the lack of site-scale measured data, the reasonableness of the modelled results was assessed by comparison with published observations from other UK peatlands.',
        results: 'Area-weighted modelled nitrogen export fell from 3.50 to 0.72 kg ha⁻¹ yr⁻¹ (−79.5%) and sediment export from 0.033 to 0.0058 t ha⁻¹ yr⁻¹ (−82.4%) between 2015 and 2020, consistent with other UK peatlands. High-vegetation peat expanded from 9.6% to 66.9% of the site and bare peat fell from 16.0% to 0. High-risk zones shifted from a contiguous mid-south block to isolated edge patches, with residual risk near historic drainage ditches. Results are interpreted as relative trends rather than absolute values, given uncalibrated parameters and the model’s simplification of peatland hydrology.',
        output: 'MSc dissertation, University of Manchester (2025), with Dr Emma Shuttleworth',
        skills: 'Geospatial data harmonisation; Google Earth Engine classification; InVEST NDR/SDR modelling; spatiotemporal change analysis; critical evaluation of model limits'
      },
      zh: {
        title: 'Bolton Fell Moss 泥炭地恢复期间氮与泥沙输出评估（硕士论文）',
        keywords: ['泥炭地恢复', 'InVEST NDR/SDR 模型', '数据受限环境', 'Google Earth Engine', '土地覆被变化', '空间建模', '裸泥炭'],
        problem: 'Bolton Fell Moss 是英国坎布里亚约 381 ha 的低洼隆起泥炭沼，因排水与商业采泥炭而退化（到 2013 年近半数地表为裸泥炭），此后在 Cumbria BogLIFE 项目下开展恢复（泥炭坝、沟渠封堵、再湿润、泥炭藓移植）。本论文提出三个问题：在场地尺度上，泥炭地恢复在多大程度上减少氮与泥沙输出？数据受限条件下 InVEST 模型能否刻画该过程并提供有意义的信息？结果对英国泥炭地恢复成效评估与未来管理有何启示？',
        approach: '构建 2015 与 2020 两期的多源、低数据空间框架：统一配准 1 m DEM、在 Google Earth Engine 中重分类的 25 m 土地覆被图（5 类恢复场景覆被：裸泥炭 / 低、中、高植被泥炭 / 农田草地）以及 1 km 降水与土壤可蚀性 K 因子栅格，统一重采样至 10 m；在 ArcGIS 10.8 中运行 InVEST 3.16.2 的 NDR（氮输送比）与 SDR（泥沙输送比）模块并设置恢复特定参数。因缺乏场地尺度实测数据，通过与英国其他泥炭地已发表观测结果进行比较，对模拟结果的合理性进行评估。',
        results: '2015–2020 年间，面积加权模拟氮输出由 3.50 降至 0.72 kg ha⁻¹ yr⁻¹（−79.5%）、泥沙输出由 0.033 降至 0.0058 t ha⁻¹ yr⁻¹（−82.4%），与英国其他泥炭地观测一致；高植被泥炭占比由 9.6% 增至 66.9%，裸泥炭由 16.0% 降至 0；高风险区由中南部连片区域收缩为边缘斑块，历史排水沟附近仍存在残余风险。鉴于参数未经本地标定、模型对泥炭地水文有所简化，结果作为相对趋势而非绝对数值解释。',
        output: '硕士毕业论文，曼彻斯特大学（2025），导师 Dr Emma Shuttleworth',
        skills: '空间数据配准与重采样；GEE 土地覆被分类；InVEST NDR/SDR 建模；时空变化分析；模型局限的批判性评估'
      }
    },
    {
      id: 'project-2',
      type: 'research',
      period: 'Feb 2025 – Jun 2025',
      role: 'Research assistant',
      site: 'Soil & Ecosystem Ecology Lab, University of Manchester',
      supervisor: 'Dr Filipa Cox & Dr Emily Brooks',
      en: {
        title: 'Forest Ecosystem Responses to Drought and Environmental Stress (Research Assistant)',
        keywords: ['Forest ecology', 'Drought experiment', 'Rain-out shelter', 'Plant gas exchange', 'Chlorophyll fluorescence', 'Soil C/N analysis'],
        problem: 'How do tree species, soil conditions, and water availability affect forest ecosystem functioning — specifically how different species respond physiologically to drought, and how forest soil carbon and nitrogen are structured?',
        approach: 'As a research assistant in the Soil & Ecosystem Ecology Lab (University of Manchester), contributed to a collaborative PhD project on ectomycorrhizal fungi and the drought resistance of UK forests across the full experimental chain. In a Thetford Forest drought field experiment, transplanted Scots pine (Pinus sylvestris) and sycamore (Acer pseudoplatanus) seedlings and assisted in setting up rain-out shelters to simulate drought, including multi-day field experiment coordination. Ran microcosm experiments on plant physiological responses to drought, measuring leaf gas exchange (LI-6800: photosynthesis, stomatal conductance, transpiration) and chlorophyll fluorescence (FluorPen), alongside soil pH, EC, and C/N analyses. Processed 192 forest soil samples from the ORPHEE tree-diversity platform (France) for C:N analysis — drying, grinding, homogenisation, precise weighing, and elemental analysis (Vario EL cube).',
        results: 'Gained hands-on experience from field drought manipulation, to plant physiological measurement, to soil physicochemical and elemental analysis in temperate forest systems.',
        output: 'Research assistant, Soil & Ecosystem Ecology Lab, University of Manchester',
        skills: 'Field experiment design & logistics; rain-out-shelter drought experiments; plant gas exchange (LI-6800); chlorophyll fluorescence (FluorPen); soil pH/EC/C/N; elemental analysis (Vario EL cube)'
      },
      zh: {
        title: '森林生态系统对干旱与环境胁迫的响应（研究助理）',
        keywords: ['森林生态', '干旱实验', '降雨排除装置', '植物气体交换', '叶绿素荧光', '土壤碳氮分析'],
        problem: '树种、土壤条件与水分可利用性如何影响森林生态系统功能——不同树种在干旱下如何做出生理响应，森林土壤碳氮如何构成？',
        approach: '在曼彻斯特大学土壤与生态系统生态实验室担任研究助理，参与一项关于外生菌根真菌与英国森林抗旱性的合作博士项目，覆盖从野外干旱处理、植物生理测定到土壤性质分析的完整实验链。在 Thetford 森林干旱田间实验中，移栽欧洲赤松（Pinus sylvestris）与欧洲槭（Acer pseudoplatanus）幼苗，并协助搭建降雨排除装置（rain-out shelter）模拟干旱，参与多日野外实验的协调与后勤。开展干旱微宇宙实验，测定植物对干旱的生理响应——用 LI-6800 测定叶片气体交换（光合、气孔导度、蒸腾），用 FluorPen 测定叶绿素荧光，并开展土壤 pH、EC、C/N 测定。处理了 192 份来自法国 ORPHEE 树木多样性平台的森林土壤样品用于 C:N 分析——干燥、研磨、均质化、精确称量，并用 Vario EL cube 进行元素分析。',
        results: '掌握了从野外干旱操纵、植物生理测定到土壤理化与元素分析的完整流程，积累了温带森林生态研究的实践经验。',
        output: '研究助理，曼彻斯特大学土壤与生态系统生态实验室',
        skills: '田间实验设计与协调；降雨排除式干旱实验；植物气体交换（LI-6800）；叶绿素荧光（FluorPen）；土壤 pH/EC/C/N；元素分析（Vario EL cube）'
      }
    },
    {
      id: 'project-3',
      type: 'coursework',
      period: 'MSc course projects, 2024–2025',
      role: 'Individual & group coursework',
      site: 'University of Manchester',
      supervisor: '—',
      en: {
        title: 'Ecosystem Carbon Flux Modelling and NEE Estimation',
        keywords: ['Carbon flux', 'Net ecosystem exchange (NEE)', 'Process-based modelling', 'Static chamber', 'Non-linear calibration', 'Model validation'],
        problem: 'How can plot-scale CO₂ exchange be measured and simulated, and how strongly do temperature and water-table depth drive ecosystem respiration and net ecosystem exchange (NEE) in a floodplain ecosystem?',
        approach: 'Measured CO₂ fluxes with the static chamber method (dark/light readings) at two floodplain sites — an unmodified site and a site with a particulate organic matter (POM) layer. Calibrated two process-based models, Model 1 (temperature only) and Model 2 (temperature + water-table depth), using non-linear parameter fitting (Excel Solver), and validated them through RMSE, R², residual analysis, Q-Q plots, normality tests, Wilcoxon signed-rank tests, and Spearman correlation.',
        results: 'Model 2 (temperature + water-table depth) outperformed Model 1 (R² = 0.69 vs 0.53; RMSE = 0.101 vs 0.13), showing that water-table depth adds explanatory power. Annual NEE was estimated at about 580 gC m⁻² yr⁻¹ (net release) at the studied floodplain sites, with peak fluxes in July and near-zero fluxes in the cold season.',
        output: 'MSc coursework (GEOG70581 CO₂ Flux Practical)',
        skills: 'Static-chamber flux measurement; Excel Solver non-linear calibration; model validation diagnostics; carbon-flux data analysis'
      },
      zh: {
        title: '生态系统碳通量建模与 NEE 估算',
        keywords: ['碳通量', '净生态系统交换（NEE）', '过程式模型', '静态箱法', '非线性参数标定', '模型验证'],
        problem: '如何测量并模拟样地尺度 CO₂ 交换？在洪泛平原生态系统中，温度和地下水位深度分别在多大程度上驱动生态系统呼吸与净生态系统交换（NEE）？',
        approach: '在两个洪泛平原样点（未改造样点 A5 与含颗粒有机质层样点 B4）用静态箱法（暗箱/光箱读数）测定 CO₂ 通量；用 Excel Solver 进行非线性参数拟合，标定两个过程式模型——Model 1（仅温度）与 Model 2（温度 + 地下水位深度），并通过 RMSE、R²、残差分析、Q-Q 图、正态性检验、Wilcoxon 符号秩检验与 Spearman 相关进行验证。',
        results: '含地下水位深度的 Model 2 优于仅温度的 Model 1（R² = 0.69 vs 0.53；RMSE = 0.101 vs 0.13），说明地下水位深度具有额外解释力；研究洪泛平原样点年 NEE 估算约 580 gC m⁻² yr⁻¹（净释放），7 月通量达峰值、冷季趋近于零。',
        output: '硕士课程项目（GEOG70581 CO₂ 通量实习）',
        skills: '静态箱法通量测定；Excel Solver 非线性标定；模型验证诊断；碳通量数据分析'
      }
    },
    {
      id: 'project-4',
      type: 'coursework',
      period: 'MSc course projects, 2024–2025',
      role: 'Individual & group coursework',
      site: 'University of Manchester',
      supervisor: '—',
      en: {
        title: 'Hydrological and Hydraulic Modelling Applications',
        keywords: ['Hydrology', 'Hydraulic modelling', '1D/2D simulation', 'Rainfall interpolation', 'GIS', 'Glacier runoff model', 'Non-linear calibration'],
        problem: 'How do terrain, channel geometry, rainfall, and climate drive runoff, flood extent, and water-resource availability — and how can these processes be simulated and calibrated against limited observations?',
        approach: 'Used GIS for spatial analysis, rainfall interpolation (regression, MQUAD, co-kriging), and DEM-based terrain processing; ran 1D/2D hydraulic simulations on the River Upton reach to model water levels and outflows under changing channel and floodplain geometry; calibrated a glacier runoff model with Excel Solver (degree-day factors, lapse rate, snowline); and assessed reference evapotranspiration (Penman–Monteith) and irrigation water demand.',
        results: 'Co-kriging gave the most accurate rainfall interpolation (errors mostly under ±20 mm); 1D simulations captured peak water level falling from 17.9 to 13.5 m and peak outflow from 1161.7 to 624.5 m³/s as the channel widened downstream (~100 m to ~1700 m); glacier-model calibration yielded degree-day factors of 0.73 (ice) and 0.27 (snow), a lapse rate of 0.41 °C/100 m, and a snowline of 5800 m.',
        output: 'MSc coursework (GEOG 70552 Environmental Monitoring and Modelling)',
        skills: 'GIS interpolation and terrain analysis; 1D/2D hydraulic modelling; non-linear calibration; evapotranspiration and water-demand assessment'
      },
      zh: {
        title: '水文与水力学建模应用',
        keywords: ['水文', '水力学建模', '一维/二维模拟', '降雨插值', 'GIS', '冰川径流模型', '非线性标定'],
        problem: '地形、河道形态、降雨与气候如何驱动径流、淹没范围与水资源可用性？如何在观测有限条件下对这些过程进行模拟并标定？',
        approach: '使用 GIS 开展空间分析、降雨插值（回归、MQUAD、协同克里金）与基于 DEM 的地形处理；在 Upton 河段开展一维/二维水力学模拟，刻画河道与洪泛区形态变化下的水位与出流；用 Excel Solver 标定冰川径流模型（度日因子、温度直减率、雪线）；并开展参考蒸散发（Penman–Monteith）与灌溉需水评估。',
        results: '协同克里金插值精度最高（误差多小于 ±20 mm）；一维模拟刻画了河道向下游展宽（约 100 m→1700 m）时峰值水位由 17.9 降至 13.5 m、峰值出流由 1161.7 降至 624.5 m³/s；冰川径流模型标定得到度日因子（冰 0.73、雪 0.27）、温度直减率 0.41 ℃/100 m、雪线 5800 m。',
        output: '硕士课程项目（GEOG 70552 环境监测与建模）',
        skills: 'GIS 插值与地形分析；一维/二维水力学建模；非线性标定；蒸散发与需水评估'
      }
    },
    {
      id: 'project-5',
      type: 'research',
      period: 'Aug 2024 – Dec 2025',
      role: 'Research assistant',
      site: 'Sinan County, Guizhou, China (karst, Yunnan–Guizhou Plateau)',
      supervisor: 'Prof. Zhixin Zhang, Northwest A&F University',
      en: {
        title: 'Conservation Tillage and Agroecosystem Sustainability (Rapeseed–Maize Rotation)',
        keywords: ['Conservation tillage', 'Rapeseed–maize rotation', 'Life Cycle Assessment (LCA)', 'Global warming potential', 'Energy use', 'Water use', 'Karst region', 'Straw mulching'],
        problem: 'Karst soils are thin, erodible, and fragile, so conservation tillage is often proposed but rarely evaluated across productivity and environment together. This study asked whether no-till combined with straw mulching can jointly raise maize yield and quality, energy-use efficiency, and environmental sustainability in a rainfed rapeseed–maize rotation — and how the effects vary by variety.',
        approach: 'Analysed a three-year (2019–2021) rainfed field trial in the karst Yunnan–Guizhou Plateau (Sinan, Guizhou; 27°44′N, 108°11′E): 16 treatments combining 4 maize varieties × no-till/conventional tillage × straw/no-straw mulch, randomised complete block with 3 replicates. Conducted Life Cycle Assessment (LCA) following ISO 14040/14044 (functional unit: 1 ha maize yield; nine impact categories including global warming potential, energy demand, water use, acidification, and eutrophication), together with energy analysis (energy input/output, net energy) and economic analysis. Statistical comparisons by SPSS ANOVA/LSD; figures in Origin.',
        results: 'No-till raised maize yield by 7.7% over conventional tillage, straw mulch improved forage quality (relative feed value +3%, ADF −4.5%), and the no-till + straw combination gave the highest yield (+10%) and net energy (+22%) while lowering global warming potential (−7.4%) and cumulative energy demand (−11.3%). Recommended no-till + straw mulching as a synergistic practice for fragile karst agroecosystems.',
        output: 'Co-first author, manuscript under revision',
        skills: 'Multi-year field dataset analysis; LCA (ISO 14040/44); energy and economic analysis; manuscript and figure preparation'
      },
      zh: {
        title: '保护性耕作与农田生态系统可持续性评估（油菜–玉米轮作）',
        keywords: ['保护性耕作', '油菜–玉米轮作', '生命周期评价（LCA）', '全球增温潜势', '能源利用', '水分利用', '喀斯特地区', '秸秆覆盖'],
        problem: '喀斯特地区土壤浅薄、易侵蚀且脆弱，保护性耕作常被提倡，但很少同时从生产力与环境两个维度进行系统评估。本研究探讨：免耕配合秸秆覆盖能否在雨养油菜–玉米轮作中同时提升玉米产量与饲用品质、能源利用效率与环境可持续性，且效应是否因品种而异。',
        approach: '分析喀斯特云贵高原（贵州思南，27°44′N，108°11′E）2019–2021 三年雨养田间试验：16 个处理 = 4 个玉米品种 × 免耕/传统耕作 × 有/无秸秆覆盖，完全随机区组、3 次重复。依据 ISO 14040/14044 开展生命周期评价（LCA，功能单位为 1 ha 玉米产量，涵盖全球增温潜势、能源需求、水分利用、酸化、富营养化等 9 个影响类别），并结合能量分析（能量投入/产出、净能量）与经济分析；SPSS 方差分析与 LSD 多重比较，Origin 绘图。',
        results: '免耕较传统耕作玉米增产 7.7%，秸秆覆盖提升饲用品质（相对饲喂价值 +3%、酸性洗涤纤维 −4.5%），免耕+覆盖组合产量最高（+10%）且净能量最高（+22%），同时全球增温潜势降低 7.4%、累积能源需求降低 11.3%。推荐免耕配合秸秆覆盖作为脆弱喀斯特农田的协同耕作措施。',
        output: '共同第一作者，论文返修中',
        skills: '多年田间数据分析；LCA（ISO 14040/44）；能量与经济分析；论文与图件准备'
      }
    },
    {
      id: 'project-6',
      type: 'research',
      period: 'May 2023 – May 2024',
      role: 'BSc dissertation',
      site: 'Alpine degraded mining areas, Qinghai, China',
      supervisor: 'Prof. Jiancun Kou, Northwest A&F University',
      en: {
        title: 'Effects of Organic Fertiliser Amendment in Alpine Mining Areas (BSc Dissertation)',
        keywords: ['Organic fertiliser', 'Alpine degraded land', 'Plant growth', 'Soil properties', 'Ecological restoration'],
        problem: 'Does organic fertiliser amendment improve plant growth and soil properties in degraded alpine sites affected by mining, and how do treatment responses compare?',
        approach: 'Investigated treatment responses through field sampling, laboratory analysis, and statistical comparisons of plant growth and soil physicochemical properties.',
        results: 'Characterised the effects of organic fertiliser amendment on plant growth and soil properties in degraded alpine sites.',
        output: 'BSc dissertation, Northwest A&F University',
        skills: 'Field sampling; laboratory soil and plant analysis; treatment-comparison statistics'
      },
      zh: {
        title: '高寒矿区有机肥改良效应研究（学士论文）',
        keywords: ['有机肥', '高寒退化土地', '植物生长', '土壤性质', '生态恢复'],
        problem: '在受采矿影响的高寒退化样地中，施用有机肥能否改善植物生长与土壤性质？不同处理间的响应有何差异？',
        approach: '通过野外采样、室内分析与统计比较，考察有机肥处理对植物生长与土壤理化性质的影响。',
        results: '刻画了有机肥改良对高寒退化样地植物生长与土壤性质的影响。',
        output: '学士毕业论文，西北农林科技大学',
        skills: '野外采样；室内土壤/植物分析；处理间统计比较'
      }
    },
    {
      id: 'project-7',
      type: 'research',
      period: 'Jan 2022 – Jan 2023',
      role: 'Research participant',
      site: 'Qinghai–Tibet Plateau, China',
      supervisor: 'Prof. Zhixin Zhang; in collaboration with Xiaoxi Yang, Wenxuan Zhao, Yajing An',
      en: {
        title: 'Germination Trait Variation under Temperature and Drought Stress (14 Native Species)',
        keywords: ['Seed germination', 'Qinghai–Tibet Plateau', 'Temperature gradient', 'PEG-6000 simulated drought', 'Functional traits', 'Ecological restoration'],
        problem: 'Native species are needed to restore alpine grassland, but their germination behaviour under different temperature and water conditions is poorly known. This study asked how 14 Qinghai–Tibet Plateau species differ in germination response to temperature (10°C, simulating spring; 20°C, simulating summer) and water potential (PEG-6000: 0 to −4.8 MPa), in order to screen species suitable for ecological restoration.',
        approach: 'Ran a two-factor (temperature × water potential) germination experiment: 4 replicates × 100 seeds per dish, double filter-paper petri dishes, 20 days at 60% relative humidity under 12 h light/12 h dark. Quantified germination percentage (GR), mean germination time (MGT), and germination rate index (CRG = 1/MGT), with SPSS 25.0 two-way ANOVA and Tukey post-hoc tests and Origin 9.1 plotting.',
        results: 'Germination percentage ranged 0–97%; 12 of 14 species germinated better at 20°C than 10°C, and germination declined with decreasing water potential. Temperature affected germination percentage more than water potential. Asteraceae and Caryophyllaceae outperformed other families. Results support species selection for alpine restoration (e.g., Silene moorcroftiana, Leontopodium nanum, Anaphalis xylorhiza for spring; Artemisia wellbyi for summer establishment).',
        output: 'Peer-reviewed publication, Pratacultural Science, 41(5): 1078–1087 (2024)',
        skills: 'Controlled germination experiments; functional-trait metrics; two-way ANOVA; scientific writing (published paper)'
      },
      zh: {
        title: '温度与干旱胁迫下的种子萌发特性（青藏高原 14 种植物）',
        keywords: ['种子萌发', '青藏高原', '温度梯度', 'PEG-6000 模拟干旱', '功能性状', '生态恢复'],
        problem: '高寒草地生态恢复需要乡土草种，但其在不同温度与水分条件下的萌发行为尚不清楚。本研究以 14 种青藏高原乡土草种为材料，探究其在温度（10℃ 模拟春季、20℃ 模拟夏季）与水分势（PEG-6000：0 至 −4.8 MPa）双因素下的萌发响应，为筛选适宜生态恢复的草种提供依据。',
        approach: '开展温度×水势双因素萌发实验：每处理 4 次重复、每皿 100 粒，双层滤纸培养皿，60% 相对湿度、12 h 光照/12 h 黑暗、培养 20 d；量化发芽率（GR）、平均发芽时间（MGT）与萌发速率指数（CRG = 1/MGT），用 SPSS 25.0 双因素方差分析与 Tukey 多重比较，Origin 9.1 作图和线性拟合。',
        results: '发芽率变幅 0–97%；14 种中 12 种在 20℃ 的发芽率高于 10℃，发芽率随水势降低而下降；温度对发芽率的作用大于水势；菊科、石竹科的萌发表现优于其他科。结果为高寒地区生态恢复草种筛选提供依据（如藏西蝇子草、矮火绒草、木根香青可春季建植，藏沙蒿可夏季建植）。',
        output: '同行评审论文，草业科学，41(5)：1078–1087（2024）',
        skills: '控制萌发实验；功能性状指标；双因素方差分析；科研写作（已发表论文）'
      }
    },
    {
      id: 'project-8',
      type: 'research',
      period: 'Nov 2021 – Feb 2022',
      role: 'Research participant',
      site: 'Semi-arid Loess Plateau, China',
      supervisor: 'Prof. Zhixin Zhang; in collaboration with Xiaoxi Yang, Wenxuan Zhao, Yajing An',
      en: {
        title: 'Biochar and Water–Root Interaction in Maize–Alfalfa Intercropping',
        keywords: ['Biochar', 'Plant water use', 'Interspecific competition', 'Intercropping', 'Loess Plateau', 'Root morphology', 'Water competition index', 'Land equivalent ratio'],
        problem: 'On the semi-arid Loess Plateau, rainfall is scarce and uneven, so water is the key factor limiting crop yield. Intercropping improves water use and land-use efficiency, but how to relieve the water competition between co-existing crops remains an open question. This project asked whether biochar — known for its water-retention capacity — can regulate plant water use and alleviate interspecific water competition in a forage-maize/alfalfa intercropping system, and at what application depth it works best.',
        approach: 'Contributed to a two-year experiment (2021–2023) at Ansai on the Loess Plateau. Intercropping was simulated in field pits (60 cm diameter × 80 cm deep) with nylon-bag potted soil in a randomised complete block design with three replicates. Biochar was applied at 0, 15, 30, and 50 t/ha at 0–10 or 10–20 cm depth, to one or both crops, against a monoculture control. Measured soil moisture (oven-dry method, ring cutter), root morphology (EPSON Scan + WinRHIZO), and computed water-use efficiency, the water competition index, and the land equivalent ratio; statistical comparisons by SPSS (Duncan) and Origin.',
        results: 'Quantified how biochar rate and placement depth modulate root growth, soil water use, and interspecific water competition in maize–alfalfa intercropping, providing evidence on the optimal biochar application depth for dryland forage systems.',
        output: 'Member of the Northwest A&F University Innovation & Entrepreneurship Training Programme (2021–2023); field experiment participation',
        skills: 'Field experiment design (RCBD); root morphology analysis (WinRHIZO); soil moisture methods; water-use and competition indices'
      },
      zh: {
        title: '生物炭调控玉米–苜蓿间作系统的水分–根系互作',
        keywords: ['生物炭', '植物水分利用', '种间竞争', '间作', '黄土高原', '根系形态', '水分竞争指数', '土地当量比'],
        problem: '黄土高原干旱半干旱、降水稀少且季节分布不均，水分是限制作物产量的关键因素。间作能提升水分利用与土地利用率，但如何缓解共作物之间的水分竞争仍是空白。本项目探讨：具有保水潜力的生物炭能否调控饲用玉米–苜蓿间作系统中的水分利用、缓解种间水分竞争，以及最佳施用深度是多少。',
        approach: '参与 2021–2023 年黄土高原安塞的两年试验。采用田间挖坑（直径 60 cm、深 80 cm）+ 尼龙袋装土的方式模拟间作，随机区组、3 次重复；生物炭施用量设 0、15、30、50 t/hm²，施用深度 0–10、10–20 cm，施于单一种或两种作物，并以单播为对照。测定土壤含水量（烘干法、环刀法）与根系形态（EPSON Scan + WinRHIZO），计算水分利用效率、水分竞争指数与土地当量比；用 SPSS（Duncan 多重比较）与 Origin 进行统计分析与绘图。',
        results: '量化了生物炭施用量与施用深度对间作系统根系生长、土壤水分利用与种间水分竞争的调控作用，为旱区饲用玉米–苜蓿间作的生物炭合理施用深度提供了依据。',
        output: '西北农林科技大学大学生创新创业训练计划项目成员（2021–2023）；参与田间试验',
        skills: '田间试验设计（随机区组）；根系形态分析（WinRHIZO）；土壤水分测定；水分利用与竞争指数'
      }
    },
    {
      id: 'project-10',
      type: 'coursework',
      period: 'MSc course, 2024–2025',
      role: 'Individual coursework',
      site: 'Mersey Basin, UK',
      supervisor: '—',
      en: {
        title: 'Modelling River Hydrochemistry in the Mersey Basin',
        keywords: ['DEM hydrology', 'Watershed delineation', 'WhiteboxTools (R)', 'Stepwise regression', 'Water quality', 'GIS'],
        problem: 'How do catchment characteristics — land use, soil (HOST), bedrock, and terrain — drive river water chemistry, and can ten water-quality indicators (pH, suspended solids, Ca, Mg, TON, NO₃, NO₂, NH₄, PO₄, Zn) be predicted from them?',
        approach: 'Derived D8 flow routing, flow accumulation, and watershed delineation from a 30 m DEM using WhiteboxTools in R; reclassified land cover, HOST soil classes, and bedrock types; applied spatial interpolation; ran collinearity tests; used stepwise regression (BIC) to model each water-quality indicator; evaluated models by adjusted R² and RMSE.',
        results: 'Zn and Ca were predicted best (adjusted R² = 0.837 and 0.672); urban land use was positively related to Zn, NO₂, NH₄, and PO₄, while arable land related to suspended solids, Ca, Mg, and NO₃ — linking land cover and catchment geology to river hydrochemistry.',
        output: 'MSc coursework (GEOG 70581, second assignment)',
        skills: 'R + WhiteboxTools DEM hydrology; watershed delineation; stepwise regression and model evaluation; water-quality spatial analysis'
      },
      zh: {
        title: 'Mersey 流域河流水化学建模',
        keywords: ['DEM 水文分析', '流域划分', 'WhiteboxTools（R）', '逐步回归', '水质', 'GIS'],
        problem: '流域特征——土地利用、土壤（HOST）、基岩与地形——如何驱动河流水化学？能否据此预测十项水质指标（pH、悬浮物、Ca、Mg、TON、NO₃、NO₂、NH₄、PO₄、Zn）？',
        approach: '用 R 中的 WhiteboxTools 从 30 m DEM 派生 D8 流路由、流量累积与流域划分；重分类土地覆盖、HOST 土壤类别与基岩类型；进行空间插值；开展共线性检验；以逐步回归（BIC）对每项水质指标建模；以调整 R² 与 RMSE 评估模型。',
        results: 'Zn 与 Ca 预测效果最佳（调整 R² 分别为 0.837 与 0.672）；城市用地与 Zn、NO₂、NH₄、PO₄ 正相关，农田与悬浮物、Ca、Mg、NO₃ 正相关——将土地覆盖与流域地质同河流水化学联系起来。',
        output: '硕士课程项目（GEOG 70581 第二个作业）',
        skills: 'R + WhiteboxTools DEM 水文分析；流域划分；逐步回归与模型评估；水质空间分析'
      }
    },
    {
      id: 'project-11',
      type: 'coursework',
      period: 'MSc course, 2024–2025',
      role: 'Individual coursework',
      site: 'Bolton Fell Moss, Cumbria, UK',
      supervisor: '—',
      en: {
        title: 'Vegetation Dynamics and Restoration at Bolton Fell Moss (2000–2023)',
        keywords: ['Google Earth Engine', 'LandTrendr', 'NDVI/EVI', 'Landsat', 'Restoration monitoring'],
        problem: 'Did restoration (from 2013) recover vegetation at this degraded lowland raised bog, and which factors drove the change?',
        approach: 'Processed Landsat and MODIS time series in Google Earth Engine; computed NDVI/EVI; ran LandTrendr change detection; mapped change in ArcMap; multivariate regression in Origin; used NASA POWER climate data.',
        results: 'NDVI increased significantly after 2013; the core former-extraction area recovered most; precipitation was a key driver of vegetation change.',
        output: 'MSc coursework (GEOG 60941 Environmental Remote Sensing)',
        skills: 'GEE time-series processing; LandTrendr; NDVI/EVI; remote-sensing restoration assessment'
      },
      zh: {
        title: 'Bolton Fell Moss 植被动态与恢复评估（2000–2023）',
        keywords: ['Google Earth Engine', 'LandTrendr', 'NDVI/EVI', 'Landsat', '恢复监测'],
        problem: '自 2013 年恢复以来，这块退化的低洼隆起泥炭沼植被是否得到恢复？哪些因素驱动了变化？',
        approach: '在 Google Earth Engine 中处理 Landsat 与 MODIS 时间序列；计算 NDVI/EVI；运行 LandTrendr 变化检测；在 ArcMap 中制图；用 Origin 做多元回归；结合 NASA POWER 气候数据。',
        results: '2013 年后 NDVI 显著上升；原核心采泥炭区恢复最明显；降水是植被变化的关键驱动因子。',
        output: '硕士课程项目（GEOG 60941 环境遥感）',
        skills: 'GEE 时间序列处理；LandTrendr；NDVI/EVI；遥感恢复评估'
      }
    }
  ],

  /* ---------- 发表与产出 publications ---------- */
  publications: {
    en: {
      heading: 'Publications & Academic Outputs',
      peerLabel: 'Peer-reviewed',
      peerItems: [
        {
          authors: 'An Y J, Wang J, Yang X Q, <strong>Ji P P</strong>, Zhao W X, Wang X T, Zhang Z X',
          year: '(2024).',
          title: 'Germination test for 14 plants under different temperature and water potential conditions on the Qinghai-Tibet Plateau.',
          journal: 'Pratacultural Science, 41(5): 1078–1087.',
          doi: 'doi: 10.11829/j.issn.1001-0629.2023-0097',
          doiUrl: 'https://doi.org/10.11829/j.issn.1001-0629.2023-0097'
        }
      ],
      msLabel: 'Manuscripts',
      msItems: [
        { text: '<strong>Ji, P. P.</strong> (co-first author). Conservation tillage and agroecosystem sustainability in karst regions. <em>Under revision.</em>' },
        { text: '<strong>Ji, P. P.</strong> (co-author). Plant-soil-microbe interactions under drought. <em>In preparation.</em>' }
      ]
    },
    zh: {
      heading: '发表与学术产出',
      peerLabel: '同行评审论文',
      peerItems: [
        {
          authors: 'An Y J, Wang J, Yang X Q, <strong>Ji P P</strong>, Zhao W X, Wang X T, Zhang Z X',
          year: '（2024）.',
          title: '青藏高原 14 种植物在不同温度与水分势条件下的萌发试验。',
          journal: '草业科学（Pratacultural Science），41(5)：1078–1087.',
          doi: 'doi: 10.11829/j.issn.1001-0629.2023-0097',
          doiUrl: 'https://doi.org/10.11829/j.issn.1001-0629.2023-0097'
        }
      ],
      msLabel: '论文稿件',
      msItems: [
        { text: '<strong>Ji, P. P.</strong>（共同第一作者）。喀斯特地区保护性耕作与农田生态系统可持续性。返修中。' },
        { text: '<strong>Ji, P. P.</strong>（共同作者）。干旱胁迫下植物–土壤–微生物互作。撰写中。' }
      ]
    }
  },

  /* ---------- 技能与方法 skills ---------- */
  skills: {
    en: {
      heading: 'Technical Skills & Methodological Training',
      groups: [
        {
          name: 'Remote sensing & GIS',
          items: [
            'Google Earth Engine: Sentinel-2/Landsat time-series processing, NDVI, LandTrendr change detection',
            'ArcGIS: projection, resampling, spatial analysis, cartography',
            'Working knowledge of SAR and DEM/LiDAR analysis'
          ]
        },
        {
          name: 'Ecosystem service & spatial modelling',
          items: [
            'InVEST (NDR, SDR) for nitrogen and sediment export modelling',
            'Process-based carbon flux modelling and NEE simulation',
            'Hydrological and hydraulic modelling workflows (Flood Modeller, WhiteboxTools)'
          ]
        },
        {
          name: 'Statistics & programming',
          items: [
            'R: statistical modelling, regression, data visualisation',
            'Python: foundational programming (undergraduate course)',
            'Non-linear parameter calibration (Excel Solver)'
          ]
        },
        {
          name: 'Laboratory & field',
          items: [
            'Chlorophyll fluorescence (FluorPen) and gas exchange (LI-6800)',
            'Soil pH, EC, and C/N analysis',
            'UAV flight operation for ecological surveys'
          ]
        }
      ]
    },
    zh: {
      heading: '技能与方法',
      groups: [
        {
          name: '遥感与 GIS',
          items: [
            'Google Earth Engine：Sentinel-2/Landsat 时间序列处理、NDVI、LandTrendr 变化检测',
            'ArcGIS：投影、重采样、空间分析、制图',
            'SAR 与 DEM/LiDAR 分析（工作级掌握）'
          ]
        },
        {
          name: '生态系统服务与空间建模',
          items: [
            'InVEST（NDR、SDR）模拟氮与泥沙输出',
            '过程式碳通量建模与 NEE 模拟',
            '水文与水力学建模流程（Flood Modeller、WhiteboxTools）'
          ]
        },
        {
          name: '统计与编程',
          items: [
            'R：统计建模、回归、数据可视化',
            'Python：基础编程（本科课程）',
            '非线性参数标定（Excel Solver）'
          ]
        },
        {
          name: '实验与野外',
          items: [
            '叶绿素荧光（FluorPen）与气体交换（LI-6800）',
            '土壤 pH、EC、C/N 分析',
            '生态调查用无人机（UAV）飞行操作'
          ]
        }
      ]
    }
  },

  /* ---------- 研究轨迹 trajectory ----------
     一条主线：项目按时间顺序排列为区间条，颜色随研究阶段由暖转冷
     （生态实验 → 生态系统过程与恢复 → 空间监测与建模）；
     方法/尺度为底部灰度演化链。start/end 为年份单位（0=2021 … 5=2026）。
  */
  trajectory: {
    en: {
      heading: 'Research Trajectory',
      subtitle: 'From ecosystem processes to spatial environmental monitoring',
      note: 'Research has evolved from plot-scale field experiments and plant responses, through ecosystem processes and restoration, to multi-scale spatial monitoring and modelling.',
      years: ['2021', '2022', '2023', '2024', '2025', '2026'],
      projects: [
        { name: 'Biochar × intercropping', start: 0, end: 2.2, color: '#E05D5D', color2: '#E67E22', id: 'project-8' },
        { name: 'Germination × temperature/drought', start: 1, end: 2.2, color: '#E67E22', color2: '#E8A33D', id: 'project-7' },
        { name: 'Alpine degraded-land restoration', start: 2, end: 3.2, color: '#E8A33D', color2: '#D4A017', id: 'project-6' },
        { name: 'Conservation tillage × sustainability', start: 3, end: 4.6, color: '#D4A017', color2: '#2FA36B', id: 'project-5' },
        { name: 'CO₂ flux × NEE', start: 3, end: 4.4, color: '#2FA36B', color2: '#17A2B8', id: 'project-3' },
        { name: 'Peatland restoration × InVEST', start: 3.9, end: 4.6, color: '#17A2B8', color2: '#2E86DE', id: 'project-1' },
        { name: 'GEE × LandTrendr', start: 3, end: 4.4, color: '#2E86DE', color2: '#8E44AD', id: 'project-11' }
      ],
      scaleMethodsLabel: 'Scales · Methods',
      scaleMethods: [
        'Plant / plot · Ecological experiments',
        'Plot · Statistical analysis',
        'Ecosystem · Process-based modelling',
        'Landscape · GIS / Remote sensing',
        'Regional · Spatial modelling'
      ]
    },
    zh: {
      heading: '研究轨迹',
      subtitle: '从生态系统过程到空间环境监测',
      note: '研究由样地生态实验与植物响应，经生态系统过程与恢复，演进至多尺度空间监测与建模。',
      years: ['2021', '2022', '2023', '2024', '2025', '2026'],
      projects: [
        { name: '生物炭 × 间作', start: 0, end: 2.2, color: '#E05D5D', color2: '#E67E22', id: 'project-8' },
        { name: '萌发 × 温度/干旱', start: 1, end: 2.2, color: '#E67E22', color2: '#E8A33D', id: 'project-7' },
        { name: '高寒退化地恢复', start: 2, end: 3.2, color: '#E8A33D', color2: '#D4A017', id: 'project-6' },
        { name: '保护性耕作 × 可持续性', start: 3, end: 4.6, color: '#D4A017', color2: '#2FA36B', id: 'project-5' },
        { name: 'CO₂通量 × NEE', start: 3, end: 4.4, color: '#2FA36B', color2: '#17A2B8', id: 'project-3' },
        { name: '泥炭地恢复 × InVEST', start: 3.9, end: 4.6, color: '#17A2B8', color2: '#2E86DE', id: 'project-1' },
        { name: 'GEE × LandTrendr', start: 3, end: 4.4, color: '#2E86DE', color2: '#8E44AD', id: 'project-11' }
      ],
      scaleMethodsLabel: '研究尺度 · 研究方法',
      scaleMethods: [
        '植物/样方 · 生态实验',
        '样地 · 统计分析',
        '生态系统 · 过程建模',
        '景观 · GIS / 遥感',
        '区域 · 空间建模'
      ]
    }
  },

  /* ---------- 野外研究经历 field ---------- */
  field: {
    en: {
      heading: 'Field Research & Internships',
      items: [
        'Designed field surveys and established vegetation plots for ecological monitoring using GPS-based spatial sampling',
        'Conducted plant physiological measurements, species identification, and sample collection (soil, water, biomass) in restoration and agricultural field experiments'
      ]
    },
    zh: {
      heading: '野外研究与实习经历',
      items: [
        '设计野外调查方案，并基于 GPS 空间采样布设生态监测样方',
        '在生态恢复与农业田间试验中开展植物生理测定、物种识别与样品采集（土壤、水、生物量）'
      ]
    }
  },

  /* ---------- 页脚 footer ---------- */
  footer: {
    en: { line: '© 2026 Panpan Ji · Built on GitHub Pages', githubLabel: 'GitHub', backToTop: 'Back to top' },
    zh: { line: '© 2026 Panpan Ji · 基于 GitHub Pages 构建', githubLabel: 'GitHub', backToTop: '返回顶部' }
  }
};
