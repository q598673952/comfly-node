class RandomPromptMixer:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff, "control_after_generate": True}),
                "language": (["en", "zh"], {"default": "en"}),
                "config_data": ("STRING", {"default": ""}),
            }
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("positive_prompt",)
    FUNCTION = "mix_prompt"
    CATEGORY = "Prompt Tools"

    def mix_prompt(self, seed, language, config_data):
        import json
        try:
            data = json.loads(config_data) if config_data else {}
            
            # 12个维度的拼接顺序（黄金顺序，画质和主体在最前）
            parts = [
                data.get("current_camera", ""),
                data.get("current_ethnicity", ""),
                data.get("current_shot", ""),
                data.get("current_color", ""),     # 色调
                data.get("current_subject", ""),
                data.get("current_makeup", ""),    # 妆容
                data.get("current_style", ""),
                data.get("current_outfit", ""),
                data.get("current_pose", ""),
                data.get("current_prop", ""),
                data.get("current_weather", ""),   # 天气
                data.get("current_background", "")
            ]
            
            final_prompt = ", ".join([p for p in parts if p])
            print(f"\n--- 🎲 最终输出 ({language}) ---\n{final_prompt}\n-------------------------\n")
            return (final_prompt,)
        except Exception as e:
            print(f"解析配置失败: {e}")
            return ("",)