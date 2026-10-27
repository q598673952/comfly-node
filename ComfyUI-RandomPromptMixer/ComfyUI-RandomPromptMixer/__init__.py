from .nodes import RandomPromptMixer

NODE_CLASS_MAPPINGS = {
    "RandomPromptMixer": RandomPromptMixer
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "RandomPromptMixer": "🎲 Random Prompt Mixer (随机提示词混合器)"
}

WEB_DIRECTORY = "./web"
__all__ = ['NODE_CLASS_MAPPINGS', 'NODE_DISPLAY_NAME_MAPPINGS', 'WEB_DIRECTORY']