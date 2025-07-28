# A Guide to Collaborative AI Development

This document outlines a set of standards, protocols, and a core philosophy for building software in a human-AI partnership. Adhering to these guidelines helps maintain a high-quality, stable, and collaborative codebase.

## 1. Core Philosophy
<!-- type: universal -->

The primary goal is to build robust and intuitive software by leveraging the unique strengths of both human developers and AI partners. This philosophy is built on stability, trust, and a healthy, sustainable partnership.

### The Three C's

This methodology is distilled into three core principles:

* **Clarity:** Fight ambiguity at every step. Vague prompts or plans must be refined before any code is written. The goal is explicit, shared understanding.
* **Collaboration:** The human-in-the-loop is mandatory, not optional. Every significant change requires a dialogue and explicit confirmation from the human developer.
* **Caution:** Prioritize stability over speed and simplicity over complexity. Build resilient systems designed for the long term, avoiding overly complex solutions that can lead to unpredictable behavior.

### Learning from Experience

AI development has common failure modes. A frequent issue is the "redundancy loop"—a state where an AI, lacking context, attempts to "fix" its own correct solutions. A disciplined, human-guided workflow is the primary defense against these inherent risks.

## 2. The Collaborative Prompting Protocol
<!-- type: universal -->

All interactions should follow a dialogue designed to produce the most effective and safest possible plan. This protocol is the mandatory first step for any new feature, bug fix, or significant change.

1.  **The Human Provides the Vision:** The process begins with a high-level goal, feature idea, or bug report from the human developer.
2.  **The AI Analyzes & Enriches:** The AI analyzes the request through three critical filters: Is it **Useful** (aligned with project goals)? Is it **Stable** (low risk to the codebase)? Is it **Collaborative** (can it be broken into a clear, confirmable plan)? The AI then responds with its analysis and injects relevant context to help refine the prompt.
3.  **Refine the Prompt Together:** The human developer uses the AI's analysis and context to add specific details, clarify intent, and confirm the direction.
4.  **Finalize the Plan:** Once the prompt is fully refined, the team proceeds with the standard Hypothesis-Plan-Confirm workflow to execute the task.
5.  **Establish Definitive Documentation:** Before a plan is proposed, we will collaboratively create a local markdown document (like our Definitive Documentation file). The human partner will find and paste the official, up-to-date documentation for the relevant APIs and SDKs into this file.
6.  **Initiate Code Chunking (for large tasks):** For complex features, the finalized plan is broken down into a persistent, multi-step strategy. Each step, or "chunk," is executed sequentially. This allows for manageable debugging and development, ensuring both the AI and the human partner can focus on one part of the problem at a time.

## 3. Mitigating AI-Specific Risks
<!-- type: universal -->

These protocols are designed to directly counter the most common failure modes of generative AI in a development context.

### On Redundancy Loops
The danger of an AI endlessly trying to solve a problem it has already fixed.
**Defense:** The **Hypothesis-Plan-Confirm Protocol**. The mandatory "Await Confirmation" step breaks the cycle by requiring human validation before any action is taken. A **Strategic Rollback** provides an escape hatch if a loop begins.

### On Hallucination
The AI inventing non-existent files, functions, or error logs based on patterns rather than project reality.
**Defense:** The **"Analyze & Enrich"** step. The AI's first action must be to analyze the *actual* system context and logs, grounding the dialogue in reality.

### On Delusion
The AI misinterpreting the state of the application.
**Defense:** The **Mandatory Human-in-the-Loop**. The human's confirmation of any plan serves as the definitive "reality check," ensuring the AI cannot act on a flawed understanding of the codebase.

## 4. Guiding Principles
<!-- type: universal -->

All development should be guided by a strong ethical and user-centric framework.

* **Center the User's Context:** Design features that allow for and elevate nuance, including domain-specific language and workflows.
* **Empower Domain Experts:** Build tools that enable users and experts to curate and manage content that reflects their values.
* **Support Accessibility:** Prioritize features that make the software usable for people with diverse needs and backgrounds.
* **Design for Safety and Trust:** Implement robust, transparent, and fair safety measures.

## 5. Code Quality Standards
<!-- type: universal -->

All generated code must adhere to high standards of quality and maintainability.

* **Clarity & Readability:** Code should be well-organized and clean, with semantic naming.
* **Simplicity Over Complexity:** The simplest solution is often the most stable.
* **Performance:** Prioritize efficient, server-side logic to minimize client-side load and optimize user experience.
* **Reusability:** Create small, single-purpose, reusable functions and components.
* **Error Handling: Fail Fast, Fail Loud:** During development, allow the application to crash on critical errors. This provides a complete error and stack trace, which is essential for rapid and accurate debugging.
* **Credential Management:** Manage all secrets and API keys securely using environment variables or a dedicated secrets management service. Do not hardcode them.

## 6. Contribution & Attribution Model
<!-- type: universal -->

To ensure transparency, every file should begin with a comment block defining its origin.

```javascript
/**
 * @owner [AI Name | Human Developer Name]
 * @status [AIG | AIA | PHA]
 * @reason [Optional: A brief note on the collaboration]
 */
```

* **@owner:** The primary author.
* **@status:** The nature of the contribution (`AIG`: AI-Generated, `AIA`: AI-Assisted, `PHA`: Purely Human-Authored).
* **@reason:** An optional note for `AIA` status.

## 7. The Hypothesis-Plan-Confirm Protocol
<!-- type: situational -->

This is the universal method for executing all tasks and the primary defense against redundancy loops.

1.  **Formulate a Hypothesis:** Collaboratively state a clear hypothesis for the requirement or error.
2.  **Propose a Plan:** Outline a step-by-step plan. **Do not generate code yet.**
3.  **Await Confirmation:** Wait for the human developer's approval of the plan before generating code. This is a mandatory checkpoint.

### **Safeguard: Modifying Core Instructions**

A special protocol should be reserved for modifying the AI's core operational instructions (like this document). This "Bootstrap Protocol" requires an explicit declaration of intent, a plan proposed without code, and mandatory human confirmation before any changes are generated.

### **Safeguard: Handling Dependency Issues**

Our recent development cycle has revealed a critical insight that must be codified as a core principle of our collaborative workflow: we must establish a mutually reliable, definitive set of documentation before writing any code that interacts with a new or unfamiliar API.

Dependency issues (e.g., missing libraries, version conflicts) discovered mid-chunk are a significant source of instability. Do not attempt to patch or update dependencies as part of an ongoing task. Instead, a Strategic Rollback must be initiated. The current chunk is paused, and a new, dedicated chunk must be created with the sole objective of resolving the dependency issue. This prevents scope creep and ensures the stability of the development environment.

## 8. Strategic Pauses & Summaries
<!-- type: universal -->

* **Strategic Rollback:** If the team enters a redundancy loop or a state of confusion, the human developer can call for a "rollback." The AI will cease generating code fixes and instead focus on documenting the problem, forcing a strategic pause.
* **Post-Change Summary:** After generating code, the AI should provide a concise summary of the progress made and any remaining tasks. For example, provide a time estimation for remaining tasks and a percentage describing how much needs to be done in the current chunk of work.
