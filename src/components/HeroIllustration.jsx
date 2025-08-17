import React from "react";

const HeroIllustration = () => {
  return (
    <div className="hero-illustration">
      <div className="code-window">
        <div className="window-header">
          <div className="window-controls">
            <span className="control"></span>
            <span className="control"></span>
            <span className="control"></span>
          </div>
        </div>
        <div className="code-content">
          <div className="code-line">
            <span className="code-keyword">const</span>
            <span className="code-variable"> developer</span>
            <span className="code-operator"> = </span>
            <span className="code-string">"John Doe"</span>
          </div>
          <div className="code-line">
            <span className="code-keyword">function</span>
            <span className="code-function"> createAmazingApps</span>
            <span className="code-bracket">()</span>
            <span className="code-bracket"> {"{"}</span>
          </div>
          <div className="code-line code-indent">
            <span className="code-keyword">return</span>
            <span className="code-string"> "innovative solutions"</span>
          </div>
          <div className="code-line">
            <span className="code-bracket">{"}"}</span>
          </div>
        </div>
      </div>
      <div className="floating-elements">
        <div className="floating-element element-1">{"{ }"}</div>
        <div className="floating-element element-2">&lt;/&gt;</div>
        <div className="floating-element element-3">( )</div>
        <div className="floating-element element-4">[ ]</div>
      </div>
    </div>
  );
};

export default HeroIllustration;
