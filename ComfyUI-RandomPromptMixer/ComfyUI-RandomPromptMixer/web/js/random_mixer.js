import { app } from "/scripts/app.js";

const DEFAULT_POOLS = {
    camera_pool: `(masterpiece, best quality:1.2), RAW photo, ultra-detailed, 8k resolution, shot on 85mm f/1.4 lens, shallow depth of field || (杰作，最高质量:1.2), RAW照片, 超精细, 8K分辨率, 85mm f/1.4镜头, 浅景深
photorealistic, cinematic lighting, cinematic film grain, high-end editorial photography || 照片级写实, 电影级光影, 电影胶片颗粒, 高端杂志摄影
shot on Leica M10, natural lighting, sharp focus, detailed skin texture || 徕卡M10拍摄, 自然光, 锐利对焦, 细腻皮肤纹理
harsh direct flash photography, strong shadows, polaroid style || 强烈的直射闪光灯摄影, 强阴影, 拍立得风格`,

    ethnicity_pool: `East Asian, Chinese, pale skin, dark brown eyes || 东亚人, 中国人, 白皙皮肤, 深棕色眼睛
Korean, Korean idol style, straight eyebrows || 韩国人, 韩系爱豆风格, 平眉
Japanese, soft features, delicate makeup || 日本人, 柔和五官, 精致妆容
Caucasian, European, sharp features, light eyes || 白人, 欧洲人, 立体五官, 浅色眼睛
Latina, tanned skin, wavy dark hair || 拉美裔, 美黑皮肤, 深色波浪发
Mixed race, exotic features, freckles || 混血儿, 异域风情, 雀斑`,

    subject_pool: `1girl, solo, young adult woman, natural skin texture || 1个女孩, 单人, 年轻女性, 自然肤质
1girl, long straight black hair, sharp jawline || 1个女孩, 黑长直发, 锋利下颌线
1girl, long wavy brown hair, collarbone || 1个女孩, 棕色大波浪卷发, 锁骨
1girl, short black bob hair, cute face || 1个女孩, 黑色短发波波头, 可爱脸庞
1girl, mature woman, sharp eyes || 1个女孩, 成熟女性, 锐利眼神
1girl, athletic body, sweat on skin || 1个女孩, 运动身材, 皮肤上的汗水`,

    makeup_pool: `glass skin, gradient lips, korean makeup || 水光肌, 渐变唇, 韩式妆容
smokey eyes, dark red lips, winged eyeliner || 烟熏眼妆, 暗红唇, 猫眼眼线
freckles, natural look, nude makeup || 雀斑, 原生感, 裸妆
glossy lips, blush, douyin makeup || 光泽双唇, 腮红, 抖音妆容
dark gothic makeup, pale skin, black eyeliner || 暗黑哥特妆, 苍白皮肤, 黑眼线
no makeup, fresh face, clear skin || 素颜, 清新脸庞, 清透肌肤`,

    shot_pool: `close-up portrait, upper body, looking at viewer || 特写肖像, 上半身, 看着镜头
full body shot, standing, wide shot || 全身照, 站立, 广角
from above, high angle shot, looking up || 俯拍, 高角度镜头, 仰视
from below, low angle shot, looking down || 仰拍, 低角度镜头, 俯视
dutch angle, tilted frame || 荷兰角, 倾斜画幅
over-the-shoulder view, focus on face || 过肩视角, 聚焦脸部`,

    style_pool: `pure and innocent vibe, seductive gaze || 纯欲风, 诱惑的眼神
cold and aloof expression, serious look || 高冷表情, 严肃神情
vintage retro style, nostalgic atmosphere || 复古怀旧风格, 怀旧氛围
alluring smile, bedroom eyes, blush || 迷人的微笑, 迷离的眼神, 脸红
candid shot, natural expression, unaware of camera || 抓拍感, 自然神情, 未察觉镜头
high fashion model pose, fierce expression || 高级时装模特姿势, 凶狠表情`,

    outfit_pool: `white ribbed knit tight top, beige bodycon mini skirt || 白色罗纹针织紧身上衣, 米色包臀短裙
light green floral silk bathrobe || 浅绿色碎花真丝睡袍
colorful floral deep v-neck mini dress || 彩色碎花深V领迷你裙
leopard print bikini top, black lace pantyhose || 豹纹比基尼上衣, 黑色蕾丝连裤袜
white faux fur coat, delicate pink camisole || 白色人造皮草大衣, 精致粉色吊带
black leather jacket, white crop top, ripped jeans || 黑色皮夹克, 白色短上衣, 破洞牛仔裤
black silk slip dress, thigh highs || 黑色真丝吊带裙, 大腿袜`,

    pose_pool: `over-the-shoulder glance, looking back || 回眸, 回头看
sitting on a chair, crossed legs || 坐在椅子上, 交叉双腿
sitting on the floor, leaning back || 坐在地板上, 向后靠
standing, leaning against wall || 站立, 靠墙
walking towards viewer, hair blowing || 走向镜头, 风吹发丝
kneeling on bed, arching back || 跪在床上, 弓背
adjusting hair, side profile || 整理头发, 侧面轮廓`,

    prop_pool: `holding a coffee cup || 拿着咖啡杯
holding a smartphone || 拿着智能手机
holding a vintage camera || 拿着复古相机
holding an umbrella || 撑着伞
wearing headphones || 戴着耳机
holding a bouquet of flowers || 拿着一束花
no props, empty hands || 无道具, 空手`,

    weather_pool: `sunny day, clear sky, bright sunlight || 晴天, 晴朗天空, 明亮的阳光
rainy, wet ground, raindrops || 雨天, 潮湿的地面, 雨滴
snowing, winter, snowflakes || 下雪, 冬天, 雪花
foggy, misty, hazy atmosphere || 起雾, 朦胧, 雾蒙蒙的氛围
windy, hair blowing in the wind || 刮风, 风中飘动的头发
golden hour, sunset, warm sunlight || 黄金时刻, 日落, 温暖的阳光`,

    color_pool: `teal and orange color grading, movie still || 青橙色调, 电影剧照
pastel colors, soft tone, low contrast || 马卡龙色, 柔和色调, 低对比度
black and white photography, monochrome || 黑白摄影, 单色
vivid colors, high saturation, cyberpunk || 鲜艳色彩, 高饱和度, 赛博朋克
fujifilm classic chrome, muted colors || 富士经典正片, 低饱和度
warm tones, vintage film look || 暖色调, 复古胶片感`,

    background_pool: `subway train interior, fluorescent lighting || 地铁车厢内部, 荧光灯
vintage bar interior, warm tungsten lamp light || 复古酒吧内部, 温暖钨丝灯
modern apartment, soft diffused window light || 现代公寓, 柔和窗户光
white room, harsh spotlight from above || 白色房间, 顶部聚光灯
neon-lit cyberpunk street, glowing signs || 霓虹赛博朋克街道, 发光招牌
luxury hotel room, dim warm light || 豪华酒店房间, 昏暗暖光
outdoors, city street, blurred pedestrians || 户外, 城市街道, 模糊行人`
};

app.registerExtension({
    name: "RandomPromptMixer.Extension",
    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        if (nodeData.name === "RandomPromptMixer") {
            const onNodeCreated = nodeType.prototype.onNodeCreated;
            nodeType.prototype.onNodeCreated = function () {
                const r = onNodeCreated ? onNodeCreated.apply(this, arguments) : undefined;
                
                // 隐藏原生输入框
                setTimeout(() => {
                    const configWidget = this.widgets.find(w => w.name === "config_data");
                    if (configWidget) { configWidget.type = "hidden"; configWidget.computeSize = () => [0, -4]; configWidget.hidden = true; }
                    this.setSize([480, this.computeSize()[1] + 20]);
                }, 50);

                this.properties = this.properties || {};
                let config = this.properties.config || {};

                const categories = [
                    { id: "camera", label: "📷 画质" },
                    { id: "ethnicity", label: "🌍 国籍" },
                    { id: "subject", label: "👤 主体" },
                    { id: "makeup", label: "💄 妆容" },
                    { id: "shot", label: "🔭 视角" },
                    { id: "style", label: "✨ 风格" },
                    { id: "outfit", label: "👗 服装" },
                    { id: "pose", label: "💃 姿势" },
                    { id: "prop", label: "🧸 道具" },
                    { id: "weather", label: "☔ 天气" },
                    { id: "color", label: "🎨 色调" },
                    { id: "background", label: "🏙️ 背景" }
                ];

                if (!config.locks) config.locks = {};
                if (!config.currents) config.currents = {};

                categories.forEach(cat => {
                    const poolKey = `${cat.id}_pool`;
                    if (typeof config[poolKey] !== "string" || config[poolKey].trim() === "") {
                        config[poolKey] = DEFAULT_POOLS[poolKey] || "";
                    }
                    if (config.locks[cat.id] === undefined) config.locks[cat.id] = false;
                    if (config.currents[cat.id] === undefined) config.currents[cat.id] = "";
                });
                
                this.properties.config = config;

                const container = document.createElement("div");
                container.style.cssText = "display: flex; flex-direction: column; gap: 3px; padding: 8px; background: #1a1a1a; border-radius: 8px; margin-top: 8px; border: 1px solid #333; width: 460px;";
                
                // 把 UI 元素存到 node 实例上，方便在 graphToPrompt 中直接读取
                this.uiElements = {}; 
                this.categories = categories;

                categories.forEach(cat => {
                    const row = document.createElement("div");
                    row.style.cssText = "display: flex; align-items: center; gap: 6px;";

                    const lockBtn = document.createElement("button");
                    lockBtn.innerText = config.locks[cat.id] ? "🔒" : "🔓";
                    lockBtn.style.cssText = `background: transparent; border: none; cursor: pointer; font-size: 14px; padding: 0; color: ${config.locks[cat.id] ? '#ff5a5a' : '#888'}; width: 20px; flex-shrink: 0;`;
                    
                    const label = document.createElement("span");
                    label.innerText = cat.label;
                    label.style.cssText = "width: 55px; font-size: 12px; color: #ccc; flex-shrink: 0;";

                    const select = document.createElement("select");
                    select.style.cssText = "flex: 1; font-size: 11px; color: #00ff00; background: #000; padding: 3px 5px; border-radius: 4px; border: 1px solid #333; outline: none; cursor: pointer; width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;";

                    const refreshOptions = () => {
                        const currentVal = config.currents[cat.id];
                        const poolString = config[`${cat.id}_pool`] || "";
                        const lines = poolString.split('\n').filter(l => l.trim() !== "");
                        const langWidget = this.widgets.find(w => w.name === "language");
                        const isZh = langWidget ? langWidget.value === "zh" : false;

                        select.innerHTML = ""; 
                        let hasCurrent = false;

                        lines.forEach(line => {
                            let zhText = line, enText = line;
                            if (line.includes("||")) {
                                const p = line.split("||");
                                enText = p[0].trim(); zhText = p[1].trim();
                            }
                            const displayText = isZh ? zhText : enText;
                            const option = document.createElement("option");
                            option.value = displayText;
                            option.innerText = displayText;
                            if (displayText === currentVal) hasCurrent = true;
                            select.appendChild(option);
                        });

                        if (currentVal && !hasCurrent) {
                            const option = document.createElement("option");
                            option.value = currentVal;
                            option.innerText = currentVal;
                            select.appendChild(option);
                        }
                        
                        if (currentVal) select.value = currentVal;
                        else if (select.options.length > 0) select.value = select.options[0].value;
                    };

                    // 手动选择事件
                    select.onchange = (e) => {
                        config.currents[cat.id] = e.target.value;
                        // 手动选择即自动锁定
                        if (!config.locks[cat.id]) {
                            config.locks[cat.id] = true;
                            lockBtn.innerText = "🔒";
                            lockBtn.style.color = "#ff5a5a";
                        }
                        app.graph.setDirtyCanvas(true, true);
                    };

                    // 锁头点击事件
                    lockBtn.onclick = (e) => {
                        e.preventDefault();
                        config.locks[cat.id] = !config.locks[cat.id];
                        lockBtn.innerText = config.locks[cat.id] ? "🔒" : "🔓";
                        lockBtn.style.color = config.locks[cat.id] ? "#ff5a5a" : "#888";
                        // 注意：锁定和解锁只在生成时触发逻辑，这里只改状态
                    };

                    const addBtn = document.createElement("button");
                    addBtn.innerText = "+";
                    addBtn.style.cssText = "background: #333; color: #fff; border: none; cursor: pointer; font-size: 11px; padding: 3px 6px; border-radius: 3px; flex-shrink: 0;";
                    
                    const editBtn = document.createElement("button");
                    editBtn.innerText = "改";
                    editBtn.style.cssText = "background: #333; color: #fff; border: none; cursor: pointer; font-size: 11px; padding: 3px 6px; border-radius: 3px; flex-shrink: 0;";

                    const openModal = (isAdd = false) => {
                        const modal = document.createElement("div");
                        modal.style.cssText = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #222; padding: 15px; border: 1px solid #555; z-index: 10000; border-radius: 8px; display: flex; flex-direction: column; gap: 10px; width: 450px; box-shadow: 0 4px 20px rgba(0,0,0,0.8);";
                        const title = document.createElement("div");
                        title.innerText = isAdd ? `增加新词至 [${cat.label}]` : `编辑 [${cat.label}] 词库`;
                        title.style.color = "#fff";

                        const ta = document.createElement("textarea");
                        ta.style.cssText = "width: 100%; height: 200px; background: #111; color: #0f0; font-family: monospace; font-size: 12px; padding: 8px; border: 1px solid #444; border-radius: 4px;";
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
                                if (ta.value.trim() !== "英文描述 || 中文描述" && ta.value.trim() !== "") config[`${cat.id}_pool`] += "\n" + ta.value.trim();
                            } else {
                                config[`${cat.id}_pool`] = ta.value;
                            }
                            document.body.removeChild(modal);
                            refreshOptions(); 
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
                    row.appendChild(select);
                    row.appendChild(addBtn);
                    row.appendChild(editBtn);
                    container.appendChild(row);

                    this.uiElements[cat.id] = { select, refreshOptions, lockBtn };
                    refreshOptions(); 
                });

                this.addDOMWidget("ui_panel", "custom", container);

                // 语言切换时刷新
                const langWidget = this.widgets.find(w => w.name === "language");
                if (langWidget) {
                    const originalCallback = langWidget.callback;
                    langWidget.callback = () => {
                        if (originalCallback) originalCallback.apply(this, arguments);
                        Object.values(this.uiElements).forEach(el => el.refreshOptions());
                    };
                }

                // 核心：拦截生成逻辑
                const originalGraphToPrompt = app.graphToPrompt;
                app.graphToPrompt = async function() {
                    for (let node of app.graph._nodes) {
                        if (node.type === "RandomPromptMixer") {
                            let langWidget = node.widgets.find(w => w.name === "language");
                            let isZh = langWidget ? langWidget.value === "zh" : false;
                            let nodeConfig = node.properties.config;
                            
                            if (!node.uiElements) continue;

                            let finalData = {};
                            node.categories.forEach(cat => {
                                const poolKey = `${cat.id}_pool`;
                                let poolString = nodeConfig[poolKey] || "";
                                const ui = node.uiElements[cat.id];
                                
                                // 【核心修复】直接在 UI 上判断是否锁定，不依赖 config.locks
                                const isLocked = ui.lockBtn.innerText === "🔒";

                                if (!isLocked) {
                                    // 如果没锁，随机抽取并更新界面
                                    const lines = poolString.split('\n').filter(l => l.trim() !== "");
                                    if (lines.length > 0) {
                                        const picked = lines[Math.floor(Math.random() * lines.length)];
                                        let zhText = picked, enText = picked;
                                        if (picked.includes("||")) {
                                            const p = picked.split("||");
                                            enText = p[0].trim(); zhText = p[1].trim();
                                        }
                                        nodeConfig.currents[cat.id] = isZh ? zhText : enText;
                                        // 同步更新 UI 的下拉框
                                        ui.select.value = nodeConfig.currents[cat.id];
                                    }
                                } else {
                                    // 如果锁定了，直接读取下拉框当前显示的值
                                    nodeConfig.currents[cat.id] = ui.select.value;
                                }
                                
                                finalData["current_" + cat.id] = nodeConfig.currents[cat.id];
                            });

                            // 将结果塞给隐藏字段，确保后端能读到
                            const dataWidget = node.widgets.find(w => w.name === "config_data");
                            if (dataWidget) {
                                dataWidget.value = JSON.stringify(finalData);
                                // 触发一下 callback，让 ComfyUI 感知到值的变化
                                if (dataWidget.callback) dataWidget.callback(dataWidget.value);
                            }
                            
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