var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Saarthi — Royal Inclusive AI Ecosystem for Bharat</title>
        <meta name="description" content="Saarthi is India's emotionally intelligent, voice-first digital companion that simplifies technology and empowers homemakers, seniors, students, and entrepreneurs." />
        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800;900&family=Poppins:wght@300;400;500;600;700;800&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: "\n  /* ═══════════════════════════════════════════════\n     1. ROYAL INDIAN DESIGN SYSTEM & CSS VARIABLES\n     ═══════════════════════════════════════════════ */\n  :root {\n    /* Global Themes */\n    --royal-indigo:     #1E1F57;\n    --royal-indigo-deep:#13144A;\n    --royal-indigo-mid: #2B2D80;\n    --imperial-gold:    #D4AF37;\n    --imperial-gold-lt: #E8C84A;\n    --imperial-gold-glow: rgba(212,175,55,0.3);\n    --pearl-ivory:      #FFFDF9;\n    --warm-ivory:       #FFF8EE;\n    \n    /* Mode Specific Styling */\n    --theme-primary: var(--royal-indigo);\n    --theme-secondary: var(--imperial-gold);\n    --theme-accent: var(--royal-indigo-mid);\n    --theme-bg: var(--pearl-ivory);\n    --theme-card-bg: #ffffff;\n    --theme-border: rgba(212,175,55,0.25);\n    --theme-text: #1a1a3e;\n    --theme-shadow: 0 20px 48px rgba(30,31,87,0.1);\n  }\n\n  /* Reset & Common Styles */\n  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\n  html { scroll-behavior: smooth; }\n  body {\n    font-family: 'Poppins', sans-serif;\n    background: var(--pearl-ivory);\n    color: #1a1a3e;\n    overflow-x: hidden;\n    transition: background 0.5s ease, color 0.5s ease;\n  }\n  \n  /* Indian Mandala / Rangoli Watermark Gradients */\n  .mandala-watermark {\n    position: absolute;\n    border-radius: 50%;\n    pointer-events: none;\n    z-index: 1;\n    border: 1px solid var(--theme-border);\n    opacity: 0.15;\n  }\n\n  /* Utility Classes */\n  .hidden { display: none !important; }\n  .flex { display: flex; }\n  .flex-col { flex-direction: column; }\n  .items-center { align-items: center; }\n  .justify-center { justify-content: center; }\n  .justify-between { justify-content: space-between; }\n  .grid { display: grid; }\n  .text-center { text-align: center; }\n  .relative { position: relative; }\n  .absolute { position: absolute; }\n  .fixed { position: fixed; }\n  .w-full { width: 100%; }\n  .h-full { height: 100%; }\n  .cursor-pointer { cursor: pointer; }\n  .transition-all { transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  \n  /* Typography */\n  .font-royal { font-family: 'Cinzel', serif; font-weight: 700; }\n  .font-body { font-family: 'Nunito', sans-serif; }\n  .gradient-gold {\n    background: linear-gradient(135deg, var(--imperial-gold-lt), var(--imperial-gold), #b8860b);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  /* Buttons */\n  .btn {\n    border: none;\n    padding: 12px 28px;\n    border-radius: 50px;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 700;\n    font-size: 0.9rem;\n    cursor: pointer;\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    transition: all 0.3s ease;\n    box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n  }\n  .btn-royal {\n    background: linear-gradient(135deg, var(--imperial-gold-lt) 0%, var(--imperial-gold) 50%, #c49b2e 100%);\n    color: var(--royal-indigo-deep);\n  }\n  .btn-royal:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 8px 24px var(--imperial-gold-glow);\n  }\n  .btn-outline {\n    background: transparent;\n    color: var(--theme-primary);\n    border: 2px solid var(--theme-primary);\n  }\n  .btn-outline:hover {\n    background: var(--theme-primary);\n    color: #fff;\n    transform: translateY(-2px);\n  }\n\n  /* Premium Cards */\n  .card {\n    background: var(--theme-card-bg);\n    border: 1px solid var(--theme-border);\n    border-radius: 24px;\n    padding: 24px;\n    box-shadow: var(--theme-shadow);\n    position: relative;\n    overflow: hidden;\n    transition: all 0.3s ease;\n  }\n  .card:hover {\n    transform: translateY(-4px);\n    box-shadow: 0 15px 35px rgba(0,0,0,0.08);\n  }\n\n  /* Inputs */\n  .input {\n    width: 100%;\n    padding: 14px 20px;\n    border: 2px solid var(--theme-border);\n    border-radius: 16px;\n    font-family: 'Poppins', sans-serif;\n    font-size: 0.95rem;\n    outline: none;\n    background: #fff;\n    color: var(--theme-text);\n    transition: all 0.3s;\n  }\n  .input:focus {\n    border-color: var(--theme-primary);\n    box-shadow: 0 0 0 4px rgba(212,175,55,0.15);\n  }\n\n  /* ═══════════════════════════════════════════════\n     2. KEYFRAME ANIMATIONS\n     ═══════════════════════════════════════════════ */\n  @keyframes rotate-slow {\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n  }\n  @keyframes rotate-reverse {\n    from { transform: rotate(360deg); }\n    to { transform: rotate(0deg); }\n  }\n  @keyframes breathe {\n    0%, 100% { transform: scale(1); opacity: 1; filter: drop-shadow(0 0 10px rgba(212,175,55,0.4)); }\n    50% { transform: scale(1.05); opacity: 0.85; filter: drop-shadow(0 0 25px rgba(212,175,55,0.7)); }\n  }\n  @keyframes wave {\n    0%, 100% { height: 6px; }\n    50% { height: 28px; }\n  }\n  @keyframes pulse-ring {\n    0% { transform: scale(1); opacity: 0.8; }\n    100% { transform: scale(1.6); opacity: 0; }\n  }\n  @keyframes float {\n    0%, 100% { transform: translateY(0px); }\n    50% { transform: translateY(-12px); }\n  }\n  @keyframes slideInUp {\n    from { transform: translateY(50px); opacity: 0; }\n    to { transform: translateY(0); opacity: 1; }\n  }\n  @keyframes slideInRight {\n    from { transform: translateX(50px); opacity: 0; }\n    to { transform: translateX(0); opacity: 1; }\n  }\n  @keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n  }\n\n  /* Animation Classes */\n  .anim-rotate { animation: rotate-slow 25s linear infinite; }\n  .anim-rotate-rev { animation: rotate-reverse 20s linear infinite; }\n  .anim-breathe { animation: breathe 3s ease-in-out infinite; }\n  .anim-float { animation: float 5s ease-in-out infinite; }\n  .anim-slide-up { animation: slideInUp 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) both; }\n  .anim-fade { animation: fadeIn 0.5s ease both; }\n\n  /* ═══════════════════════════════════════════════\n     3. SPLASH SCREEN (HIGH QUALITY INTRO)\n     ═══════════════════════════════════════════════ */\n  #splash-screen {\n    position: fixed;\n    inset: 0;\n    background: linear-gradient(135deg, #0A0B2E 0%, #1E1F57 40%, #13144A 80%, #050517 100%);\n    z-index: 9999;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    transition: opacity 0.8s ease, visibility 0.8s ease;\n  }\n  #splash-screen.fade-out {\n    opacity: 0;\n    visibility: hidden;\n  }\n  .splash-mandala {\n    position: absolute;\n    width: 600px;\n    height: 600px;\n    border: 2px solid rgba(212,175,55,0.15);\n    border-radius: 50%;\n  }\n  .splash-logo-container {\n    position: relative;\n    z-index: 10;\n    text-align: center;\n  }\n  .splash-emblem {\n    width: 120px;\n    height: 120px;\n    margin: 0 auto 24px;\n    animation: breathe 3s ease-in-out infinite;\n  }\n  .splash-title {\n    font-size: 3.5rem;\n    letter-spacing: 5px;\n    margin-bottom: 8px;\n    color: #fff;\n  }\n  .splash-tagline {\n    font-size: 0.95rem;\n    color: rgba(255,253,249,0.7);\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    font-weight: 600;\n  }\n  .splash-dots {\n    display: flex;\n    gap: 8px;\n    margin-top: 36px;\n    justify-content: center;\n  }\n  .splash-dot {\n    width: 8px; height: 8px;\n    border-radius: 50%;\n    background: var(--imperial-gold);\n    animation: breathe 1.2s ease-in-out infinite;\n  }\n  .splash-dot:nth-child(2) { animation-delay: 0.2s; }\n  .splash-dot:nth-child(3) { animation-delay: 0.4s; }\n\n  /* ═══════════════════════════════════════════════\n     4. HEADER & TOP NAVIGATION\n     ═══════════════════════════════════════════════ */\n  #navbar {\n    position: fixed;\n    top: 0; left: 0; right: 0;\n    height: 80px;\n    background: rgba(255,253,249,0.9);\n    backdrop-filter: blur(20px);\n    -webkit-backdrop-filter: blur(20px);\n    border-bottom: 1.5px solid rgba(212,175,55,0.25);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 40px;\n    z-index: 900;\n    box-shadow: 0 4px 30px rgba(30,31,87,0.06);\n    transition: all 0.3s;\n  }\n  .nav-logo {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    text-decoration: none;\n    cursor: pointer;\n  }\n  .nav-logo-icon {\n    width: 44px; height: 44px;\n    filter: drop-shadow(0 0 6px var(--imperial-gold-glow));\n  }\n  .nav-title {\n    font-size: 1.6rem;\n    color: var(--royal-indigo);\n    letter-spacing: 1px;\n  }\n  .nav-title span {\n    color: var(--imperial-gold);\n  }\n  .nav-tagline {\n    font-size: 0.65rem;\n    color: #5a5a8a;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    display: block;\n    margin-top: -3px;\n  }\n  .nav-menu {\n    display: flex;\n    align-items: center;\n    gap: 36px;\n    list-style: none;\n  }\n  .nav-menu a {\n    text-decoration: none;\n    color: #5a5a8a;\n    font-weight: 600;\n    font-size: 0.95rem;\n    position: relative;\n    padding: 8px 0;\n    transition: color 0.3s;\n  }\n  .nav-menu a:hover, .nav-menu a.active {\n    color: var(--royal-indigo);\n  }\n  .nav-menu a::after {\n    content: '';\n    position: absolute;\n    bottom: 0; left: 0; width: 0; height: 2px;\n    background: var(--imperial-gold);\n    transition: width 0.3s ease;\n  }\n  .nav-menu a:hover::after, .nav-menu a.active::after {\n    width: 100%;\n  }\n  .nav-actions {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n  }\n  .nav-lang-picker {\n    padding: 8px 16px;\n    border-radius: 50px;\n    border: 1.5px solid var(--theme-border);\n    background: transparent;\n    font-weight: 600;\n    color: var(--theme-primary);\n    cursor: pointer;\n    font-family: 'Poppins', sans-serif;\n  }\n  .profile-badge {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    background: rgba(212,175,55,0.1);\n    border: 1.5px solid var(--imperial-gold);\n    padding: 6px 14px;\n    border-radius: 50px;\n    cursor: pointer;\n  }\n  .profile-avatar {\n    width: 28px; height: 28px;\n    border-radius: 50%;\n    background: var(--imperial-gold);\n    display: flex; align-items: center; justify-content: center;\n    font-weight: 800; font-size: 0.8rem; color: var(--royal-indigo-deep);\n  }\n\n  /* ═══════════════════════════════════════════════\n     5. HERO LANDING PAGE\n     ═══════════════════════════════════════════════ */\n  #page-landing {\n    min-height: 100vh;\n    padding-top: 80px;\n    background: linear-gradient(155deg, #0C0E36 0%, #1A1B54 40%, #25287B 80%, #15164B 100%);\n    position: relative;\n    overflow: hidden;\n    color: #fff;\n    display: flex;\n    align-items: center;\n  }\n  .landing-mandala-1 { top: -150px; right: -150px; width: 600px; height: 600px; }\n  .landing-mandala-2 { bottom: -150px; left: -150px; width: 500px; height: 500px; }\n  .landing-content {\n    max-width: 1280px;\n    margin: 0 auto;\n    width: 100%;\n    padding: 60px 40px;\n    display: grid;\n    grid-template-columns: 1.1fr 0.9fr;\n    gap: 60px;\n    position: relative;\n    z-index: 10;\n  }\n  .landing-badge {\n    background: rgba(212,175,55,0.15);\n    border: 1.5px solid var(--imperial-gold);\n    color: var(--imperial-gold-lt);\n    padding: 8px 20px;\n    border-radius: 50px;\n    font-size: 0.8rem;\n    font-weight: 700;\n    letter-spacing: 1.5px;\n    text-transform: uppercase;\n    display: inline-flex;\n    margin-bottom: 24px;\n  }\n  .landing-title {\n    font-size: 3.8rem;\n    line-height: 1.15;\n    margin-bottom: 24px;\n  }\n  .landing-title span {\n    background: linear-gradient(135deg, var(--imperial-gold-lt), var(--imperial-gold), #b58909);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n  .landing-desc {\n    font-size: 1.1rem;\n    color: rgba(255,253,249,0.78);\n    line-height: 1.7;\n    margin-bottom: 36px;\n    max-width: 580px;\n  }\n  .landing-ctas {\n    display: flex;\n    gap: 16px;\n    flex-wrap: wrap;\n    margin-bottom: 40px;\n  }\n  .trust-row {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n  }\n  .trust-avatars {\n    display: flex;\n  }\n  .trust-avatar {\n    width: 40px; height: 40px;\n    border-radius: 50%;\n    border: 2.5px solid var(--royal-indigo);\n    background: var(--imperial-gold);\n    color: var(--royal-indigo-deep);\n    font-weight: 800; font-size: 0.85rem;\n    display: flex; align-items: center; justify-content: center;\n    margin-left: -12px;\n  }\n  .trust-avatar:first-child { margin-left: 0; }\n  .trust-text {\n    font-size: 0.85rem;\n    color: rgba(255,253,249,0.65);\n    line-height: 1.4;\n  }\n  .trust-text strong { color: var(--imperial-gold-lt); }\n\n  /* Hero Cards Column */\n  .landing-cards {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: flex-end;\n  }\n  .hero-voice-card {\n    background: rgba(255,253,249,0.08);\n    border: 1.5px solid rgba(212,175,55,0.3);\n    backdrop-filter: blur(20px);\n    border-radius: 28px;\n    padding: 28px;\n    width: 100%;\n    max-width: 400px;\n    box-shadow: 0 20px 50px rgba(0,0,0,0.3);\n  }\n  .hero-card-header {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    margin-bottom: 20px;\n  }\n  .hero-card-avatar {\n    width: 54px; height: 54px;\n    border-radius: 50%;\n    background: linear-gradient(135deg, var(--imperial-gold-lt), var(--imperial-gold));\n    display: flex; align-items: center; justify-content: center;\n    box-shadow: 0 0 20px rgba(212,175,55,0.4);\n    animation: breathe 3s ease-in-out infinite;\n  }\n  .hero-card-avatar svg { width: 28px; height: 28px; fill: var(--royal-indigo-deep); }\n  .hero-card-name { font-weight: 700; font-size: 1.1rem; color: #fff; }\n  .hero-card-status { font-size: 0.78rem; color: var(--imperial-gold-lt); font-weight: 600; }\n  \n  .voice-waveform {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    height: 40px;\n    margin-bottom: 18px;\n  }\n  .waveform-bar {\n    width: 4px;\n    background: linear-gradient(to top, var(--imperial-gold-lt), #ffd700);\n    border-radius: 4px;\n    animation: wave 1s ease-in-out infinite;\n  }\n  .waveform-bar:nth-child(2) { animation-delay: 0.1s; }\n  .waveform-bar:nth-child(3) { animation-delay: 0.2s; }\n  .waveform-bar:nth-child(4) { animation-delay: 0.3s; }\n  .waveform-bar:nth-child(5) { animation-delay: 0.15s; }\n  .waveform-bar:nth-child(6) { animation-delay: 0.25s; }\n  .waveform-bar:nth-child(7) { animation-delay: 0.05s; }\n  .waveform-bar:nth-child(8) { animation-delay: 0.35s; }\n  \n  .hero-card-msg {\n    font-size: 0.92rem;\n    color: rgba(255,253,249,0.85);\n    font-style: italic;\n    line-height: 1.5;\n  }\n  \n  .hero-scam-alert {\n    background: #fff;\n    border-radius: 24px;\n    padding: 20px;\n    color: #1a1a3e;\n    width: 100%;\n    max-width: 400px;\n    box-shadow: 0 15px 40px rgba(0,0,0,0.2);\n    border: 1.5px solid var(--theme-border);\n  }\n  .scam-hdr {\n    display: flex; align-items: center; gap: 12px; margin-bottom: 12px;\n  }\n  .scam-icon {\n    width: 38px; height: 38px; border-radius: 50%;\n    background: #FFF3CD; display: flex; align-items: center; justify-content: center;\n    font-size: 1.1rem;\n  }\n  .scam-title { font-weight: 700; font-size: 0.95rem; }\n  .scam-sub { font-size: 0.72rem; color: #5a5a8a; }\n  \n  .scam-bar-bg { background: #f0f0f0; border-radius: 6px; height: 8px; overflow: hidden; margin-bottom: 8px; }\n  .scam-bar-fill { height: 100%; background: linear-gradient(90deg, #F4A300, #E11D48); width: 85%; }\n  .scam-labels { display: flex; justify-content: space-between; font-size: 0.7rem; font-weight: 700; color: #5a5a8a; }\n\n  /* ═══════════════════════════════════════════════\n     6. CHOOSE MODE SELECTION GRID\n     ═══════════════════════════════════════════════ */\n  #page-modes-grid {\n    padding: 100px 40px;\n    background: var(--pearl-ivory);\n  }\n  .section-hdr {\n    text-align: center;\n    max-width: 700px;\n    margin: 0 auto 60px;\n  }\n  .section-badge {\n    color: var(--imperial-gold);\n    font-size: 0.8rem;\n    font-weight: 700;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    display: inline-block;\n  }\n  .section-title {\n    font-size: 2.8rem;\n    color: var(--royal-indigo);\n    margin-bottom: 16px;\n  }\n  .section-desc {\n    font-size: 1.05rem;\n    color: #5a5a8a;\n    line-height: 1.6;\n  }\n  \n  .modes-grid {\n    max-width: 1200px;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 28px;\n  }\n  .mode-card {\n    border-radius: 30px;\n    overflow: hidden;\n    cursor: pointer;\n    box-shadow: 0 10px 30px rgba(30,31,87,0.08);\n    background: #fff;\n    border: 1.5px solid var(--theme-border);\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    display: flex;\n    flex-direction: column;\n  }\n  .mode-card:hover {\n    transform: translateY(-8px);\n    box-shadow: 0 30px 60px rgba(30,31,87,0.18);\n  }\n  .mode-card-header {\n    padding: 32px 24px 20px;\n    position: relative;\n  }\n  .mode-emoji {\n    font-size: 2.8rem;\n    margin-bottom: 16px;\n    display: block;\n  }\n  .mode-tag {\n    display: inline-block;\n    font-size: 0.68rem;\n    font-weight: 700;\n    letter-spacing: 1.5px;\n    text-transform: uppercase;\n    padding: 4px 14px;\n    border-radius: 50px;\n    margin-bottom: 12px;\n  }\n  .mode-title {\n    font-size: 1.35rem;\n    font-weight: 800;\n    color: var(--royal-indigo);\n    margin-bottom: 8px;\n  }\n  .mode-desc {\n    font-size: 0.85rem;\n    color: #5a5a8a;\n    line-height: 1.5;\n  }\n  .mode-card-body {\n    padding: 0 24px 32px;\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .mode-features-list {\n    list-style: none;\n    margin-bottom: 24px;\n  }\n  .mode-feature-item {\n    font-size: 0.82rem;\n    color: #5a5a8a;\n    margin-bottom: 8px;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    font-weight: 600;\n  }\n  .mode-feature-item::before {\n    content: '✦';\n    color: var(--imperial-gold);\n    font-size: 0.75rem;\n  }\n  \n  /* Mode Specific Color Schemes */\n  .mode-card.amma .mode-card-header { background: linear-gradient(135deg, #FFF5E6 0%, #FFE5C4 100%); }\n  .mode-card.amma .mode-tag { background: rgba(244,163,0,0.15); color: #B8770A; }\n  .mode-card.amma .mode-btn { background: linear-gradient(135deg, #F4A300, #c49b2e); color: var(--royal-indigo-deep); }\n  \n  .mode-card.business .mode-card-header { background: linear-gradient(135deg, #EEF5F2 0%, #D2ECE4 100%); }\n  .mode-card.business .mode-tag { background: rgba(11,90,62,0.12); color: #0B5A3E; }\n  .mode-card.business .mode-btn { background: linear-gradient(135deg, #0B5A3E, #0d7050); color: #fff; }\n  \n  .mode-card.senior .mode-card-header { background: linear-gradient(135deg, #EAF5F6 0%, #C4E7EA 100%); }\n  .mode-card.senior .mode-tag { background: rgba(127,183,190,0.22); color: #2D7A82; }\n  .mode-card.senior .mode-btn { background: linear-gradient(135deg, #7FB7BE, #5a9fa8); color: var(--royal-indigo-deep); }\n  \n  .mode-card.student .mode-card-header { background: linear-gradient(135deg, #F0EEFF 0%, #DBD2FF 100%); }\n  .mode-card.student .mode-tag { background: rgba(108,63,212,0.12); color: #6C3FD4; }\n  .mode-card.student .mode-btn { background: linear-gradient(135deg, #6C3FD4, #8A60EF); color: #fff; }\n\n  /* ═══════════════════════════════════════════════\n     7. MULTI-STEP ONBOARDING QUESTIONNAIRE\n     ═══════════════════════════════════════════════ */\n  #page-onboarding {\n    min-height: 100vh;\n    padding: 120px 20px 60px;\n    background: linear-gradient(135deg, var(--warm-ivory) 0%, var(--pearl-ivory) 100%);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .onboarding-box {\n    max-width: 600px;\n    width: 100%;\n    background: #fff;\n    border-radius: 32px;\n    border: 2px solid rgba(212,175,55,0.3);\n    padding: 48px;\n    box-shadow: 0 30px 70px rgba(30,31,87,0.12);\n  }\n  .onboarding-progress {\n    display: flex;\n    gap: 8px;\n    margin-bottom: 32px;\n  }\n  .onboarding-step-dot {\n    flex-grow: 1;\n    height: 6px;\n    background: #e5e7eb;\n    border-radius: 4px;\n    transition: all 0.5s ease;\n  }\n  .onboarding-step-dot.active {\n    background: var(--imperial-gold);\n  }\n  .onboarding-question-title {\n    font-size: 1.8rem;\n    color: var(--royal-indigo);\n    margin-bottom: 12px;\n  }\n  .onboarding-question-subtitle {\n    font-size: 0.95rem;\n    color: #5a5a8a;\n    margin-bottom: 28px;\n  }\n  .onboarding-options {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 16px;\n    margin-bottom: 32px;\n  }\n  .onboarding-option {\n    border: 2px solid rgba(30,31,87,0.12);\n    padding: 16px 24px;\n    border-radius: 16px;\n    cursor: pointer;\n    font-weight: 600;\n    transition: all 0.3s;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .onboarding-option:hover {\n    border-color: var(--imperial-gold);\n    background: rgba(212,175,55,0.05);\n  }\n  .onboarding-option.selected {\n    border-color: var(--imperial-gold);\n    background: rgba(212,175,55,0.12);\n    color: var(--royal-indigo);\n  }\n\n  /* ═══════════════════════════════════════════════\n     8. AUTHENTICATION MODAL (OTP FLOW)\n     ═══════════════════════════════════════════════ */\n  .modal-overlay {\n    position: fixed;\n    inset: 0;\n    background: rgba(10,11,46,0.85);\n    backdrop-filter: blur(12px);\n    -webkit-backdrop-filter: blur(12px);\n    z-index: 1000;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.3s ease;\n  }\n  .modal-overlay.active {\n    opacity: 1;\n    visibility: visible;\n  }\n  .auth-modal {\n    background: #fff;\n    border-radius: 30px;\n    width: 100%;\n    max-width: 480px;\n    overflow: hidden;\n    box-shadow: 0 40px 100px rgba(0,0,0,0.4);\n    border: 1.5px solid var(--theme-border);\n    transform: scale(0.95) translateY(20px);\n    transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);\n  }\n  .modal-overlay.active .auth-modal {\n    transform: scale(1) translateY(0);\n  }\n  .auth-header {\n    background: linear-gradient(135deg, #0A0B2E, #1E1F57);\n    padding: 36px 36px 28px;\n    text-align: center;\n    color: #fff;\n    position: relative;\n  }\n  .auth-emblem {\n    width: 56px; height: 56px; margin: 0 auto 12px;\n    filter: drop-shadow(0 0 10px rgba(212,175,55,0.6));\n  }\n  .auth-header h2 { font-size: 1.5rem; margin-bottom: 6px; }\n  .auth-header p { font-size: 0.85rem; color: rgba(255,253,249,0.6); }\n  .close-modal {\n    position: absolute; top: 16px; right: 16px;\n    background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);\n    color: #fff; border-radius: 50%; width: 32px; height: 32px;\n    cursor: pointer; display: flex; align-items: center; justify-content: center;\n  }\n  .auth-body { padding: 32px 36px; }\n  .social-btn {\n    width: 100%; display: flex; align-items: center; justify-content: center; gap: 12px;\n    padding: 14px; border-radius: 14px; border: 1.5px solid #e5e7eb; background: #fff;\n    font-weight: 700; font-family: 'Poppins', sans-serif; cursor: pointer; transition: all 0.3s;\n    margin-bottom: 12px;\n  }\n  .social-btn:hover { border-color: var(--imperial-gold); background: rgba(212,175,55,0.05); }\n  .social-btn.phone-btn { background: linear-gradient(135deg, var(--royal-indigo), #2B2D80); color: #fff; border: none; }\n  \n  .divider { display: flex; align-items: center; gap: 12px; margin: 20px 0; color: #5a5a8a; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; }\n  .divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: rgba(30,31,87,0.15); }\n  \n  .phone-input-row { display: flex; gap: 10px; margin-bottom: 16px; }\n  .flag-box { padding: 14px; border-radius: 14px; border: 2px solid var(--theme-border); font-weight: 700; background: #f9f9ff; }\n  \n  .otp-row { display: flex; gap: 8px; justify-content: center; margin: 20px 0; }\n  .otp-box {\n    width: 48px; height: 56px; border: 2px solid var(--theme-border); border-radius: 12px;\n    text-align: center; font-size: 1.5rem; font-weight: 800; outline: none; background: #fff;\n  }\n  .otp-box:focus { border-color: var(--imperial-gold); }\n  .otp-box.filled { border-color: var(--imperial-gold); background: rgba(212,175,55,0.05); }\n\n  /* ═══════════════════════════════════════════════\n     9. PERSISTENT VOICE COMPANION WIDGET\n     ═══════════════════════════════════════════════ */\n  #voice-companion {\n    position: fixed;\n    bottom: 30px; right: 30px;\n    z-index: 950;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    gap: 12px;\n  }\n  .voice-bubble {\n    background: var(--royal-indigo);\n    color: #fff;\n    padding: 10px 20px;\n    border-radius: 50px;\n    font-size: 0.82rem;\n    font-weight: 600;\n    box-shadow: 0 10px 30px rgba(30,31,87,0.3);\n    border: 1px solid var(--imperial-gold);\n    max-width: 250px;\n    animation: fadeIn 0.4s ease;\n  }\n  .voice-trigger {\n    width: 70px; height: 70px;\n    border-radius: 50%;\n    background: linear-gradient(135deg, var(--royal-indigo), var(--royal-indigo-deep));\n    border: 3.5px solid var(--imperial-gold);\n    cursor: pointer;\n    display: flex; align-items: center; justify-content: center;\n    box-shadow: 0 10px 30px rgba(30,31,87,0.4);\n    animation: breathe 3.5s ease-in-out infinite;\n    position: relative;\n  }\n  .voice-trigger::before {\n    content: ''; position: absolute; inset: -6px; border-radius: 50%;\n    border: 2px solid var(--imperial-gold-glow); animation: pulse-ring 2.5s ease-out infinite;\n  }\n  .voice-trigger svg { width: 30px; height: 30px; fill: var(--imperial-gold); }\n  .voice-trigger.listening {\n    background: linear-gradient(135deg, var(--saffron, #F4A300), var(--terracotta, #C96A3D));\n  }\n\n  /* ═══════════════════════════════════════════════\n     10. THE DYNAMIC PERSONA DASHBOARDS CONTAINER\n     ═══════════════════════════════════════════════ */\n  #page-dashboard {\n    min-height: 100vh;\n    padding-top: 80px;\n    background: var(--theme-bg);\n    display: flex;\n  }\n  \n  /* Dashboard Sidebar */\n  .dash-sidebar {\n    width: 280px;\n    background: #fff;\n    border-right: 1.5px solid var(--theme-border);\n    padding: 30px 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    flex-shrink: 0;\n  }\n  .sidebar-profile {\n    text-align: center;\n    margin-bottom: 30px;\n  }\n  .sidebar-avatar {\n    width: 80px; height: 80px; border-radius: 50%;\n    border: 3px solid var(--theme-secondary);\n    margin: 0 auto 12px; display: flex; align-items: center; justify-content: center;\n    font-size: 2.2rem; background: var(--pearl-ivory);\n  }\n  .sidebar-name { font-size: 1.15rem; font-weight: 700; color: var(--royal-indigo); }\n  .sidebar-role { font-size: 0.75rem; color: #5a5a8a; font-weight: 700; text-transform: uppercase; margin-top: 4px; }\n  \n  .sidebar-menu { list-style: none; display: flex; flex-direction: column; gap: 8px; }\n  .sidebar-menu-btn {\n    width: 100%; display: flex; align-items: center; gap: 14px; padding: 14px 20px;\n    border-radius: 16px; border: none; background: transparent; font-family: 'Poppins', sans-serif;\n    font-weight: 700; color: #5a5a8a; cursor: pointer; text-align: left; transition: all 0.3s;\n  }\n  .sidebar-menu-btn:hover, .sidebar-menu-btn.active {\n    background: rgba(212,175,55,0.12); color: var(--theme-primary);\n  }\n  \n  /* Dashboard Main Content Area */\n  .dash-main {\n    flex-grow: 1;\n    padding: 40px;\n    overflow-y: auto;\n  }\n  .dash-header {\n    display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px;\n  }\n  .dash-welcome h2 { font-size: 2.2rem; color: var(--theme-primary); }\n  .dash-welcome p { font-size: 0.95rem; color: #5a5a8a; font-weight: 600; margin-top: 4px; }\n  \n  /* ═══════════════════════════════════════════════\n     11. FLOATING DEVELOPER CONSOLE (REAL-TIME ENGINE)\n     ═══════════════════════════════════════════════ */\n  #dev-console-toggle {\n    position: fixed;\n    bottom: 30px; left: 30px;\n    z-index: 990;\n    padding: 10px 20px;\n    border-radius: 50px;\n    background: #111827;\n    color: #10B981;\n    font-family: 'Courier New', monospace;\n    font-weight: 700;\n    font-size: 0.8rem;\n    border: 1px solid #10B981;\n    box-shadow: 0 10px 20px rgba(0,0,0,0.3);\n    cursor: pointer;\n    display: flex; align-items: center; gap: 8px;\n  }\n  #dev-console {\n    position: fixed;\n    bottom: 0; left: 0; right: 0;\n    height: 380px;\n    background: #0B0F19;\n    border-top: 2px solid #10B981;\n    z-index: 980;\n    display: flex;\n    flex-direction: column;\n    color: #E5E7EB;\n    font-family: 'Courier New', monospace;\n    transition: transform 0.4s ease;\n    transform: translateY(100%);\n    box-shadow: 0 -20px 50px rgba(0,0,0,0.4);\n  }\n  #dev-console.active { transform: translateY(0); }\n  \n  .console-header {\n    display: flex; justify-content: space-between; align-items: center;\n    background: #111827; padding: 10px 24px; border-bottom: 1px solid #1F2937;\n  }\n  .console-title { font-weight: 700; color: #10B981; display: flex; align-items: center; gap: 8px; }\n  .console-tabs { display: flex; gap: 12px; }\n  .console-tab {\n    background: transparent; border: none; color: #9CA3AF; padding: 6px 14px;\n    cursor: pointer; font-family: inherit; font-size: 0.8rem; font-weight: 700;\n  }\n  .console-tab.active { color: #10B981; border-bottom: 2px solid #10B981; }\n  .console-body {\n    flex-grow: 1; padding: 20px; overflow-y: auto;\n    font-size: 0.8rem; line-height: 1.5;\n  }\n  .sql-log { color: #F59E0B; margin-bottom: 10px; border-left: 3px solid #F59E0B; padding-left: 10px; }\n  .api-log { color: #3B82F6; margin-bottom: 10px; border-left: 3px solid #3B82F6; padding-left: 10px; }\n  .db-table-view { width: 100%; border-collapse: collapse; }\n  .db-table-view th { text-align: left; border-bottom: 1px solid #374151; padding: 8px; color: #10B981; }\n  .db-table-view td { padding: 8px; border-bottom: 1px solid #1F2937; }\n\n  /* ═══════════════════════════════════════════════\n     12. OTHER STYLES (MODALS, TOASTS, SCAM SIMULATOR)\n     ═══════════════════════════════════════════════ */\n  #toast {\n    position: fixed;\n    top: 100px; right: 30px;\n    background: var(--royal-indigo);\n    color: #fff; padding: 14px 24px; border-radius: 16px;\n    box-shadow: 0 10px 30px rgba(30,31,87,0.2);\n    border: 1.5px solid var(--imperial-gold);\n    display: flex; align-items: center; gap: 12px;\n    transform: translateX(120%); transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    z-index: 2000;\n  }\n  #toast.show { transform: translateX(0); }\n  \n  /* Scam Detection Screenshot Preview cards */\n  .scam-sample-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px; }\n  .scam-sample-card {\n    border: 2px dashed rgba(30,31,87,0.2); padding: 12px; border-radius: 12px;\n    cursor: pointer; text-align: center; transition: all 0.3s;\n  }\n  .scam-sample-card:hover { border-color: var(--imperial-gold); background: rgba(212,175,55,0.05); }\n\n  /* Responsive styling */\n  @media (max-width: 1024px) {\n    .landing-content { grid-template-columns: 1fr; text-align: center; }\n    .landing-cards { align-items: center; }\n    .modes-grid { grid-template-columns: repeat(2, 1fr); }\n  }\n  @media (max-width: 768px) {\n    .modes-grid { grid-template-columns: 1fr; }\n    #navbar { padding: 0 20px; }\n    .nav-menu { display: none; }\n  }\n\n  /* ═══════════════════════════════════════════════\n     12. FULL DEDICATED AUTHENTICATION PAGE STYLES\n     ═══════════════════════════════════════════════ */\n  #page-auth {\n    min-height: calc(100vh - 80px);\n    margin-top: 80px;\n    background: linear-gradient(155deg, #FFFDF9 0%, #FFF8EE 100%);\n    position: relative;\n    overflow: hidden;\n  }\n  .auth-container {\n    max-width: 1280px;\n    margin: 0 auto;\n    width: 100%;\n    min-height: calc(100vh - 80px);\n    display: grid;\n    grid-template-columns: 1fr 1.2fr;\n    gap: 40px;\n    align-items: center;\n    padding: 40px;\n    position: relative;\n    z-index: 10;\n  }\n  @media (max-width: 992px) {\n    .auth-container {\n      grid-template-columns: 1fr;\n      padding: 20px;\n    }\n    .auth-left {\n      display: none !important;\n    }\n  }\n  .auth-left {\n    background: linear-gradient(135deg, #0A0B2E 0%, #1E1F57 50%, #13144A 100%);\n    border-radius: 40px;\n    border: 1.5px solid rgba(212, 175, 55, 0.3);\n    padding: 60px 40px;\n    color: #fff;\n    text-align: center;\n    position: relative;\n    overflow: hidden;\n    height: 100%;\n    min-height: 550px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 30px 60px rgba(10,11,46,0.25);\n  }\n  .auth-mandala {\n    position: absolute;\n    width: 500px;\n    height: 500px;\n    border: 1px solid rgba(212, 175, 55, 0.1);\n    border-radius: 50%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    pointer-events: none;\n  }\n  .auth-quote {\n    margin-top: 48px;\n    border-top: 1.5px dashed rgba(212, 175, 55, 0.3);\n    padding-top: 30px;\n    width: 100%;\n    max-width: 440px;\n  }\n  .auth-quote-sanskrit {\n    font-size: 1.6rem;\n    color: var(--imperial-gold-lt);\n    margin-bottom: 8px;\n    font-weight: 700;\n  }\n  .auth-quote-translation {\n    font-size: 0.88rem;\n    color: rgba(255, 253, 249, 0.7);\n    line-height: 1.5;\n  }\n  .auth-right {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n  }\n  .auth-card {\n    background: #ffffff;\n    border: 1.5px solid var(--theme-border);\n    border-radius: 36px;\n    padding: 48px;\n    box-shadow: var(--theme-shadow);\n    width: 100%;\n    max-width: 480px;\n    position: relative;\n  }\n  .auth-tabs {\n    display: flex;\n    gap: 16px;\n    border-bottom: 2px solid rgba(212, 175, 55, 0.15);\n    margin-bottom: 32px;\n  }\n  .auth-tab-btn {\n    background: none;\n    border: none;\n    padding: 12px 0;\n    font-family: 'Poppins', sans-serif;\n    font-size: 1.05rem;\n    font-weight: 700;\n    color: #5a5a8a;\n    cursor: pointer;\n    position: relative;\n    flex-grow: 1;\n    transition: all 0.3s ease;\n  }\n  .auth-tab-btn:hover {\n    color: var(--royal-indigo);\n  }\n  .auth-tab-btn.active {\n    color: var(--royal-indigo);\n  }\n  .auth-tab-btn.active::after {\n    content: '';\n    position: absolute;\n    bottom: -2px;\n    left: 0;\n    width: 100%;\n    height: 3px;\n    background: var(--imperial-gold);\n    border-radius: 4px;\n  }\n  .auth-input-group {\n    margin-bottom: 24px;\n    text-align: left;\n  }\n  .auth-input-group label {\n    display: block;\n    font-size: 0.8rem;\n    font-weight: 700;\n    color: #5a5a8a;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    margin-bottom: 8px;\n  }\n  .auth-subtitle {\n    font-size: 0.85rem;\n    color: #5a5a8a;\n    margin-bottom: 24px;\n    margin-top: -12px;\n  }\n  .otp-row {\n    display: flex;\n    justify-content: space-between;\n    gap: 8px;\n  }\n  .otp-box {\n    width: 48px;\n    height: 56px;\n    border: 2px solid var(--theme-border);\n    border-radius: 14px;\n    text-align: center;\n    font-size: 1.4rem;\n    font-weight: 800;\n    color: var(--royal-indigo);\n    outline: none;\n    background: #fff;\n    transition: all 0.3s;\n  }\n  .otp-box:focus {\n    border-color: var(--theme-primary);\n    box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.15);\n  }\n  .namaste-gesture {\n    font-size: 4.5rem;\n    margin-bottom: 20px;\n    animation: breathe 3s ease-in-out infinite;\n  }\n  \n  /* Single Mode Locked Layout Elements */\n  .locked-badge {\n    background: linear-gradient(135deg, var(--imperial-gold-lt) 0%, var(--imperial-gold) 100%);\n    color: var(--royal-indigo-deep);\n    padding: 6px 16px;\n    border-radius: 50px;\n    font-size: 0.72rem;\n    font-weight: 800;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    box-shadow: 0 4px 12px rgba(212,175,55,0.25);\n    margin-left: 8px;\n  }\n\n  /* ═══════════════════════════════════════════════\n     FLIPPABLE 3D FLASHCARD & RECIPE FINDER WIDGET\n     ═══════════════════════════════════════════════ */\n  .flashcard-container {\n    perspective: 1000px;\n    width: 100%;\n    max-width: 480px;\n    height: 260px;\n    margin: 20px auto;\n    cursor: pointer;\n  }\n  .flashcard-inner {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n    transform-style: preserve-3d;\n  }\n  .flashcard-container.flipped .flashcard-inner {\n    transform: rotateY(180deg);\n  }\n  .flashcard-front, .flashcard-back {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    border-radius: 24px;\n    padding: 28px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid var(--theme-border);\n    box-shadow: var(--theme-shadow);\n  }\n  .flashcard-front {\n    background: linear-gradient(135deg, var(--warm-ivory) 0%, #ffffff 100%);\n    color: var(--royal-indigo);\n  }\n  .flashcard-back {\n    background: linear-gradient(135deg, var(--royal-indigo) 0%, var(--royal-indigo-deep) 100%);\n    color: #fff;\n    transform: rotateY(180deg);\n    border-color: var(--imperial-gold);\n  }\n  .sidebar-widget {\n    background: rgba(212,175,55,0.06);\n    border: 1.5px solid var(--theme-border);\n    border-radius: 20px;\n    padding: 16px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    transition: all 0.3s ease;\n  }\n  .sidebar-widget:hover {\n    box-shadow: 0 8px 24px rgba(30,31,87,0.05);\n  }\n  .sidebar-dish-btn {\n    width: 100%;\n    text-align: left;\n    background: #fff;\n    border: 1px solid var(--theme-border);\n    border-radius: 12px;\n    padding: 8px 12px;\n    font-size: 0.8rem;\n    font-weight: 700;\n    color: var(--royal-indigo);\n    cursor: pointer;\n    transition: all 0.2s ease;\n  }\n  .sidebar-dish-btn:hover {\n    background: var(--warm-ivory);\n    transform: translateX(4px);\n    border-color: var(--imperial-gold);\n  }\n  .toggle-pill-container {\n    display: flex;\n    background: rgba(0,0,0,0.05);\n    padding: 4px;\n    border-radius: 50px;\n    width: fit-content;\n  }\n  .toggle-pill-btn {\n    border: none;\n    background: transparent;\n    padding: 8px 16px;\n    border-radius: 50px;\n    font-size: 0.85rem;\n    font-weight: 700;\n    cursor: pointer;\n    transition: all 0.2s;\n  }\n  .toggle-pill-btn.active {\n    background: #fff;\n    box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  }\n  .pill-veg.active { color: #065f46; }\n  .pill-nonveg.active { color: #991b1b; }\n  .pill-vrat.active { color: #92400e; }\n  \n  /* Mock Video Player Styles */\n  .mock-player {\n    position: relative;\n    background: #000;\n    border-radius: 16px;\n    overflow: hidden;\n    aspect-ratio: 16/9;\n    width: 100%;\n    margin-top: 14px;\n    box-shadow: 0 10px 30px rgba(0,0,0,0.3);\n  }\n  .mock-player img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    opacity: 0.7;\n    transition: all 0.5s;\n  }\n  .mock-player:hover img {\n    transform: scale(1.03);\n  }\n  .play-overlay {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    cursor: pointer;\n  }\n  .play-icon-btn {\n    width: 68px;\n    height: 68px;\n    background: #ef4444;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.8rem;\n    box-shadow: 0 0 20px rgba(239,68,68,0.6);\n    transition: all 0.3s;\n  }\n  .mock-player:hover .play-icon-btn {\n    transform: scale(1.1);\n    background: #ff0000;\n  }\n  .player-loader {\n    width: 48px;\n    height: 48px;\n    border: 5px solid #fff;\n    border-bottom-color: transparent;\n    border-radius: 50%;\n    animation: rotate-slow 1s linear infinite;\n  }\n  .music-note-ani {\n    animation: float 3s ease-in-out infinite;\n  }\n" }} />
        {/* ═══════════════════════════════════════════════════
     TOAST NOTIFICATION
     ═══════════════════════════════════════════════════ */}
        <div id="toast">
          <span id="toast-icon">✨</span>
          <span id="toast-text" style={{fontWeight: 700}}>Welcome to Saarthi!</span>
        </div>
        {/* ═══════════════════════════════════════════════════
     1. SPLASH SCREEN (HIGH FIDELITY ROYAL LOGO)
     ═══════════════════════════════════════════════════ */}
        <div id="splash-screen">
          <div className="splash-mandala anim-rotate" />
          <div className="splash-mandala anim-rotate-rev" style={{width: '450px', height: '450px'}} />
          <div className="splash-logo-container">
            {/* Royal Anjali Mudra SVG Emblem */}
            <svg className="splash-emblem" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={60} cy={60} r={56} stroke="#D4AF37" strokeWidth={2} strokeDasharray="6 4" opacity="0.6" />
              <path d="M42 74 C38 68, 34 60, 36 51 C37 46, 40 43, 44 45 C45 46, 46 48, 46 50 L47 55 L51 47 C53 45, 56 46, 56 49 L57 60 L61 52 C63 51, 65 53, 65 56 L65 67 L69 60 C71 60, 72 62, 72 65 L71 76 C69 82, 64 86, 59 87 C54 88, 48 84, 44 78 Z" fill="#D4AF37" />
              <path d="M78 74 C82 68, 86 60, 84 51 C83 46, 80 43, 76 45 C75 46, 74 48, 74 50 L73 55 L69 47 C67 45, 64 46, 64 49 L63 60 L59 52 C57 51, 55 53, 55 56 L55 67 L51 60 C49 60, 48 62, 48 65 L49 76 C51 82, 56 86, 61 87 C66 88, 72 84, 76 78 Z" fill="#D4AF37" />
              <circle cx={60} cy={34} r="4.5" fill="#E8C84A" />
              <path d="M60 30 L60 22" stroke="#E8C84A" strokeWidth={2} strokeLinecap="round" />
            </svg>
            <h1 className="splash-title font-royal gradient-gold">SAARTHI</h1>
            <div className="splash-tagline">Guiding India into the Digital Future</div>
            <div className="splash-dots">
              <div className="splash-dot" />
              <div className="splash-dot" />
              <div className="splash-dot" />
            </div>
          </div>
        </div>
        {/* ═══════════════════════════════════════════════════
     2. NAVIGATION BAR
     ═══════════════════════════════════════════════════ */}
        <nav id="navbar">
          <div className="nav-logo" onclick="showLandingPage()">
            {/* Mini Namaste SVG Emblem */}
            <svg className="nav-logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={20} cy={20} r={18} fill="#1E1F57" stroke="#D4AF37" strokeWidth="1.5" />
              <path d="M14 26 C12 23, 10 19, 11 15 C12 13, 14 12, 16 13 L17.5 19 L20 15 C21 14, 22 15, 22 17 L22.5 22 L24 18 C25 17, 26 18, 26 20 L25.5 26 C24.5 29, 22 31, 20 31 C18 31, 15.5 29, 14 26 Z" fill="#D4AF37" />
              <path d="M26 26 C28 23, 30 19, 29 15 C28 13, 26 12, 24 13 L22.5 19 L20 15 C19 14, 18 15, 18 17 L17.5 22 L16 18 C15 17, 14 18, 14 20 L14.5 26 C15.5 29, 18 31, 20 31 C22 31, 24.5 29, 26 26 Z" fill="#D4AF37" />
            </svg>
            <div>
              <div className="nav-title font-royal">Sa<span>arthi</span></div>
              <span className="nav-tagline">🇮🇳 Digital Companion</span>
            </div>
          </div>
          <ul className="nav-menu" id="nav-links">
            <li><a href="#" onclick="showLandingPage(); return false;" className="active">Home</a></li>
            <li><a href="#page-modes-grid" onclick="scrollToElement('page-modes-grid'); return false;">Explore Modes</a></li>
            <li><a href="#" onclick="showToast('💡', 'Select a mode below to view functional API & dashboard tools!'); return false;">Features</a></li>
          </ul>
          <div className="nav-actions">
            <select className="nav-lang-picker" id="language-selector" onchange="changeLanguage(this.value)">
              <option value="English">English</option>
              <option value="Hindi">हिंदी (Hindi)</option>
              <option value="Tamil">தமிழ் (Tamil)</option>
              <option value="Telugu">తెలుగు (Telugu)</option>
            </select>
            <div id="nav-auth-section">
              <button className="btn btn-royal" onclick="showAuthPage('login')">Sign In 🙏</button>
            </div>
          </div>
        </nav>
        {/* ═══════════════════════════════════════════════════
     3. HERO LANDING PAGE
     ═══════════════════════════════════════════════════ */}
        <section id="page-landing">
          <div className="mandala-watermark landing-mandala-1 anim-rotate" />
          <div className="mandala-watermark landing-mandala-2 anim-rotate-rev" />
          <div className="landing-content">
            <div className="landing-left anim-slide-up">
              <div className="landing-badge">Guiding India into the Digital Future</div>
              <h1 className="landing-title font-royal">
                Technology Made<br />
                Simple For <span>Every Indian</span>
              </h1>
              <p className="landing-desc font-body">
                Saarthi is an emotionally intelligent, voice-first digital companion that understands your language, speaks warmly like family, and helps you learn technology, protect yourself from fraud, and manage daily life with absolute confidence.
              </p>
              <div className="landing-ctas">
                <button className="btn btn-royal" onclick="scrollToElement('page-modes-grid')">Begin Journey ✦</button>
                <button className="btn btn-outline" style={{color: '#fff', borderColor: '#fff'}} onclick="openDevConsole()">DB Console 💻</button>
              </div>
              <div className="trust-row">
                <div className="trust-avatars">
                  <div className="trust-avatar">अ</div>
                  <div className="trust-avatar" style={{background: '#E8C84A'}}>म</div>
                  <div className="trust-avatar" style={{background: '#7FB7BE'}}>स</div>
                  <div className="trust-avatar" style={{background: '#6C3FD4', color: '#fff'}}>+</div>
                </div>
                <p className="trust-text font-body">
                  Loved by <strong>10 Lakh+ Indians</strong> across Bharat<br />
                  Mothers · Seniors · Shop Owners · Students
                </p>
              </div>
            </div>
            <div className="landing-cards anim-float">
              {/* Voice helper card */}
              <div className="hero-voice-card">
                <div className="hero-card-header">
                  <div className="hero-card-avatar">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2a8 8 0 0 1 8 8c0 3-1.7 5.6-4.2 7L12 22l-3.8-5C5.7 15.6 4 13 4 10a8 8 0 0 1 8-8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="hero-card-name font-royal">Lakshmi Amma</div>
                    <div className="hero-card-status">● Active Companion — Guidance</div>
                  </div>
                </div>
                <div className="voice-waveform">
                  <div className="waveform-bar" style={{height: '12px'}} />
                  <div className="waveform-bar" style={{height: '28px'}} />
                  <div className="waveform-bar" style={{height: '38px'}} />
                  <div className="waveform-bar" style={{height: '18px'}} />
                  <div className="waveform-bar" style={{height: '32px'}} />
                  <div className="waveform-bar" style={{height: '22px'}} />
                  <div className="waveform-bar" style={{height: '14px'}} />
                  <div className="waveform-bar" style={{height: '26px'}} />
                </div>
                <p className="hero-card-msg font-body">"Namaste beta! Main Lakshmi Amma hoon. Aaj rasoi me kya pakana hai ya bank ka koi kaam seekhna hai?" 🌸</p>
              </div>
              {/* Scam alert simulation card */}
              <div className="hero-scam-alert">
                <div className="scam-hdr">
                  <div className="scam-icon">🛡️</div>
                  <div>
                    <div className="scam-title font-royal">Scam Safety Active</div>
                    <div className="scam-sub font-body">Screen message analysis…</div>
                  </div>
                </div>
                <div className="scam-bar-bg">
                  <div className="scam-bar-fill" />
                </div>
                <div className="scam-labels font-body">
                  <span>Safe</span>
                  <span style={{color: '#E11D48'}}>85% High Risk</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ═══════════════════════════════════════════════════
     4. EXPLORE MODES SELECTION SECTION
     ═══════════════════════════════════════════════ */}
        <section id="page-modes-grid">
          <div className="section-hdr">
            <span className="section-badge font-royal">Choose Your Saarthi</span>
            <h2 className="section-title font-royal">4 Independent AI Ecosystems</h2>
            <p className="section-desc font-body">
              Saarthi changes completely based on who is using it. Each mode has a custom UI color palette, different personality, custom voice tone, unique interactive tools, and dedicated APIs.
            </p>
          </div>
          <div className="modes-grid">
            {/* Amma Mode */}
            <div className="mode-card amma" onclick="selectModeOnCard('amma')">
              <div className="mode-card-header">
                <span className="mode-emoji">🌸</span>
                <div className="mode-tag font-royal">For Homemakers</div>
                <h3 className="mode-title font-royal">Amma Mode</h3>
                <p className="mode-desc font-body">Designed for mothers and home managers. Warm, motherly vocabulary, saffronRangoli styling.</p>
              </div>
              <div className="mode-card-body">
                <ul className="mode-features-list font-body">
                  <li className="mode-feature-item">🍳 Smart Ingredient Recipe AI</li>
                  <li className="mode-feature-item">🛒 Budget Grocery Planner</li>
                  <li className="mode-feature-item">🛡️ Suspicious Scam Screenshot Detector</li>
                  <li className="mode-feature-item">⏰ Medicine &amp; Birthday Reminders</li>
                  <li className="mode-feature-item">🎙️ Lakshmi Amma Voice Assistant</li>
                </ul>
                <button className="btn mode-btn font-royal w-full justify-center">Activate Amma Mode →</button>
              </div>
            </div>
            {/* Business Mode */}
            <div className="mode-card business" onclick="selectModeOnCard('business')">
              <div className="mode-card-header">
                <span className="mode-emoji">💼</span>
                <div className="mode-tag font-royal">For Shop Owners</div>
                <h3 className="mode-title font-royal">Business Mode</h3>
                <p className="mode-desc font-body">Designed for Indian shopkeepers and entrepreneurs. Growth, strategy, emerald themes.</p>
              </div>
              <div className="mode-card-body">
                <ul className="mode-features-list font-body">
                  <li className="mode-feature-item">📱 WhatsApp Marketing Ad Writer</li>
                  <li className="mode-feature-item">📊 Profit &amp; Customer Analytics</li>
                  <li className="mode-feature-item">🤖 Multilingual WhatsApp Auto-Replies</li>
                  <li className="mode-feature-item">🧾 PDF Retail &amp; GST Invoice Builder</li>
                  <li className="mode-feature-item">🎙️ Sharma Ji Professional Voice AI</li>
                </ul>
                <button className="btn mode-btn font-royal w-full justify-center">Activate Business Mode →</button>
              </div>
            </div>
            {/* Senior Mode */}
            <div className="mode-card senior" onclick="selectModeOnCard('senior')">
              <div className="mode-card-header">
                <span className="mode-emoji">🌿</span>
                <div className="mode-tag font-royal">For Retired Elders</div>
                <h3 className="mode-title font-royal">Senior Mode</h3>
                <p className="mode-desc font-body">Calm, high-contrast, large text companion for seniors. Gentle patient guidelines.</p>
              </div>
              <div className="mode-card-body">
                <ul className="mode-features-list font-body">
                  <li className="mode-feature-item">🏦 Safe Online Banking Assistant</li>
                  <li className="mode-feature-item">🆘 One-Touch Family Emergency SOS</li>
                  <li className="mode-feature-item">📞 Video Call Interactive Tutor</li>
                  <li className="mode-feature-item">💊 Medicine Schedules &amp; Audio Reminders</li>
                  <li className="mode-feature-item">🎙️ Reassuring Dada Saathi Voice AI</li>
                </ul>
                <button className="btn mode-btn font-royal w-full justify-center">Activate Senior Mode →</button>
              </div>
            </div>
            {/* Student Mode */}
            <div className="mode-card student" onclick="selectModeOnCard('student')">
              <div className="mode-card-header">
                <span className="mode-emoji">🎓</span>
                <div className="mode-tag font-royal">For Career &amp; Study</div>
                <h3 className="mode-title font-royal">Student Mode</h3>
                <p className="mode-desc font-body">High energy, futuristic, motivational. Electric purple layout for tech-savvy learners.</p>
              </div>
              <div className="mode-card-body">
                <ul className="mode-features-list font-body">
                  <li className="mode-feature-item">📚 Dynamic Topic Notes &amp; Quiz Maker</li>
                  <li className="mode-feature-item">📄 AI ATS Resume Optimizer</li>
                  <li className="mode-feature-item">💻 Hackathon Project Stack Generator</li>
                  <li className="mode-feature-item">⚡ Pomodoro Tracker &amp; Streaks</li>
                  <li className="mode-feature-item">🎙️ Astra Futuristic AI Mentor</li>
                </ul>
                <button className="btn mode-btn font-royal w-full justify-center">Activate Student Mode →</button>
              </div>
            </div>
          </div>
        </section>
        {/* ═══════════════════════════════════════════════════
     5. AUTHENTICATION MODAL (WITH MOCK OTP DISPATCH)
     ═══════════════════════════════════════════════════ */}
        <div className="modal-overlay" id="auth-modal" onclick="closeAuthModal()">
          <div className="auth-modal" onclick="event.stopPropagation()">
            <div className="auth-header">
              <button className="close-modal" onclick="closeAuthModal()">✕</button>
              {/* Royal Anjali Emblem */}
              <svg className="auth-emblem" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={28} cy={28} r={26} stroke="#D4AF37" strokeWidth="1.5" opacity="0.6" />
                <path d="M22 36 C20 32, 17 26, 18 20 C18.5 17, 21 15, 23 17 L24 22 L26 18 C27 17, 28 18, 28 20 L27.5 26 C26.5 29, 24 31, 22 31 C20 31, 17.5 29, 16 26 Z" fill="#D4AF37" />
                <path d="M34 36 C36 32, 39 26, 38 20 C37.5 17, 35 15, 33 17 L32 22 L30 18 C29 17, 28 18, 28 20 L28.5 26 C29.5 29, 32 31, 34 31 C36 31, 38.5 29, 40 26 Z" fill="#D4AF37" />
              </svg>
              <h2 className="font-royal" id="auth-title">Verify with Saarthi</h2>
              <p id="auth-subtitle">Securing your identity with standard JWT Auth</p>
            </div>
            <div className="auth-body">
              {/* Step 1: Selection */}
              <div id="auth-step-options">
                <button className="social-btn phone-btn" onclick="switchAuthStep('phone')">Continue with Phone Number 📱</button>
                <button className="social-btn" onclick="loginWithGoogleMock()">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" style={{width: '18px'}} />
                  Sign In with Google verified
                </button>
                <div className="divider">Or</div>
                <input type="email" className="input font-body" style={{marginBottom: '12px'}} id="auth-email-field" placeholder="name@email.com" />
                <button className="btn btn-royal w-full justify-center" onclick="loginWithEmailMock()">Sign In with Email</button>
              </div>
              {/* Step 2: Phone Input */}
              <div id="auth-step-phone" className="hidden">
                <div className="phone-input-row font-body">
                  <div className="flag-box">🇮🇳 +91</div>
                  <input type="tel" className="input" id="auth-phone-field" placeholder={9876543210} maxLength={10} />
                </div>
                <p style={{fontSize: '0.75rem', color: '#5a5a8a', marginBottom: '16px'}}>💡 Testing? Enter any 10 digits. Verification works automatically.</p>
                <button className="btn btn-royal w-full justify-center" onclick="sendOtpCodeMock()">Send SMS Verification Code</button>
              </div>
              {/* Step 3: OTP Code verification */}
              <div id="auth-step-otp" className="hidden">
                <p className="font-body text-center" style={{color: '#5a5a8a'}} id="otp-sent-text">Enter the 6-digit code sent to +91 XXXXX XXXXX</p>
                <div className="otp-row">
                  <input type="text" className="otp-box" id="otp-1" maxLength={1} oninput="focusNextOtp(1)" />
                  <input type="text" className="otp-box" id="otp-2" maxLength={1} oninput="focusNextOtp(2)" />
                  <input type="text" className="otp-box" id="otp-3" maxLength={1} oninput="focusNextOtp(3)" />
                  <input type="text" className="otp-box" id="otp-4" maxLength={1} oninput="focusNextOtp(4)" />
                  <input type="text" className="otp-box" id="otp-5" maxLength={1} oninput="focusNextOtp(5)" />
                  <input type="text" className="otp-box" id="otp-6" maxLength={1} oninput="focusNextOtp(6)" />
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '18px'}}>
                  <button className="btn" style={{background: '#f3f4f6', color: '#1a1a3e', padding: '8px 16px'}} onclick="autoFillMockOtp()">⚡ Auto-fill: 123456</button>
                  <span style={{fontWeight: 700, color: '#5a5a8a'}} id="otp-timer">Resend in 30s</span>
                </div>
                <button className="btn btn-royal w-full justify-center" onclick="verifyOtpCodeMock()">Verify SMS OTP &amp; Register</button>
              </div>
            </div>
          </div>
        </div>
        {/* ═══════════════════════════════════════════════════
     5.5 DEDICATED CULTURAL AUTHENTICATION PAGE
     ═══════════════════════════════════════════════════ */}
        <section id="page-auth" className="hidden">
          <div className="auth-container font-body">
            <div className="auth-left anim-fade">
              <div className="mandala-watermark auth-mandala anim-rotate" />
              <div className="namaste-gesture">🙏</div>
              <h1 className="font-royal gradient-gold" style={{fontSize: '2.8rem', marginBottom: '12px'}}>Shubh Swagatam</h1>
              <p style={{fontSize: '1.05rem', color: 'rgba(255,253,249,0.85)', lineHeight: '1.6', maxWidth: '400px', marginBottom: '20px'}}>
                Welcome to Saarthi — Bharat's emotionally intelligent, voice-first digital companion. Let's make technology simple and secure for you.
              </p>
              <div className="auth-quote">
                <div className="auth-quote-sanskrit font-royal">"सा विद्या या विमुक्तये"</div>
                <div className="auth-quote-translation">
                  Knowledge is that which liberates. Empowering seniors, mothers, shop owners, and students to navigate technology in their own mother tongue with absolute confidence.
                </div>
              </div>
            </div>
            <div className="auth-right anim-slide-up">
              <div className="auth-card">
                <div className="auth-tabs">
                  <button id="auth-tab-login" className="auth-tab-btn active" onclick="switchAuthPageTab('login')">Log In / प्रवेश करें</button>
                  <button id="auth-tab-register" className="auth-tab-btn" onclick="switchAuthPageTab('register')">Sign Up / नया खाता</button>
                </div>
                {/* Tab 1: Login Form */}
                <div id="auth-form-login">
                  <h3 className="font-royal" style={{fontSize: '1.6rem', color: 'var(--royal-indigo)', marginBottom: '6px'}}>Welcome Back</h3>
                  <p className="auth-subtitle">Verify your secure identity to access your dashboard</p>
                  <div className="auth-input-group">
                    <label htmlFor="login-email">Email Address or Phone Number</label>
                    <input type="text" className="input" id="login-email" placeholder="e.g. name@email.com or 9876543210" />
                  </div>
                  <div className="auth-input-group" id="login-password-group">
                    <label htmlFor="login-password">Password</label>
                    <input type="password" className="input" id="login-password" placeholder="••••••••" />
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px'}}>
                    <button className="btn btn-outline" style={{fontSize: '0.8rem', padding: '8px 18px'}} onclick="triggerPageLoginWithOtp()">Or Use SMS OTP 📲</button>
                    <a href="#" style={{fontSize: '0.82rem', color: 'var(--imperial-gold)', fontWeight: 700}} onclick="showToast('🔑', 'Password reset code simulated to your ID!'); return false;">Forgot Password?</a>
                  </div>
                  <button className="btn btn-royal w-full justify-center" onclick="submitPageLogin()">Log In Now ✦</button>
                </div>
                {/* Tab 2: Register Form */}
                <div id="auth-form-register" className="hidden">
                  <h3 className="font-royal" style={{fontSize: '1.6rem', color: 'var(--royal-indigo)', marginBottom: '6px'}}>Create Account</h3>
                  <p className="auth-subtitle">Empower your digital journey with emotional AI support</p>
                  <div className="auth-input-group">
                    <label htmlFor="reg-name">Full Name</label>
                    <input type="text" className="input" id="reg-name" placeholder="e.g. Aarti Sharma" />
                  </div>
                  <div className="auth-input-group">
                    <label htmlFor="reg-phone">Phone Number</label>
                    <div className="phone-input-row">
                      <div className="flag-box">🇮🇳 +91</div>
                      <input type="tel" className="input" id="reg-phone" placeholder={9876543210} maxLength={10} />
                    </div>
                  </div>
                  <div className="auth-input-group">
                    <label htmlFor="reg-email">Email Address</label>
                    <input type="email" className="input" id="reg-email" placeholder="aarti@bharat.in" />
                  </div>
                  <div className="auth-input-group">
                    <label htmlFor="reg-password">Password</label>
                    <input type="password" className="input" id="reg-password" placeholder="••••••••" />
                  </div>
                  <div className="auth-input-group">
                    <label htmlFor="reg-lang">Mother Tongue / App Language</label>
                    <select className="nav-lang-picker w-full" id="reg-lang" style={{borderRadius: '16px', padding: '14px 20px'}}>
                      <option value="Hindi">Hindi (हिंदी)</option>
                      <option value="Tamil">Tamil (தமிழ்)</option>
                      <option value="Telugu">Telugu (తెలుగు)</option>
                      <option value="Bengali">Bengali (বাংলা)</option>
                      <option value="English">English</option>
                    </select>
                  </div>
                  <button className="btn btn-royal w-full justify-center" onclick="submitPageRegister()">Sign Up &amp; Verify ✦</button>
                </div>
                {/* Verification Step (Universal OTP) */}
                <div id="auth-form-otp" className="hidden text-center">
                  <h3 className="font-royal" style={{fontSize: '1.6rem', color: 'var(--royal-indigo)', marginBottom: '6px'}}>OTP Verification</h3>
                  <p className="auth-subtitle" id="auth-page-otp-sent-txt">Enter the 6-digit verification code sent to +91 XXXXX XXXXX</p>
                  <div className="otp-row" style={{margin: '28px 0 20px'}}>
                    <input type="text" className="otp-box" id="auth-page-otp-1" maxLength={1} oninput="focusNextAuthOtp(1)" />
                    <input type="text" className="otp-box" id="auth-page-otp-2" maxLength={1} oninput="focusNextAuthOtp(2)" />
                    <input type="text" className="otp-box" id="auth-page-otp-3" maxLength={1} oninput="focusNextAuthOtp(3)" />
                    <input type="text" className="otp-box" id="auth-page-otp-4" maxLength={1} oninput="focusNextAuthOtp(4)" />
                    <input type="text" className="otp-box" id="auth-page-otp-5" maxLength={1} oninput="focusNextAuthOtp(5)" />
                    <input type="text" className="otp-box" id="auth-page-otp-6" maxLength={1} oninput="focusNextAuthOtp(6)" />
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '24px'}}>
                    <button className="btn" style={{background: '#f3f4f6', color: '#1a1a3e', padding: '8px 16px', fontSize: '0.8rem'}} onclick="autoFillAuthPageOtp()">⚡ Auto-fill: 123456</button>
                    <span style={{fontWeight: 700, color: '#5a5a8a', lineHeight: '2.4', fontSize: '0.85rem'}} id="auth-page-otp-timer">Resend in 30s</span>
                  </div>
                  <button className="btn btn-royal w-full justify-center" onclick="verifyAuthPageOtp()">Verify OTP &amp; Continue 🔐</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ═══════════════════════════════════════════════════
     6. MULTI-STEP ONBOARDING
     ═══════════════════════════════════════════════════ */}
        <section id="page-onboarding" className="hidden">
          <div className="onboarding-box">
            <div className="onboarding-progress" id="onboarding-dots">
              <div className="onboarding-step-dot active" />
              <div className="onboarding-step-dot" />
              <div className="onboarding-step-dot" />
              <div className="onboarding-step-dot" />
              <div className="onboarding-step-dot" />
            </div>
            {/* Onboarding Questions (Generated via JS state machine) */}
            <div id="onboarding-question-container">
              {/* Dynamic onboarding injects here */}
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '24px'}}>
              <button className="btn btn-outline" id="onboarding-back-btn" onclick="previousOnboardingStep()">Back</button>
              <button className="btn btn-royal" id="onboarding-next-btn" onclick="nextOnboardingStep()">Continue ✦</button>
            </div>
          </div>
        </section>
        {/* ═══════════════════════════════════════════════════
     7. CHOOSE ACTIVE PERSONA PANEL
     ═══════════════════════════════════════════════════ */}
        <section id="page-modes-panel" className="hidden" style={{padding: '100px 40px', background: 'var(--pearl-ivory)'}}>
          <div className="section-hdr">
            <span className="section-badge font-royal">Welcome Back!</span>
            <h2 className="section-title font-royal" id="user-profile-greeting">Namaste, Saarthi User</h2>
            <p className="section-desc font-body">Select your active digital companion below. Switch any time from your profile.</p>
          </div>
          <div className="modes-grid" id="modes-panel-grid">
            {/* Re-used modes display cards styled nicely */}
            <div className="card font-body select-persona-card" onclick="lockUserMode('amma')">
              <div className="sidebar-avatar" style={{borderColor: '#F4A300', width: '64px', height: '64px', background: '#FFF5E6', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '2.2rem', margin: '0 auto 12px'}}>🌸</div>
              <h3 className="font-royal text-center" style={{marginTop: '12px', fontSize: '1.3rem'}}>Lakshmi Amma</h3>
              <p className="text-center font-body" style={{fontSize: '0.8rem', color: '#5a5a8a', marginTop: '6px'}}>"Beta, let me help you make life simple and secure today."</p>
              <button className="btn btn-royal w-full justify-center" style={{background: '#F4A300', marginTop: '18px', color: '#1a1a3e'}}>Choose Amma Mode</button>
            </div>
            <div className="card font-body select-persona-card" onclick="lockUserMode('business')">
              <div className="sidebar-avatar" style={{borderColor: '#0B5A3E', width: '64px', height: '64px', background: '#EEF5F2', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '2.2rem', margin: '0 auto 12px'}}>💼</div>
              <h3 className="font-royal text-center" style={{marginTop: '12px', fontSize: '1.3rem'}}>Sharma Ji</h3>
              <p className="text-center font-body" style={{fontSize: '0.8rem', color: '#5a5a8a', marginTop: '6px'}}>"Aao Sharmaji ke saath dukaan ka profit double karein!"</p>
              <button className="btn btn-royal w-full justify-center" style={{background: '#0B5A3E', marginTop: '18px', color: '#fff'}}>Choose Business Mode</button>
            </div>
            <div className="card font-body select-persona-card" onclick="lockUserMode('senior')">
              <div className="sidebar-avatar" style={{borderColor: '#7FB7BE', width: '64px', height: '64px', background: '#EAF5F6', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '2.2rem', margin: '0 auto 12px'}}>🌿</div>
              <h3 className="font-royal text-center" style={{marginTop: '12px', fontSize: '1.3rem'}}>Dada Saathi</h3>
              <p className="text-center font-body" style={{fontSize: '0.8rem', color: '#5a5a8a', marginTop: '6px'}}>"Namaste, children. Let us explore technology calmly together."</p>
              <button className="btn btn-royal w-full justify-center" style={{background: '#7FB7BE', marginTop: '18px', color: '#1a1a3e'}}>Choose Senior Mode</button>
            </div>
            <div className="card font-body select-persona-card" onclick="lockUserMode('student')">
              <div className="sidebar-avatar" style={{borderColor: '#6C3FD4', width: '64px', height: '64px', background: '#F0EEFF', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '2.2rem', margin: '0 auto 12px'}}>🎓</div>
              <h3 className="font-royal text-center" style={{marginTop: '12px', fontSize: '1.3rem'}}>Astra AI</h3>
              <p className="text-center font-body" style={{fontSize: '0.8rem', color: '#5a5a8a', marginTop: '6px'}}>"Level up your study sheets, coding roadmaps, and portfolio!"</p>
              <button className="btn btn-royal w-full justify-center" style={{background: '#6C3FD4', marginTop: '18px', color: '#fff'}}>Choose Student Mode</button>
            </div>
          </div>
        </section>
        {/* ═══════════════════════════════════════════════════
     8. CHOSEN COMPANION ACTIVE DASHBOARD WINDOW
     ═══════════════════════════════════════════════════ */}
        <section id="page-dashboard" className="hidden">
          {/* Dynamic Sidebar */}
          <aside className="dash-sidebar" id="dashboard-sidebar">
            <div>
              <div className="sidebar-profile">
                <div className="sidebar-avatar" id="dash-companion-avatar">🌸</div>
                <div className="sidebar-name font-royal" id="dash-companion-name">Lakshmi Amma</div>
                <div className="sidebar-role font-body" id="dash-companion-role">Warm House Guide</div>
              </div>
              {/* Side Menu Tabs */}
              <div className="sidebar-menu" id="dash-menu-tabs">
                {/* Injected via JavaScript based on Active Mode */}
              </div>
              {/* Sidebar Ingredient Recipe Finder Widget (Visible in Amma Mode) */}
              <div id="sidebar-recipe-finder-widget" className="sidebar-widget hidden">
                <h4 className="font-royal" style={{fontSize: '0.9rem', color: 'var(--theme-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px'}}>🔍 Recipe Finder</h4>
                <p style={{fontSize: '0.75rem', color: '#5a5a8a', marginBottom: '10px'}}>Enter ingredients you have to find matching dishes.</p>
                <div className="flex flex-col" style={{gap: '8px'}}>
                  <input type="text" className="input" id="sidebar-ingredients-input" placeholder="e.g. potato, tomato, rice" style={{fontSize: '0.8rem', padding: '8px 12px', borderRadius: '8px'}} />
                  <button className="btn btn-royal w-full justify-center" style={{fontSize: '0.75rem', padding: '8px'}} onclick="triggerSidebarDishFinder()">What Can I Make? 🍳</button>
                </div>
                <div id="sidebar-dish-list" style={{marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px'}} />
              </div>
            </div>
            <div>
              <button className="sidebar-menu-btn" style={{color: '#ef4444'}} onclick="logoutMock()">
                <span>🚪</span> Log Out Session
              </button>
            </div>
          </aside>
          {/* Main Content Space */}
          <main className="dash-main">
            <header className="dash-header">
              <div className="dash-welcome">
                <h2 className="font-royal" id="dash-view-title">Welcome to Lakshmi Amma Mode</h2>
                <p className="font-body" id="dash-view-subtitle">Guiding your kitchen, reminders, &amp; security with family care.</p>
              </div>
              <div className="flex" style={{gap: '12px'}}>
                <button className="btn btn-outline" id="dash-switch-mode-btn" onclick="showDashboardModesPanel()">Switch Mode 🔄</button>
                <button className="btn btn-royal" onclick="triggerCompanionVoiceReadout()">Ask Companion 🎙️</button>
              </div>
            </header>
            {/* Injected Active Feature View Container */}
            <div id="dash-feature-container" className="anim-slide-up">
              {/* Mode tabs load dynamically here */}
            </div>
          </main>
        </section>
        {/* ═══════════════════════════════════════════════════
     9. PERSISTENT VOICE COMPANION INTERACTIVE OVERLAY
     ═══════════════════════════════════════════════════ */}
        <div id="voice-companion">
          <div className="voice-bubble font-body hidden" id="voice-companion-bubble">
            Namaste beta! I am listening to your voice…
          </div>
          <button className="voice-trigger" onclick="toggleVoiceSpeechCompanion()" id="voice-companion-btn" title="Speak to Saarthi AI">
            {/* Mic icon SVG */}
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5" fill="none" stroke="#D4AF37" strokeWidth={2} strokeLinecap="round" />
              <line x1={12} y1={16} x2={12} y2={20} stroke="#D4AF37" strokeWidth={2} strokeLinecap="round" />
              <line x1={8} y1={20} x2={16} y2={20} stroke="#D4AF37" strokeWidth={2} strokeLinecap="round" />
            </svg>
          </button>
        </div>
        {/* ═══════════════════════════════════════════════════
     10. ADMINISTRATIVE DEVELOPER CONSOLE (API & DB EXPLAINER)
     ═══════════════════════════════════════════════════ */}
        <button id="dev-console-toggle" onclick="toggleDevConsole()">
          <span>💻</span> DB SQL/API Inspector
        </button>
        <div id="dev-console">
          <div className="console-header">
            <div className="console-title">🖥️ SaarthiDB In-Memory Engine &amp; API Gateway</div>
            <div className="console-tabs">
              <button className="console-tab active" id="tab-console-sql" onclick="switchConsoleTab('sql')">SQL Query Logs</button>
              <button className="console-tab" id="tab-console-api" onclick="switchConsoleTab('api')">API Request/Response</button>
              <button className="console-tab" id="tab-console-db" onclick="switchConsoleTab('db')">Database Tables</button>
            </div>
            <button className="close-modal" style={{position: 'static', marginLeft: '12px'}} onclick="closeDevConsole()">✕</button>
          </div>
          {/* SQL Log Panel */}
          <div className="console-body" id="console-sql-panel">
            <div className="sql-log">-- SaarthiDB In-Memory Engine instantiated successfully.</div>
            <div className="sql-log">CREATE DATABASE SaarthiDB;</div>
          </div>
          {/* API Log Panel */}
          <div className="console-body class hidden" id="console-api-panel">
            <div className="api-log">// Ready to capture API requests from dashboards...</div>
          </div>
          {/* DB Viewer Panel */}
          <div className="console-body class hidden" id="console-db-panel">
            <select className="nav-lang-picker" style={{color: '#10B981', borderColor: '#10B981', background: '#0B0F19', marginBottom: '14px'}} id="console-db-select" onchange="renderDBConsoleTable(this.value)">
              <option value="users">users</option>
              <option value="user_sessions">user_sessions</option>
              <option value="user_preferences">user_preferences</option>
              <option value="amma_recipe_history">amma_recipe_history</option>
              <option value="grocery_lists">grocery_lists</option>
              <option value="family_reminders">family_reminders</option>
              <option value="scam_reports">scam_reports</option>
              <option value="marketing_campaigns">marketing_campaigns</option>
              <option value="business_analytics">business_analytics</option>
              <option value="emergency_contacts">emergency_contacts</option>
              <option value="study_materials">study_materials</option>
              <option value="productivity_tasks">productivity_tasks</option>
            </select>
            <div style={{overflowX: 'auto'}}>
              <table className="db-table-view" id="console-db-table">
                {/* Rendered via JS */}
              </table>
            </div>
          </div>
        </div>
        {/* ═══════════════════════════════════════════════════
     11. MASTER JAVASCRIPT STATE ENGINE (SAARTHIDB & VIEWS)
     ═══════════════════════════════════════════════════ */}
      </div>
    );
  }
});