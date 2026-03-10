# Module 2.1: VSCode & LemLib Setup

Before you write a single line of robot code, you need the right tools installed and working. This module walks you through setting up Visual Studio Code, the PROS extension, and creating your first LemLib project.

---

## Step 1: Install Visual Studio Code

VSCode is a free, professional code editor made by Microsoft. It's what most software developers use, and it's what we use for VEX programming.

### Download and Install

1. Go to [https://code.visualstudio.com](https://code.visualstudio.com)
2. Download the installer for your operating system (Windows, Mac, or Linux)
3. Run the installer with default settings
4. Launch VSCode when installation completes

!!! tip "Accept All Defaults"
    During installation, the default options are fine. On Windows, check the box for "Add to PATH" if it appears — this lets you open VSCode from the terminal.

---

## Step 2: Install the PROS Extension

PROS (Purdue Robotics Operating System) is the development environment for V5 programming. The VSCode extension integrates PROS directly into your editor.

### Installation

1. Open VSCode
2. Click the **Extensions** icon in the left sidebar (or press `Ctrl+Shift+X`)
3. Search for **"PROS"**
4. Find the extension by **Purdue ACM SIGBots** and click **Install**
5. Wait for installation to complete — this may take a few minutes as it downloads the PROS toolchain

!!! example "🖥️ Screenshot Needed"
    VSCode Extensions sidebar (Ctrl+Shift+X) with search bar visible

!!! example "🖥️ Screenshot Needed"
    PROS extension in VSCode marketplace by Purdue ACM SIGBots, Install button visible

### Verify Installation

1. Open the **Command Palette** (`Ctrl+Shift+P` on Windows, `Cmd+Shift+P` on Mac)
2. Type `PROS` — you should see several PROS commands appear
3. If you see commands like `PROS: New Project`, the installation was successful

!!! example "🖥️ Screenshot Needed"
    VSCode with PROS icon visible in the left sidebar activity bar

!!! example "🖥️ Screenshot Needed"
    Command Palette (Ctrl+Shift+P) with 'PROS' typed, showing available commands

!!! warning "Troubleshooting"
    If PROS commands don't appear:

    - Restart VSCode completely (close and reopen)
    - Check your internet connection — the toolchain needs to download
    - On Windows, try running VSCode as Administrator for the first install
    - Check the PROS extension output panel for error messages

---

## Step 3: Create a LemLib Project

LemLib is installed as a template on top of a PROS project.

### Option A: Use the LemLib Template (Recommended)

1. Open a terminal in VSCode (`Ctrl+`` ` or `Terminal → New Terminal`)
2. Navigate to the folder where you want your project
3. Run the PROS project creation command:

```bash
pros c n my-robot v5 --template lemlib
```

If that doesn't work (template not cached), use **Option B**.

### Option B: Create PROS Project + Add LemLib

1. Open the Command Palette (`Ctrl+Shift+P`)
2. Run `PROS: New Project`
3. Select a folder location for your project
4. Choose **V5** as the target platform
5. Accept the latest kernel version

!!! example "🖥️ Screenshot Needed"
    PROS New Project dialog showing V5 platform selection

6. Once the project is created, add LemLib by running in the terminal:

```bash
pros c fetch lemlib
pros c apply lemlib
```

### Option C: Clone from GitHub

1. Go to the LemLib documentation site for the latest template link
2. Clone or download the template repository
3. Open the folder in VSCode

---

## Step 4: Understand the Project Structure

Once your project is created, you'll see this file structure:

```
my-robot/
├── include/
│   ├── api.h              ← PROS API header
│   ├── lemlib/             ← LemLib headers
│   │   ├── api.hpp         ← Main LemLib include
│   │   └── ...
│   ├── main.h             ← Your main header (includes everything)
│   └── pros/              ← PROS system headers
├── src/
│   └── main.cpp           ← YOUR CODE GOES HERE
├── Makefile               ← Build configuration
└── project.pros           ← PROS project metadata
```

The only file you'll edit for now is **`src/main.cpp`**. This is where all your robot code lives.

!!! example "🖥️ Screenshot Needed"
    VSCode file explorer: include/, src/main.cpp, Makefile, project.pros with lemlib/ expanded

### The Structure of main.cpp

```cpp
#include "main.h"

// Runs when the program starts (before competition control)
void initialize() {
    // Setup code: calibrate sensors, start tasks
}

// Runs during the autonomous period of a match
void autonomous() {
    // Autonomous driving code
}

// Runs during the driver control period of a match
void opcontrol() {
    // Driver control code — runs in a loop
    while (true) {
        // Read controller, move motors
        pros::delay(25); // Don't hog CPU — always delay in loops
    }
}

// Other functions: disabled(), competition_initialize()
// (you won't need these yet)
```

!!! example "🖥️ Screenshot Needed"
    main.cpp with syntax highlighting showing initialize(), autonomous(), opcontrol() functions

!!! info "The Three Core Functions"
    | Function | When It Runs | What To Put Here |
    |----------|-------------|-----------------|
    | `initialize()` | Once, at program start | Sensor calibration, LemLib setup |
    | `autonomous()` | During 15-second auton period | Automated driving routines |
    | `opcontrol()` | During 1:45 driver control period | Controller input handling |

---

## Step 5: Connect to the V5 Brain

### USB Connection

1. Connect your computer to the V5 Brain using a USB-A to USB-C cable
2. Power on the V5 Brain
3. VSCode should detect the Brain automatically through PROS

!!! example "📷 Photo Needed"
    USB cable connecting V5 Brain to laptop

### Verify Connection

1. Open the Command Palette (`Ctrl+Shift+P`)
2. Run `PROS: List Devices`
3. You should see your V5 Brain listed with its port

!!! example "🖥️ Screenshot Needed"
    PROS List Devices terminal output showing detected V5 Brain

!!! tip "USB Port Issues"
    If the Brain isn't detected:

    - Try a different USB cable (some cables are charge-only, not data)
    - Try a different USB port on your computer
    - Make sure the Brain is powered on
    - On Windows, you may need to install V5 drivers (install VEXcode once to get drivers, then you can go back to PROS)

---

## Step 6: First Upload

Before writing any real code, verify that the full pipeline works: write code, compile, upload, run.

### The Test

Your `main.cpp` should already have the basic structure from project creation. We'll upload it as-is.

1. Save `main.cpp` (`Ctrl+S`)
2. Open the Command Palette (`Ctrl+Shift+P`)
3. Run `PROS: Upload` (or click the upload button in the PROS sidebar)
4. Wait for compilation and upload to complete
5. You should see `Upload successful` in the terminal

!!! example "🖥️ Screenshot Needed"
    Terminal showing 'Upload successful' message after PROS upload

### Verify on the Brain

1. On the V5 Brain screen, navigate to **Programs**
2. You should see your program listed
3. Run it — nothing visible will happen (the code doesn't do anything yet), but it should start without errors

!!! example "📷 Photo Needed"
    V5 Brain screen showing Programs menu with uploaded program

!!! success "If Upload Succeeds"
    Congratulations — your development environment is fully set up. You can write code on your computer, compile it, upload it to the robot, and run it. This is the pipeline you'll use for every future module.

!!! failure "If Upload Fails"
    Common fixes:

    - **Compilation errors:** Read the error message. It tells you the file, line number, and what's wrong. Usually a typo.
    - **Upload timeout:** Check USB connection. Try a different cable or port.
    - **"No device found":** Brain isn't connected. Check cable, power, and PROS device list.
    - **Permission denied (Linux/Mac):** You may need to add your user to the `dialout` group.

---

## Step 7: Useful VSCode Settings

### Recommended Extensions (Beyond PROS)

| Extension | Purpose |
|-----------|---------|
| **C/C++** (Microsoft) | Syntax highlighting, IntelliSense for C++ |
| **Error Lens** | Shows errors inline in your code (highly recommended) |

### Keyboard Shortcuts to Learn

| Shortcut | Action |
|----------|--------|
| `Ctrl+S` | Save file |
| `Ctrl+Shift+P` | Command Palette |
| `Ctrl+`` ` | Toggle terminal |
| `Ctrl+/` | Comment/uncomment line |
| `Ctrl+Z` | Undo |
| `Ctrl+Shift+Z` | Redo |

---

## Key Takeaways

- [x] VSCode + PROS extension is your development environment
- [x] LemLib is installed as a template on top of PROS
- [x] `src/main.cpp` is where your code lives — focus on `initialize()`, `autonomous()`, and `opcontrol()`
- [x] Always test the upload pipeline before writing real code
- [x] Read error messages — they tell you exactly what's wrong
- [x] Save constantly, test incrementally

!!! tip "Before Moving On"
    Make sure you can: open your project in VSCode, compile it without errors, upload it to the Brain, and run it. If any of these steps fail, fix them now. **Every future module depends on this pipeline working.**

**Next up:** [Module 2.2: Drive Config & Controls](drive-config-controls.md) — make your robot actually move.
