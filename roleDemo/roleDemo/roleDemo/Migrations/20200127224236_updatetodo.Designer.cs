﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using roleDemo.Models;

namespace roleDemo.Migrations
{
    [DbContext(typeof(TodoContext))]
    [Migration("20200127224236_updatetodo")]
    partial class updatetodo
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity("roleDemo.Models.ToDo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<bool>("IsComplete");

                    b.Property<int>("Priority");

                    b.Property<string>("userEmail");

                    b.HasKey("Id");

                    b.ToTable("ToDos");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Clean house",
                            IsComplete = false,
                            Priority = 1,
                            userEmail = "woodsman.lucas@gmail.com"
                        },
                        new
                        {
                            Id = 2,
                            Description = "Bake cake",
                            IsComplete = false,
                            Priority = 3,
                            userEmail = "woodsman.lucas@gmail.com"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
