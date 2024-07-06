-- CreateTable
CREATE TABLE "InFoMyPortFoLio" (
    "Id" SERIAL NOT NULL,
    "FullName" VARCHAR(255) NOT NULL,
    "Description" TEXT NOT NULL,
    "CV" VARCHAR(255) NOT NULL,
    "Image" VARCHAR(255) NOT NULL,
    "DateCreate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "DateUpdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InFoMyPortFoLio_pkey" PRIMARY KEY ("Id")
);
