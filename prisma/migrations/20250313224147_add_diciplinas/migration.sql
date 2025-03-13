-- CreateTable
CREATE TABLE `Disciplina` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AlunoToDisciplina` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AlunoToDisciplina_AB_unique`(`A`, `B`),
    INDEX `_AlunoToDisciplina_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_AlunoToDisciplina` ADD CONSTRAINT `_AlunoToDisciplina_A_fkey` FOREIGN KEY (`A`) REFERENCES `Aluno`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AlunoToDisciplina` ADD CONSTRAINT `_AlunoToDisciplina_B_fkey` FOREIGN KEY (`B`) REFERENCES `Disciplina`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
