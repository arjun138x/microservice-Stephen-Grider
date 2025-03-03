### **What is Skaffold?**

Skaffold is a **command-line tool** that helps with the **continuous development, testing, and deployment** of Kubernetes applications. It automates **build, push, and deploy** processes, making Kubernetes development smoother.

---

## **Key Features of Skaffold**

🔹 **Hot Reload for Kubernetes** – Automatically syncs and deploys code changes.  
🔹 **Manages Build & Deployment Pipelines** – Supports **Docker, Buildpacks, Bazel, and Kaniko**.  
🔹 **Works with Helm & Kustomize** – Easily integrates with Helm charts & Kustomize for templating.  
🔹 **Local & Remote Deployment** – Works in local Kubernetes clusters (e.g., Minikube, Kind) and cloud services (e.g., GKE, EKS).  
🔹 **CI/CD Integration** – Compatible with **GitHub Actions, GitLab CI/CD, Jenkins**.

---

## **How Skaffold Works**

Skaffold follows a **build → tag → push → deploy** pipeline:

1️⃣ **Detects Changes** (code, configs, Dockerfiles).  
2️⃣ **Builds & Tags Container Images**.  
3️⃣ **Pushes Images** to a container registry (if required).  
4️⃣ **Deploys to Kubernetes** using manifests, Helm, or Kustomize.  
5️⃣ **Monitors for Changes** and redeploys automatically.

---

## **Skaffold Installation**

### **1️⃣ Install Skaffold (Linux/macOS/Windows)**

```sh
curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64
chmod +x skaffold
sudo mv skaffold /usr/local/bin
```

✔ Now, you can run `skaffold version` to verify the installation.

---

## **Basic Usage of Skaffold**

### **1️⃣ Initialize a Skaffold Project**

```sh
skaffold init
```

✔ This generates a `skaffold.yaml` config file.

---

### **2️⃣ Build & Deploy an App to Kubernetes**

```sh
skaffold dev
```

✔ Watches for changes, rebuilds, and redeploys automatically.

---

### **3️⃣ Deploy Only Without Watching for Changes**

```sh
skaffold run
```

### **Manually Download Skaffold**

#### **1. Download the skaffold from official site. Linux (64-bit)**

```bash
curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64
```

### **2. Make it Executable**

If the download was successful, run:

```bash
chmod +x skaffold
```

---

### **3. Move it to `/usr/local/bin/`**

So you can use it globally:

```bash
sudo mv skaffold /usr/local/bin/
```

---

### **4. Verify Installation**

Run:

```bash
skaffold version
```

✔ Use this in **CI/CD pipelines** to deploy apps.

---

## **Example: Skaffold Configuration (`skaffold.yaml`)**

```yaml
apiVersion: skaffold/v2beta26
kind: Config
build:
  artifacts:
    - image: my-app
      context: .
      docker:
        dockerfile: Dockerfile
deploy:
  kubectl:
    manifests:
      - k8s/deployment.yaml
```

✔ Defines how Skaffold builds & deploys an app.

---

## **Skaffold with Helm**

If using **Helm charts**, configure Skaffold like this:

```yaml
deploy:
  helm:
    releases:
      - name: my-app
        chartPath: charts/my-app
        valuesFiles:
          - values.yaml
```

✔ Manages **Helm-based Kubernetes deployments**.

---

## **Skaffold with Kustomize**

```yaml
deploy:
  kustomize:
    paths:
      - overlays/dev
```

✔ Uses **Kustomize overlays** for different environments.

---

## **Skaffold in CI/CD Pipelines**

Integrate Skaffold into **GitHub Actions**:

```yaml
- name: Deploy to Kubernetes
  run: skaffold run --default-repo=gcr.io/my-project
```

✔ Automates deployments in **CI/CD workflows**.

---

## **🚀 Skaffold Benefits**

✅ **Fast Feedback Loop** – Automatically rebuilds & deploys changes.  
✅ **Works with Any Kubernetes Setup** – Supports Minikube, Kind, GKE, EKS, AKS, etc.  
✅ **CI/CD Friendly** – Easily integrates into DevOps pipelines.  
✅ **No Server-Side Components** – Lightweight & client-side execution.

---
