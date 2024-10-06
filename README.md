# studies

repo to studies with curso.dev

```
install nvm
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

install dependencies (with right node version)
    nvm install
```

Caso esteja usando o WSL o docker não conseguirá iniciar apenas com o comando ``` docker compose up ``` pois, containers e alguns ambientes de ``chroot`` geralmente, não utiliza o ``systemd`` como sistema de init. Nesse caso, você pode iniciar o Docker diretamente usando o binário do Docker em vez de tentar usar o ``systemctl``.

```
  sudo dockerd
```

depois disso o docker estará pronto para ser iniciado ``` docker compose up -f infra/compose.yaml up -d```