// --- MANUALLY ADD YOUR PROMPTS HERE ---
const PROMPTS = {
    "v1": "Cinematic slow motion shot of a waterfall in a futuristic jungle, 8k, neon lighting.",
    "i1": "Photograph me sitting low on a minimalist metal stool, legs spread forward in a relaxed, grounded pose, feet planted on uneven outdoor terrain. One hand loosely resting between the knees holding thin leather reins, shoulders slightly slouched, head tilted downward in a calm, introspective expression. The subject wears dark oversized layered clothing, wide-leg trousers, leather boots, and dark sunglasses. A strong black horse stands closely behind the seated figure, aligned protectively and partially overlapping the subject's silhouette. Open natural landscape with rough ground and wild grass, bright overexposed sky creating strong negative space. High contrast lighting, deep blacks, soft highlights, matte texture. Timeless, cinematic mood. Medium-format film look, subtle grain, monochrome fine-art fashion editorial, avant-garde luxury photography. Don't harm quality of pic make in 1080p",
    "i2": "Cyberpunk street photography, rainy night, blue and pink reflections.",
    // Keep adding more: "v2": "...", "v3": "...", etc.
};

function renderGallery(type) {
    const displayArea = document.getElementById('display-area');
    displayArea.innerHTML = '<p class="placeholder">Loading Lab Assets...</p>';
    
    let htmlContent = '';
    const totalItems = 100;

    for (let i = 1; i <= totalItems; i++) {
        const id = type === 'video' ? `v${i}` : `i${i}`;
        const ext = type === 'video' ? 'mp4' : 'jpg'; 
        const filePath = `content/${id}.${ext}`;
        
        // Get the prompt from the object above, or show a default message
        const promptValue = PROMPTS[id] || `Prompt for ${id} has not been added to script.js yet.`;

        htmlContent += `
            <div class="card">
                <div class="media-container">
                    ${type === 'video' 
                        ? `<video controls src="${filePath}"></video>` 
                        : `<img src="${filePath}" loading="lazy" onerror="this.style.display='none';">`
                    }
                </div>
                <div class="prompt-text">
                    <strong style="display:block; margin-bottom:5px; color:#6a5cff;">${type.toUpperCase()} #${i} PROMPT:</strong>
                    ${promptValue}
                </div>
            </div>
        `;
    }
    
    displayArea.innerHTML = htmlContent;
}