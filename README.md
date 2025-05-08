# Hiphop.js ABRO Project — Web Programming Exploration

This project explores reactive web programming using [hiphop.js](http://hop.inria.fr/home/hiphop/), a synchronous language embedded in JavaScript. It includes a suite of signal-based reactive modules (e.g., ABRO variants) as part of an academic project.

## 📦 Contents

- A suite of ABRO-inspired reactive programs using `hiphop.js`
- Finite State Machine demos (in separate files)
- A clock-based alarm application (partial `hiphop.js` integration)
- A suite of alarm pages which evolved depending on my understanding.
- A stopwatch, a world clock and an adjustable timer  
- Project documentation and LaTeX report

---

## 🚀 Quick Start

You can run this project either **locally** (on Linux/macOS) or using **Docker** (on any platform).

### 🛠 Option 1: Run Locally (Linux/macOS only) or Windows via WSL

> ⚠️ Requires:
> - Node.js >= 18
> - A POSIX-compliant system (Linux/macOS)  
> - On Windows, use [WSL](https://learn.microsoft.com/en-us/windows/wsl/)

>bash
git clone https://github.com/Maxime-cod/hiphop-and-webdev-project.git
cd hiphop-and-webdev-project
npm install
node path/to/example.js

### Option 2: Run in Docker (Cross-platform: Linux, macOS, Windows)
# Build the Docker image
docker build -t hiphopjs-project .

# Run a specific example (replace with your script path)
docker run -it hiphopjs-project node abro/basic.js

# Or run an interactive container
docker run -it hiphopjs-project bash
