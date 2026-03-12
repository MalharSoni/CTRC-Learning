# Welcome to CTRC Learning

Welcome to the **Caution Tape Robotics Club Learning Hub** — your hands-on guide to building, coding, and competing with VEX V5 robots.

Whether you're picking up a wrench for the first time or already know your way around a drivetrain, this site takes you from zero to competition-ready. Every module follows our **Learn It → Build It → Prove It** philosophy — learn the concept, build it on your robot, then hit the field and prove it works.

---

## I am a...

<div class="user-type-selector">
  <div class="grid cards" markdown>

-   :material-account-school:{ .lg .middle } **Student**

    ---

    I'm here to learn robotics, build robots, and compete. Show me hands-on lessons and projects.

    <button class="select-student" onclick="selectUserType('student')">Select</button>

-   :material-human-male-board:{ .lg .middle } **Educator**

    ---

    I'm teaching robotics. Show me lesson plans, pacing guides, and assessment rubrics.

    <button class="select-educator" onclick="selectUserType('educator')">Select</button>

-   :material-account-wrench:{ .lg .middle } **Mentor**

    ---

    I'm coaching a team. Show me advanced resources, design references, and competition prep.

    <button class="select-mentor" onclick="selectUserType('mentor')">Select</button>

  </div>
</div>

---

## Learning Paths

<div class="learning-paths">

### :material-school: V5 Foundation Program
**Zero to Competition-Ready** • 5 Units • ~60 hours

A structured, hands-on curriculum designed to take you from zero robotics experience to competition-ready builder and programmer.

<details>
<summary><strong>View Full Curriculum</strong> (5 units, 20 modules, 12 challenges)</summary>

**Unit 1: Drivetrain Mastery** (4 modules, 2 challenges)
- 1.1 Safety & Common Parts
- 1.2 Structure & Bracing
- 1.3 Gear Ratios & Friction
- 1.4 Drivetrain Build
- 🏆 Free Spin Challenge
- 🏆 Obstacle Course Time Trial

**Unit 2: Programming (LemLib)** (5 modules, 2 challenges)
- 2.1 VSCode & LemLib Setup
- 2.2 Drive Config & Controls
- 2.3 Motorized Shovel
- 2.4 PID Tuning
- 2.5 Autonomous Routing
- 🏆 Pickup Relay
- 🏆 Auton Showdown

**Unit 3: Onshape CAD** (5 modules, 3 challenges)
- 3.1 Interface & Sketching
- 3.2 3D Modeling & Printing
- 3.3 Advanced Features
- 3.4 VEX Parts & Mates
- 3.5 Render & Present
- 🎨 3D Print Keychain
- 🏆 CAD Battle
- 🏆 CAD vs Real

**Unit 4: Mechanisms** (3 modules, 3 challenges)
- 4.1 Wedge & Pushing
- 4.2 Intakes
- 4.3 Linear Slider
- 🏆 Sumo Bots
- 🏆 Sack Attack
- 🏆 Ball Sweep

**Unit 5: Competition Ready** (3 modules, 1 challenge)
- 5.1 Robot Integration
- 5.2 Autonomous Strategy
- 5.3 Match Strategy
- 🏆 2v2 Matches

</details>

[:octicons-arrow-right-24: Start Foundation Program](foundation/index.md){ .md-button .md-button--primary }

---

### :material-rocket-launch: Projects
**Beyond V5** • Multiple tracks • Self-paced

Applied project tracks that go beyond VEX competition robots.

<details>
<summary><strong>View Projects</strong></summary>

**BattleBots: 250g Combat Robots**
- Rules & Overview
- Robot Archetypes (Spinners, Flippers, Wedges)
- Weapon Design
- Drivetrain (N20 Motors)
- CAD Your Bot
- 3D Printing Guide
- Malenki Nano Setup
- Assembly & Wiring
- Testing & Safety

</details>

[:octicons-arrow-right-24: Explore Projects](projects/index.md){ .md-button }

---

### :material-book-open-variant: Design Handbook
**Quick Reference** • Topic-based • Always accessible

Reference guide covering VEX design principles organized by domain.

<details>
<summary><strong>View Handbook Sections</strong></summary>

**Structure**
- C-Channel applications
- Bracing patterns
- Joint reinforcement

**Power Transmission**
- Gear ratios
- Chain & sprockets
- Belt drives
- Friction management

**Mechanisms**
- Intakes (roller, flex wheel, conveyor)
- Lifts (linear, cascade, scissor)
- Claws and grippers
- Catapults and flywheels

</details>

[:octicons-arrow-right-24: Browse Handbook](design-handbook/index.md){ .md-button }

---

### :material-cog: Mechanism Examples
**Real Robot Inspiration** • Curated gallery • Competition-proven

Study how top VEX teams build intakes, lifts, launchers, and more.

[:octicons-arrow-right-24: View Examples](mechanism-examples/index.md){ .md-button }

---

### :material-link-variant: Resources
**External Links** • Tools & calculators • Community resources

Onshape tutorials, VEX forums, supplier catalogs, design calculators, and more.

[:octicons-arrow-right-24: Find Resources](resources/index.md){ .md-button }

</div>

---

## Quick Start Paths

!!! tip "New to Robotics?"
    **Recommended path:** Start with [Unit 1: Drivetrain Mastery](foundation/unit1/index.md). Learn your parts, build a drivetrain, and complete the time trial challenge.

!!! info "Have VEX Experience?"
    **Jump ahead:**

    - [Unit 3: Onshape CAD](foundation/unit3/index.md) — Design robot components in 3D
    - [Unit 4: Mechanisms](foundation/unit4/index.md) — Build intakes, wedges, and linear sliders
    - [Design Handbook](design-handbook/index.md) — Quick reference for design patterns

---

## About CTRC

The Caution Tape Robotics Club is dedicated to helping students learn robotics through building, coding, and competing. This learning site is a community resource — built by mentors and students, for students.

!!! note "This Site is a Living Document"
    Content is continuously updated and improved. If you find errors or have suggestions, check out the [Contribution Guide](contribution/index.md).

<script>
function selectUserType(type) {
  // Store user preference
  localStorage.setItem('ctrc-user-type', type);

  // Show confirmation
  const typeNames = {
    'student': 'Student',
    'educator': 'Educator',
    'mentor': 'Mentor'
  };

  alert(`✓ View set to ${typeNames[type]}. Content will be organized for your role.`);

  // In future: Could redirect to role-specific landing page
  // window.location.href = `/${type}-dashboard.html`;
}

// Load user preference on page load
window.addEventListener('load', function() {
  const userType = localStorage.getItem('ctrc-user-type');
  if (userType) {
    document.body.classList.add(`user-type-${userType}`);
  }
});
</script>

<style>
.user-type-selector {
  margin: 2rem 0;
}

.user-type-selector button {
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background: var(--md-primary-fg-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: opacity 0.15s;
}

.user-type-selector button:hover {
  opacity: 0.88;
}

.learning-paths {
  margin-top: 2rem;
}

.learning-paths > div {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid var(--md-default-fg-color--lightest);
  border-radius: 8px;
}

.learning-paths details {
  margin: 1rem 0;
}

.learning-paths summary {
  cursor: pointer;
  color: var(--md-primary-fg-color);
  font-weight: 500;
  padding: 0.5rem 0;
  user-select: none;
}

.learning-paths summary:hover {
  opacity: 0.8;
}

.learning-paths details[open] summary {
  margin-bottom: 1rem;
}

.learning-paths details ul {
  margin-left: 2rem;
}
</style>
