# Generated by Django 2.0.13 on 2019-04-15 09:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='due_on',
            field=models.DateTimeField(auto_now=True),
        ),
    ]