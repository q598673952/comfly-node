import { app } from "/scripts/app.js";

// ================= 海量词库数据 (英文 || 中文) =================
const DEFAULT_POOLS = {
    camera_pool: `(masterpiece, best quality:1.2), RAW photo, ultra-detailed, 8k resolution, shot on 85mm f/1.4 lens, shallow depth of field || (杰作，最高质量:1.2), RAW照片, 超精细, 8K分辨率, 85mm f/1.4镜头, 浅景深
photorealistic, cinematic lighting, cinematic film grain, high-end editorial photography || 照片级写实, 电影级光影, 电影胶片颗粒, 高端杂志摄影
shot on Leica M10, 50mm lens, natural lighting, sharp focus, detailed skin texture || 徕卡M10拍摄, 50mm镜头, 自然光, 锐利对焦, 细腻皮肤纹理
Kodak Portra 400 film, soft lighting, vintage feel, grainy texture || 柯达Portra 400胶片, 柔和光线, 复古感, 颗粒纹理
harsh direct flash photography, strong shadows, polaroid style, slightly overexposed || 强烈的直射闪光灯摄影, 强阴影, 拍立得风格, 轻微过曝
dramatic chiaroscuro lighting, low key lighting, dark and moody, high contrast || 戏剧性明暗对比光, 低调照明, 黑暗情绪感, 高对比度`,
    
    subject_pool: `1girl, solo, young adult East Asian woman, cold white skin, flawless facial features, natural skin texture || 1个女孩, 单人, 年轻亚洲女性, 冷白皮, 无瑕五官, 自然肤质
1girl, long straight black hair, bangs, pale skin, delicate makeup, beautiful detailed eyes || 1个女孩, 黑长直发, 刘海, 白皙皮肤, 精致妆容, 美丽的细节眼睛
1girl, long wavy brown hair, sharp jawline, glossy lips, collarbone, natural skin pores || 1个女孩, 棕色大波浪卷发, 锋利下颌线, 光泽双唇, 锁骨, 自然毛孔
1girl, short black bob hair, round eyes, cute face, milky white skin || 1个女孩, 黑色短发波波头, 圆眼, 可爱脸庞, 奶白肌肤
1girl, Korean idol style, straight eyebrows, soft makeup, clear skin, elegant vibe || 1个女孩, 韩系爱豆风格, 平眉, 柔和妆容, 清透肌肤, 优雅气质
1girl, mature woman, red lips, sharp eyes, cold and aloof expression || 1个女孩, 成熟女性, 红唇, 锐利眼神, 高冷表情
1girl, high ponytail, athletic body, tanned skin, sweat on skin, sporty vibe || 1个女孩, 高马尾, 运动身材, 美黑肌肤, 皮肤上的汗水, 运动风`,
    
    style_pool: `pure and innocent vibe, seductive gaze, slightly parted lips, looking at viewer || 纯欲风, 诱惑的眼神, 微张的双唇, 看着镜头
cold and aloof expression, elegant makeup, red lips, serious look, looking away || 高冷表情, 优雅妆容, 红唇, 严肃神情, 看向别处
vintage retro style, nostalgic atmosphere, moody, melancholic expression || 复古怀旧风格, 怀旧氛围, 情绪化, 忧郁神情
alluring smile, seductive look, bedroom eyes, blush, confident || 迷人的微笑, 诱惑的神情, 迷离的眼神, 脸红, 自信
candid shot, natural expression, unaware of camera, laughing softly || 抓拍感, 自然神情, 未察觉镜头, 轻声笑
high fashion model pose, fierce expression, editorial style, powerful gaze || 高级时装模特姿势, 凶狠表情, 杂志风, 充满力量的眼神`,
    
    outfit_pool: `white ribbed knit tight long-sleeve top, beige bodycon mini skirt, gold chain shoulder bag || 白色罗纹针织紧身长袖上衣, 米色包臀短裙, 金链单肩包
light green floral silk bathrobe, wearing blue bra inside, delicate necklace || 浅绿色碎花真丝睡袍, 内穿蓝色文胸, 精致项链
colorful floral deep v-neck mini dress, black high heels, drop earrings || 彩色碎花深V领迷你裙, 黑色高跟鞋, 耳坠
leopard print bikini top, black mini skirt, black lace pantyhose, black high heels || 豹纹比基尼上衣, 黑色迷你裙, 黑色蕾丝连裤袜, 黑色高跟鞋
white faux fur coat, delicate pink camisole inside, diamond ring, pearl earrings || 白色人造皮草大衣, 内搭精致粉色吊带, 钻石戒指, 珍珠耳环
pastel pink off-shoulder crop top, grey mini skirt, silver bracelet || 柔粉色露肩短上衣, 灰色迷你裙, 银色手链
black leather jacket, white crop top, ripped denim jeans, choker || 黑色皮夹克, 白色短上衣, 破洞牛仔裤, 颈圈
black silk slip dress, deep v-neck, spaghetti straps, thigh highs, garter belt || 黑色真丝吊带裙, 深V领, 细肩带, 大腿袜, 吊带袜带`,
    
    pose_pool: `over-the-shoulder glance, looking back, holding a subway pole, from behind || 回眸, 回头看, 抓着地铁扶手, 背影视角
sitting on a chair, resting chin on hand, crossed legs, looking at viewer || 坐在椅子上, 手托下巴, 交叉双腿, 看着镜头
sitting on the floor, leaning back, dynamic pose, hands behind back || 坐在地板上, 向后靠, 动态姿势, 双手背后
standing, leaning against wall, hands in pockets, looking down || 站立, 靠墙, 双手插兜, 低头
walking towards viewer, dynamic motion, hair blowing in wind, mid-stride || 走向镜头, 动态运动, 风中吹拂的头发, 迈步中
kneeling on bed, arching back, looking over shoulder, seductive pose || 跪在床上, 弓背, 回头, 诱惑姿势
adjusting hair, one hand in hair, sensual, side profile || 整理头发, 一手在发间, 性感, 侧面轮廓
from above, high angle shot, looking up, puppy dog eyes || 俯拍视角, 仰视, 小狗般无辜的眼神`,
    
    background_pool: `subway train interior, fluorescent overhead lighting, reflections on metal poles, depth of field || 地铁车厢内部, 荧光顶灯, 金属扶手上的反光, 景深
vintage bar interior, warm tungsten lamp light, green velvet curtains, wooden furniture || 复古酒吧内部, 温暖的钨丝灯光, 绿色天鹅绒窗帘, 木制家具
modern apartment, soft diffused window light, blurred background, bokeh || 现代公寓, 柔和的窗户漫射光, 模糊背景, 散景
white room, harsh spotlight from above, dark and moody, minimalist background || 白色房间, 顶部的强聚光灯, 黑暗情绪, 极简背景
neon-lit cyberpunk street, rain, wet pavement, glowing signs, night city || 霓虹赛博朋克街道, 雨, 潮湿路面, 发光招牌, 夜晚城市
luxury hotel room, king size bed, dim warm light, silk sheets, curtains || 豪华酒店房间, 大床, 昏暗暖光, 丝绸床单, 窗帘
elevator interior, metal walls, bright overhead light, reflection on mirror || 电梯内部, 金属墙壁, 明亮的顶灯, 镜子反光
cozy bedroom, fairy lights, unmade bed, morning sunlight, window blinds shadow || 舒适卧室, 小串灯, 未整理的床, 早晨阳光, 百叶窗阴影`
};

app.registerExtension({
    name: "RandomPromptMixer.Extension",
    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        if (nodeData.name === "RandomPromptMixer") {
            const onNodeCreated = nodeType.prototype.onNodeCreated;
            nodeType.prototype.onNodeCreated = function () {
                const r = onNodeCreated ? onNodeCreated.apply(this, arguments) : undefined;
                
                // 1. 延迟隐藏 config_data 原生框 (解决它出现在界面的问题)
                setTimeout(() => {
                    const configWidget = this.widgets.find(w => w.name === "config_data");
                    if (configWidget) {
                        configWidget.type = "hidden";
                        configWidget.computeSize = () => [0, -4];
                        configWidget.hidden = true;
                    }
                    this.setSize([420, this.computeSize()[1]]);
                }, 50);

                // 2. 初始化配置和词库
                this.properties = this.properties || {};
                let config = this.properties.config || {};
                if (!config.subject_pool) {
                    config = {
                        camera_pool: DEFAULT_POOLS.camera_pool,
                        subject_pool: DEFAULT_POOLS.subject_pool,
                        style_pool: DEFAULT_POOLS.style_pool,
                        outfit_pool: DEFAULT_POOLS.outfit_pool,
                        pose_pool: DEFAULT_POOLS.pose_pool,
                        background_pool: DEFAULT_POOLS.background_pool,
                        locks: { camera: false, subject: false, style: false, outfit: false, pose: false, background: false },
                        currents: { camera: "", subject: "", style: "", outfit: "", pose: "", background: "" }
                    };
                }
                this.properties.config = config;

                // 3. 创建 UI 面板容器
                const container = document.createElement("div");
                container.style.cssText = "display: flex; flex-direction: column; gap: 4px; padding: 8px; background: #1a1a1a; border-radius: 8px; margin-top: 8px; border: 1px solid #333; width: 380px;";
                
                const categories = [
                    { id: "camera", label: "📷 画质" },
                    { id: "subject", label: "👤 主体" },
                    { id: "style", label: "✨ 风格" },
                    { id: "outfit", label: "👗 服装" },
                    { id: "pose", label: "💃 姿势" },
                    { id: "background", label: "🏙️ 背景" }
                ];

                const uiElements = {}; 

                categories.forEach(cat => {
                    const row = document.createElement("div");
                    row.style.cssText = "display: flex; align-items: center; gap: 6px;";

                    const lockBtn = document.createElement("button");
                    lockBtn.innerText = config.locks[cat.id] ? "🔒" : "🔓";
                    lockBtn.style.cssText = `background: transparent; border: none; cursor: pointer; font-size: 16px; padding: 0; color: ${config.locks[cat.id] ? '#ff5a5a' : '#888'};`;
                    lockBtn.onclick = (e) => {
                        e.preventDefault();
                        config.locks[cat.id] = !config.locks[cat.id];
                        lockBtn.innerText = config.locks[cat.id] ? "🔒" : "🔓";
                        lockBtn.style.color = config.locks[cat.id] ? "#ff5a5a" : "#888";
                    };

                    const label = document.createElement("span");
                    label.innerText = cat.label;
                    label.style.cssText = "width: 55px; font-size: 12px; color: #ccc; flex-shrink: 0;";

                    const display = document.createElement("div");
                    display.innerText = config.currents[cat.id] || "【未抽取】";
                    display.style.cssText = "flex: 1; font-size: 11px; color: #00ff00; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; background: #000; padding: 4px; border-radius: 4px; border: 1px solid #333;";

                    const addBtn = document.createElement("button");
                    addBtn.innerText = "+";
                    addBtn.title = "增加新词";
                    addBtn.style.cssText = "background: #333; color: #fff; border: none; cursor: pointer; font-size: 12px; padding: 2px 6px; border-radius: 4px;";
                    
                    const editBtn = document.createElement("button");
                    editBtn.innerText = "改";
                    editBtn.title = "修改词库";
                    editBtn.style.cssText = "background: #333; color: #fff; border: none; cursor: pointer; font-size: 12px; padding: 2px 6px; border-radius: 4px;";

                    // 弹窗逻辑
                    const openModal = (isAdd = false) => {
                        const modal = document.createElement("div");
                        modal.style.cssText = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #222; padding: 15px; border: 1px solid #555; z-index: 10000; border-radius: 8px; display: flex; flex-direction: column; gap: 10px; width: 450px; box-shadow: 0 4px 20px rgba(0,0,0,0.8);";
                        
                        const title = document.createElement("div");
                        title.innerText = isAdd ? `增加新词至 [${cat.label}]` : `编辑 [${cat.label}] 词库`;
                        title.style.color = "#fff";

                        const ta = document.createElement("textarea");
                        ta.style.cssText = "width: 100%; height: 200px; background: #111; color: #0f0; font-family: monospace; font-size: 12px; padding: 8px; border: 1px solid #444; border-radius: 4px; resize: vertical;";
                        ta.value = isAdd ? "英文描述 || 中文描述" : config[`${cat.id}_pool`];
                        
                        const btnRow = document.createElement("div");
                        btnRow.style.cssText = "display: flex; justify-content: flex-end; gap: 10px;";
                        
                        const cancelBtn = document.createElement("button");
                        cancelBtn.innerText = "取消";
                        cancelBtn.style.cssText = "padding: 4px 12px; cursor: pointer; background: #444; color: #fff; border: none; border-radius: 4px;";
                        cancelBtn.onclick = () => document.body.removeChild(modal);
                        
                        const saveBtn = document.createElement("button");
                        saveBtn.innerText = "保存";
                        saveBtn.style.cssText = "padding: 4px 12px; cursor: pointer; background: #0078d7; color: white; border: none; border-radius: 4px;";
                        saveBtn.onclick = () => {
                            if (isAdd) {
                                if (ta.value.trim() !== "英文描述 || 中文描述" && ta.value.trim() !== "") {
                                    config[`${cat.id}_pool`] += "\n" + ta.value.trim();
                                }
                            } else {
                                config[`${cat.id}_pool`] = ta.value;
                            }
                            document.body.removeChild(modal);
                            app.graph.setDirtyCanvas(true, true);
                        };

                        btnRow.appendChild(cancelBtn);
                        btnRow.appendChild(saveBtn);
                        modal.appendChild(title);
                        modal.appendChild(ta);
                        modal.appendChild(btnRow);
                        document.body.appendChild(modal);
                    };

                    addBtn.onclick = (e) => { e.preventDefault(); openModal(true); };
                    editBtn.onclick = (e) => { e.preventDefault(); openModal(false); };

                    row.appendChild(lockBtn);
                    row.appendChild(label);
                    row.appendChild(display);
                    row.appendChild(addBtn);
                    row.appendChild(editBtn);
                    container.appendChild(row);

                    uiElements[cat.id] = { display };
                });

                // 挂载 DOM
                this.addDOMWidget("ui_panel", "custom", container);

                // 4. 核心：拦截 Queue 队列，在提交前瞬间随机抽取
                const originalGraphToPrompt = app.graphToPrompt;
                app.graphToPrompt = async function() {
                    for (let node of app.graph._nodes) {
                        if (node.type === "RandomPromptMixer") {
                            let langWidget = node.widgets.find(w => w.name === "language");
                            let isZh = langWidget ? langWidget.value === "zh" : false;
                            let nodeConfig = node.properties.config;
                            
                            categories.forEach(cat => {
                                // 如果没锁定，就重新抽
                                if (!nodeConfig.locks[cat.id]) {
                                    const lines = nodeConfig[`${cat.id}_pool`].split('\n').filter(l => l.trim() !== "");
                                    if (lines.length > 0) {
                                        const picked = lines[Math.floor(Math.random() * lines.length)];
                                        let zhText = picked, enText = picked;
                                        if (picked.includes("||")) {
                                            const p = picked.split("||");
                                            enText = p[0].trim();
                                            zhText = p[1].trim();
                                        }
                                        nodeConfig.currents[cat.id] = isZh ? zhText : enText;
                                    }
                                } else {
                                    // 如果已锁定，由于可能切换了语言，需要根据词库反查对应的语言词
                                    const targetCurr = nodeConfig.currents[cat.id];
                                    const lines = nodeConfig[`${cat.id}_pool`].split('\n').filter(l => l.trim() !== "");
                                    const matched = lines.find(l => l.includes(targetCurr));
                                    if (matched && matched.includes("||")) {
                                        const p = matched.split("||");
                                        nodeConfig.currents[cat.id] = isZh ? p[1].trim() : p[0].trim();
                                    }
                                }
                                // 同步更新 UI 显示
                                uiElements[cat.id].display.innerText = nodeConfig.currents[cat.id] || "【空】";
                            });

                            // 打包数据交给 Python
                            let finalData = {};
                            categories.forEach(cat => {
                                finalData["current_" + cat.id] = nodeConfig.currents[cat.id];
                            });
                            const dataWidget = node.widgets.find(w => w.name === "config_data");
                            if (dataWidget) dataWidget.value = JSON.stringify(finalData);
                            
                            app.graph.setDirtyCanvas(true, true);
                        }
                    }
                    return originalGraphToPrompt.apply(this, arguments);
                };

                return r;
            };
        }
    }
});