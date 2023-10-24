-- CreateTable
CREATE TABLE `accidentes` (
    `id_accidente` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_accidente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `accounts` (
    `id` CHAR(36) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `provider` VARCHAR(255) NOT NULL,
    `provider_account_id` VARCHAR(255) NOT NULL,
    `refresh_token` VARCHAR(255) NULL,
    `access_token` VARCHAR(255) NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(255) NULL,
    `scope` VARCHAR(255) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(255) NULL,
    `user_id` CHAR(36) NULL,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `afiliaciones` (
    `id_afiliacion` INTEGER NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `tipo` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id_afiliacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `alergias` (
    `id_alergia` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_alergia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `area` (
    `id_area` INTEGER NOT NULL,
    `descripcion` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id_area`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cama` (
    `id_cama` INTEGER NOT NULL,
    `estado` TINYINT NOT NULL,
    `numero` INTEGER NOT NULL,

    PRIMARY KEY (`id_cama`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `datos_usuario` (
    `dni` INTEGER NOT NULL,
    `nombre` VARCHAR(255) NOT NULL,
    `apellido` VARCHAR(255) NOT NULL,
    `cuil` INTEGER NOT NULL,
    `telefono` INTEGER NOT NULL,
    `est_civil` VARCHAR(100) NOT NULL,
    `fec_inicio` DATE NOT NULL,
    `fec_nacimiento` DATE NOT NULL,

    UNIQUE INDEX `cuil_UNIQUE`(`cuil`),
    PRIMARY KEY (`dni`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `deficiencias` (
    `id_deficiencia` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_deficiencia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `domicilio_paciente` (
    `dni` INTEGER NOT NULL,
    `calle` VARCHAR(100) NOT NULL,
    `numero` INTEGER NOT NULL,
    `localidad` VARCHAR(100) NOT NULL,
    `provincia` VARCHAR(100) NOT NULL,
    `tipo` VARCHAR(100) NOT NULL,
    `departamento` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`dni`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `domicilio_usuario` (
    `dni` INTEGER NOT NULL,
    `calle` VARCHAR(100) NOT NULL,
    `numero` INTEGER NOT NULL,
    `localidad` VARCHAR(100) NOT NULL,
    `provincia` VARCHAR(100) NOT NULL,
    `tipo` VARCHAR(45) NOT NULL,
    `departamento` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`dni`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enfermedades` (
    `id_enfermedad` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_enfermedad`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ficha` (
    `id_ficha` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATE NOT NULL,
    `grupo_sanguineo` VARCHAR(10) NOT NULL,
    `observaciones` TEXT NOT NULL,

    PRIMARY KEY (`id_ficha`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `llamados` (
    `id_llamado` INTEGER NOT NULL,
    `tipo` VARCHAR(100) NOT NULL,
    `record` DATETIME(0) NOT NULL,
    `respuesta` DATETIME(0) NOT NULL,
    `origen` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id_llamado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paciente` (
    `dni` INTEGER NOT NULL,
    `nombre` VARCHAR(250) NOT NULL,
    `apellido` VARCHAR(250) NOT NULL,
    `fecha_nacimiento` DATE NOT NULL,
    `genero` VARCHAR(50) NOT NULL,
    `legajo` VARCHAR(100) NOT NULL,
    `estado_civil` VARCHAR(100) NOT NULL,
    `telefono` INTEGER NOT NULL,

    PRIMARY KEY (`dni`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `registro` (
    `id_registro` INTEGER NOT NULL,
    `descripcion` VARCHAR(100) NOT NULL,
    `estado` TINYINT NOT NULL,
    `fecha` DATE NOT NULL,

    PRIMARY KEY (`id_registro`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_afil_paciente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dni` INTEGER NOT NULL,
    `id_afiliacion` INTEGER NOT NULL,

    INDEX `fk_afiliacion_idx`(`id_afiliacion`),
    INDEX `fk_paciente_idx`(`dni`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_area_cama` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_area` INTEGER NOT NULL,
    `id_cama` INTEGER NOT NULL,

    INDEX `fk_area2_idx`(`id_area`),
    INDEX `fk_cama_idx`(`id_cama`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_area_registro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_area` INTEGER NOT NULL,
    `id_registro` INTEGER NOT NULL,

    INDEX `fk_area3_idx`(`id_area`),
    INDEX `fk_registro3_idx`(`id_registro`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_area_usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mail` VARCHAR(256) NOT NULL,
    `id_area` INTEGER NOT NULL,

    INDEX `fk_area_idx`(`id_area`),
    INDEX `fk_mail4_idx`(`mail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_ficha_accidente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estado` TINYINT NOT NULL,
    `id_accidente` INTEGER NOT NULL,
    `id_ficha` INTEGER NOT NULL,

    INDEX `fk_accidente_idx`(`id_accidente`),
    INDEX `fk_ficha5_idx`(`id_ficha`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_ficha_alergia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estado` BOOLEAN NOT NULL,
    `id_ficha` INTEGER NOT NULL,
    `id_alergia` INTEGER NOT NULL,

    INDEX `fk_alergia_idx`(`id_alergia`),
    INDEX `fk_ficha2_idx`(`id_ficha`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_ficha_deficiencia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estado` TINYINT NOT NULL,
    `id_deficiencia` INTEGER NOT NULL,
    `id_ficha` INTEGER NOT NULL,

    INDEX `fk_deficiencia_idx`(`id_deficiencia`),
    INDEX `fk_ficha6_idx`(`id_ficha`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_ficha_enfermedad` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estado` TINYINT NOT NULL,
    `id_enfermedad` INTEGER NOT NULL,
    `id_ficha` INTEGER NOT NULL,

    INDEX `fk_enfermedad_idx`(`id_enfermedad`),
    INDEX `fk_ficha4_idx`(`id_ficha`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_ficha_paciente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_ficha` INTEGER NOT NULL,
    `dni` INTEGER NOT NULL,

    INDEX `fk_dni3_idx`(`dni`),
    INDEX `fk_ficha7_idx`(`id_ficha`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_ficha_vacuna` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estado` TINYINT NOT NULL,
    `id_vacuna` INTEGER NOT NULL,
    `id_ficha` INTEGER NOT NULL,

    INDEX `fk_ficha3_idx`(`id_ficha`),
    INDEX `fk_vacuna_idx`(`id_vacuna`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_llamado_paciente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dni` INTEGER NOT NULL,
    `id_llamado` INTEGER NOT NULL,

    INDEX `fk_dni5_idx`(`dni`),
    INDEX `fk_llamado_idx`(`id_llamado`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_registro_paciente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dni` INTEGER NOT NULL,
    `id_registro` INTEGER NOT NULL,

    INDEX `fk_dni6_idx`(`dni`),
    INDEX `fk_registro_idx`(`id_registro`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_registro_usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dni` INTEGER NOT NULL,
    `id_registro` INTEGER NOT NULL,

    INDEX `fk_dni7_idx`(`dni`),
    INDEX `fk_registro2_idx`(`id_registro`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_usuario_datos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mail` VARCHAR(256) NOT NULL,
    `dni` INTEGER NOT NULL,

    INDEX `fk_dni_idx`(`dni`),
    INDEX `fk_mail_idx`(`mail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_usuario_ficha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_ficha` INTEGER NOT NULL,
    `mail` VARCHAR(256) NOT NULL,

    INDEX `fk_ficha_idx`(`id_ficha`),
    INDEX `fk_mail3_idx`(`mail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_usuario_rol` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_rol` INTEGER NOT NULL,
    `mail` VARCHAR(256) NOT NULL,

    INDEX `fk_mail2_idx`(`mail`),
    INDEX `fk_rol_idx`(`id_rol`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rol` (
    `id_rol` INTEGER NOT NULL,
    `descripción` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_rol`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sessions` (
    `id` CHAR(36) NOT NULL,
    `expires` DATETIME(0) NOT NULL,
    `session_token` VARCHAR(255) NOT NULL,
    `user_id` CHAR(36) NULL,

    UNIQUE INDEX `sessionToken`(`session_token`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `email_verified` DATETIME(0) NULL,
    `image` VARCHAR(255) NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `mail` VARCHAR(256) NOT NULL,
    `clave` VARCHAR(21) NOT NULL,

    PRIMARY KEY (`mail`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vacunas` (
    `id_vacuna` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_vacuna`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `verification_tokens` (
    `token` VARCHAR(255) NOT NULL,
    `identifier` VARCHAR(255) NOT NULL,
    `expires` DATETIME(0) NOT NULL,

    PRIMARY KEY (`token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `accounts` ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `domicilio_paciente` ADD CONSTRAINT `fk_dni4` FOREIGN KEY (`dni`) REFERENCES `datos_usuario`(`dni`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `domicilio_usuario` ADD CONSTRAINT `fk_dni2` FOREIGN KEY (`dni`) REFERENCES `datos_usuario`(`dni`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_afil_paciente` ADD CONSTRAINT `fk_afiliacion` FOREIGN KEY (`id_afiliacion`) REFERENCES `afiliaciones`(`id_afiliacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rel_afil_paciente` ADD CONSTRAINT `fk_paciente` FOREIGN KEY (`dni`) REFERENCES `paciente`(`dni`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_area_cama` ADD CONSTRAINT `fk_area2` FOREIGN KEY (`id_area`) REFERENCES `area`(`id_area`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rel_area_cama` ADD CONSTRAINT `fk_cama` FOREIGN KEY (`id_cama`) REFERENCES `cama`(`id_cama`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_area_registro` ADD CONSTRAINT `fk_area3` FOREIGN KEY (`id_area`) REFERENCES `area`(`id_area`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rel_area_registro` ADD CONSTRAINT `fk_registro3` FOREIGN KEY (`id_registro`) REFERENCES `registro`(`id_registro`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rel_area_usuario` ADD CONSTRAINT `fk_area` FOREIGN KEY (`id_area`) REFERENCES `area`(`id_area`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rel_area_usuario` ADD CONSTRAINT `fk_mail4` FOREIGN KEY (`mail`) REFERENCES `usuario`(`mail`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_ficha_accidente` ADD CONSTRAINT `fk_accidente` FOREIGN KEY (`id_accidente`) REFERENCES `accidentes`(`id_accidente`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rel_ficha_accidente` ADD CONSTRAINT `fk_ficha5` FOREIGN KEY (`id_ficha`) REFERENCES `ficha`(`id_ficha`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_ficha_alergia` ADD CONSTRAINT `fk_alergia` FOREIGN KEY (`id_alergia`) REFERENCES `alergias`(`id_alergia`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rel_ficha_alergia` ADD CONSTRAINT `fk_ficha2` FOREIGN KEY (`id_ficha`) REFERENCES `ficha`(`id_ficha`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_ficha_deficiencia` ADD CONSTRAINT `fk_deficiencia` FOREIGN KEY (`id_deficiencia`) REFERENCES `deficiencias`(`id_deficiencia`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rel_ficha_deficiencia` ADD CONSTRAINT `fk_ficha6` FOREIGN KEY (`id_ficha`) REFERENCES `ficha`(`id_ficha`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_ficha_enfermedad` ADD CONSTRAINT `fk_enfermedad` FOREIGN KEY (`id_enfermedad`) REFERENCES `enfermedades`(`id_enfermedad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rel_ficha_enfermedad` ADD CONSTRAINT `fk_ficha4` FOREIGN KEY (`id_ficha`) REFERENCES `ficha`(`id_ficha`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_ficha_paciente` ADD CONSTRAINT `fk_dni3` FOREIGN KEY (`dni`) REFERENCES `datos_usuario`(`dni`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_ficha_paciente` ADD CONSTRAINT `fk_ficha7` FOREIGN KEY (`id_ficha`) REFERENCES `ficha`(`id_ficha`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_ficha_vacuna` ADD CONSTRAINT `fk_ficha3` FOREIGN KEY (`id_ficha`) REFERENCES `ficha`(`id_ficha`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_ficha_vacuna` ADD CONSTRAINT `fk_vacuna` FOREIGN KEY (`id_vacuna`) REFERENCES `vacunas`(`id_vacuna`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rel_llamado_paciente` ADD CONSTRAINT `fk_dni5` FOREIGN KEY (`dni`) REFERENCES `paciente`(`dni`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_llamado_paciente` ADD CONSTRAINT `fk_llamado` FOREIGN KEY (`id_llamado`) REFERENCES `llamados`(`id_llamado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rel_registro_paciente` ADD CONSTRAINT `fk_dni6` FOREIGN KEY (`dni`) REFERENCES `paciente`(`dni`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_registro_paciente` ADD CONSTRAINT `fk_registro` FOREIGN KEY (`id_registro`) REFERENCES `registro`(`id_registro`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rel_registro_usuario` ADD CONSTRAINT `fk_dni7` FOREIGN KEY (`dni`) REFERENCES `datos_usuario`(`dni`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_registro_usuario` ADD CONSTRAINT `fk_registro2` FOREIGN KEY (`id_registro`) REFERENCES `registro`(`id_registro`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rel_usuario_datos` ADD CONSTRAINT `fk_dni` FOREIGN KEY (`dni`) REFERENCES `datos_usuario`(`dni`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_usuario_datos` ADD CONSTRAINT `fk_mail` FOREIGN KEY (`mail`) REFERENCES `usuario`(`mail`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_usuario_ficha` ADD CONSTRAINT `fk_ficha` FOREIGN KEY (`id_ficha`) REFERENCES `ficha`(`id_ficha`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_usuario_ficha` ADD CONSTRAINT `fk_mail3` FOREIGN KEY (`mail`) REFERENCES `usuario`(`mail`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_usuario_rol` ADD CONSTRAINT `fk_mail2` FOREIGN KEY (`mail`) REFERENCES `usuario`(`mail`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_usuario_rol` ADD CONSTRAINT `fk_rol` FOREIGN KEY (`id_rol`) REFERENCES `rol`(`id_rol`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
