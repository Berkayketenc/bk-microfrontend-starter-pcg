# BK Micro Frontend Architecture

## Türkçe

Bu proje, frontend mikro servis mimarisi kullanarak birden fazla uygulamanın nasıl yönetileceğini göstermektedir. Proje, bir ana uygulama (parent-app) ve iki alt uygulama (child-app-1 ve child-app-2) içermektedir. Ayrıca, bu uygulamaları yöneten bir Nginx sunucusu bulunmaktadır. Uygulamalar, router tabanlı bir yapı üzerinden dinamik olarak yüklenmekte ve hızlı bir başlangıç yapabilmeniz için dinamik bir layout içerik sistemi oluşturulmuştur. Tüm yapı, Docker ile tamamen containerize edilmiş ve Docker Compose ile yapılandırılmıştır. Projede, uygulamalar arasında sorunsuz modül paylaşımı için Vite Federation kullanılmaktadır. Ayrıca, global seviyede bir state yönetimi için Redux, app seviyesinde entegre edilmiş ve federation yapısına bağlanmıştır, böylece tüm uygulamalar arasında tutarlı bir state yönetimi sağlanmıştır.

### Hizmetler

- **parent-app**: Ana uygulama.
- **child-app-1**: Birinci alt uygulama.
- **child-app-2**: İkinci alt uygulama.
- **nginx**: Uygulamaları yöneten Nginx sunucusu.

### Kullanılan Teknolojiler

- Docker
- Docker Compose
- Nginx
- Redux
- React Router
- Vite Federation

### Kurulum

1. Bu projeyi klonlayın:
    ```bash
    git clone https://github.com/Berkayketenc/bk-microfrontend-starter-package.git
    ```
2. Proje dizinine gidin:
    ```bash
    cd bk-microfrontend-starter-package/app
    ```
3. Docker Compose ile hizmetleri başlatın:
    ```bash
    docker-compose up --build
    ```
4. Bridge ağı oluşturun:
    docker network create bk-micro-frontend

5. Bridge ağına containerlarınızı bağlayın: 
    ```bash   
    docker network connect bk-micro-frontend app-child-app-1-1
    ```

    ```bash 
    docker network connect bk-micro-frontend app-child-app-2-1
    ```

    ```bash 
    docker network connect bk-micro-frontend app-parent-app-1
    ```

    ```bash 
    docker network connect bk-micro-frontend nginx
    ```
## English

This project demonstrates how to manage multiple applications using a frontend microservices architecture. It includes a parent application (parent-app) and two child applications (child-app-1 and child-app-2). Additionally, an Nginx server is used to manage these applications. The apps are dynamically loaded through a router-based structure, and a dynamic layout content system has been implemented to help you get started quickly. The entire setup is fully containerized with Docker and configured using Docker Compose. The project utilizes Vite Federation for seamless module sharing across applications. Furthermore, a global state management system using Redux has been integrated at the app level and connected to the federation for consistent state handling across all applications.

### Services

- **parent-app**: The parent application.
- **child-app-1**: The first child application.
- **child-app-2**: The second child application.
- **nginx**: The Nginx server that manages the applications.

### Technologies Used

- Docker
- Docker Compose
- Nginx
- Redux
- React Router
- Vite Federation

### Setup

1. Clone this project:
    ```bash
    git clone https://github.com/Berkayketenc/bk-microfrontend-starter-package.git
    ```
2. Navigate to the project directory:
    ```bash
    cd bk-microfrontend-starter-package/app
    ```
3. Start the services with Docker Compose:
    ```bash
    docker-compose up --build
    ```
4. Create a bridge network:
    docker network create bk-micro-frontend

5. Connect your containers to the bridge network:    
       ```bash   
    docker network connect bk-micro-frontend app-child-app-1-1
    ```

    ```bash 
    docker network connect bk-micro-frontend app-child-app-2-1
    ```

    ```bash 
    docker network connect bk-micro-frontend app-parent-app-1
    ```

    ```bash 
    docker network connect bk-micro-frontend nginx
    ```
