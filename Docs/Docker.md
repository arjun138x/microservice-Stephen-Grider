### **What is Docker?**

Docker is a platform that **allows you to develop, ship, and run applications in containers**. Containers are lightweight, portable, and run the same way across different environments, making them perfect for development, testing, and deployment.

---

## **Why Use Docker?**

✅ **Portability** – Run the same app anywhere (Windows, Linux, macOS, Cloud, etc.).  
✅ **Lightweight** – Uses fewer resources compared to virtual machines.  
✅ **Fast Deployment** – Start and stop applications quickly.  
✅ **Dependency Management** – Package your app with all its dependencies.  
✅ **Scalability** – Works well with Kubernetes for large-scale deployments.

---

## **How Docker Works**

Docker uses **images** and **containers**:

- **Image**: A template with the OS, application, and dependencies (e.g., `node:18`, `nginx`).
- **Container**: A running instance of an image, isolated from the host system.

**Example Workflow**:

1. You write code.
2. You create a Docker image with your code.
3. You run the image as a container.
4. The same container runs on any machine (local, server, or cloud).

---

## **Installing Docker**

### **Linux**

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

Then add your user to the `docker` group:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

### **macOS**

```bash
brew install --cask docker
```

Then open **Docker Desktop**.

### **Windows**

Download **Docker Desktop** from [docker.com](https://www.docker.com/products/docker-desktop) and install it.

---

## **Basic Docker Commands**

### **1. Check Docker Version**

```bash
docker --version
```

### **2. Run a Container**

```bash
docker run hello-world
```

This pulls the **hello-world** image and runs it inside a container.

### **3. List Running Containers**

```bash
docker ps
```

To see **all** containers (including stopped ones):

```bash
docker ps -a
```

### **4. Pull an Image from Docker Hub**

```bash
docker pull nginx
```

This downloads the **nginx** image.

### **5. Run a Container in Detached Mode**

```bash
docker run -d -p 8080:80 nginx
```

- `-d` → Run in the background (detached mode).
- `-p 8080:80` → Map port **8080** on the host to port **80** inside the container.

Now, you can open `http://localhost:8080` in your browser.

### **6. Stop & Remove Containers**

Stop a running container:

```bash
docker stop <container_id>
```

Remove a container:

```bash
docker rm <container_id>
```

### **7. Build a Custom Docker Image**

Create a **Dockerfile**:

```dockerfile
# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]
```

Then build and run the image:

```bash
docker build -t myapp .
docker run -p 3000:3000 myapp
```

---

## **Docker Compose (Multi-Container Apps)**

For apps with multiple services (e.g., **backend + database**), use **Docker Compose**.

Create a `docker-compose.yml` file:

```yaml
version: "3"
services:
  app:
    image: myapp
    ports:
      - "3000:3000"
  db:
    image: mysql
    environment:
      MYSQL_ROOT_PASSWORD: root
```

Run everything with:

```bash
docker-compose up -d
```

Stop all services:

```bash
docker-compose down
```

---

## **Docker vs Virtual Machines (VMs)**

| Feature      | Docker Containers      | Virtual Machines       |
| ------------ | ---------------------- | ---------------------- |
| Startup Time | **Seconds**            | Minutes                |
| Performance  | **Fast & Lightweight** | Slower (more overhead) |
| Portability  | **Runs anywhere**      | Tied to OS/Hypervisor  |
| Isolation    | Process-level          | Full OS-level          |

---

## **When to Use Docker?**

✔️ Developing & testing apps locally  
✔️ Running microservices  
✔️ Deploying apps on cloud or Kubernetes  
✔️ CI/CD automation
