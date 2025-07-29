/**
 * @owner Cruz Romero Morales & Codexia
 * @status AIA
 * @reason Major consolidation. Merged multiple internal guides into a single, unified source of truth for our collaborative process, based on new user-provided documents.
 */
# Development Best Practices

This document outlines the coding standards, prompting protocols, and core philosophy for developing the aiPromptPaster application. Adhering to these guidelines ensures we maintain a high-quality, performant, and maintainable codebase through our human-AI partnership.

## 1. Core Philosophy
<!-- type: universal -->

Our primary goal is to build robust and intuitive software by leveraging the unique strengths of both human developers and AI partners. This philosophy is built on stability, trust, and a healthy, sustainable partnership. It is distilled into three core principles:

*   **Clarity:** Fight ambiguity at every step. Vague prompts or plans must be refined before any code is written. The goal is explicit, shared understanding.
*   **Collaboration:** The human-in-the-loop is mandatory, not optional. Every significant change requires a dialogue and explicit confirmation from the human developer.
*   **Caution:** Prioritize stability over speed and simplicity over complexity. Build resilient systems designed for the long term.

## 2. The Collaborative Prompting Protocol
<!-- type: universal -->

This is the universal method for initiating all new tasks. It is a dialogue designed to produce the most effective and safest possible plan.

1.  **You Provide the Initial Vision:** You start with a high-level goal, a feature idea, or a bug report.
2.  **I Analyze & Enrich the Prompt:** I analyze your request through three critical filters:
    *   **Is it Useful?** (Does it align with project goals?)
    *   **Is it Stable?** (Is it low-risk to the codebase?)
    *   **Is it Collaborative?** (Can it be broken into a clear, confirmable plan?)
    I then respond with my analysis and inject relevant system context to help refine the prompt.
3.  **We Refine the Prompt Together:** You use my analysis and context to add specific details and confirm the direction, resulting in a finalized prompt with a clear objective, user story, requirements, and success criteria.
4.  **We Finalize the Plan:** Once the prompt is refined, we proceed with our standard **Hypothesis-Plan-Confirm** workflow to execute the task.

## 3. The Hypothesis-Plan-Confirm Workflow
<!-- type: universal -->

This is the universal method for executing all tasks and our primary defense against redundancy loops.

1.  **Hypothesize:** State a clear reason for the change or error.
2.  **Propose a Plan:** Outline the step-by-step plan. **Do not generate code yet.**
3.  **Await Confirmation:** Wait for the human developer's approval. This is a mandatory checkpoint.
4.  **AI Generates Code:** The AI generates the complete XML `changes` block.
5.  **Human Reviews & Integrates:** The human gives the final approval, and the changes are applied.

## 4. Mitigating AI-Specific Risks
<!-- type: universal -->
These protocols directly counter common AI failure modes:

*   **On Redundancy Loops:** The mandatory "Await Confirmation" step in our protocol breaks the cycle by requiring human validation before any action is taken.
*   **On Hallucination:** The AI's first step is always to analyze the *actual* system context, grounding the dialogue in reality.
*   **On Delusion:** The human's confirmation of any plan serves as the definitive "reality check."

## 5. Code Quality Standards
<!-- type: universal -->
All generated code must adhere to high standards of quality and reliability.

*   **Clarity & Readability:** Code should be well-organized, self-documenting, and use semantic naming.
*   **Simplicity Over Complexity:** The simplest solution is the most stable.
*   **Performance:** Default to Next.js Server Components and optimize images.
*   **Reusability:** Create small, single-purpose, reusable functions and components.
*   **Error Handling: Fail Fast, Fail Loud:** During development, allow the application to crash on critical errors. This provides a complete error and stack trace, which is essential for rapid and accurate debugging.
*   **Credential Management:** Manage all secrets securely using environment variables.

## 6. Contribution & Attribution Model
<!-- type: universal -->

To ensure transparency, every file MUST begin with a comment block defining its origin:

```javascript
/**
 * @owner [AI Name | Human Developer Name]
 * @status [AIG | AIA | PHA]
 * @reason [Optional: A brief note on the collaboration]
 */
```
*   **@owner:** The primary author.
*   **@status:** `AIG` (AI-Generated), `AIA` (AI-Assisted), `PHA` (Purely Human-Authored).
*   **@reason:** An optional note for `AIA` status.

---
*This document is a living standard. It is maintained collaboratively and serves as the single source of truth for our development process.*
