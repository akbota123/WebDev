# Generated by Django 2.0.13 on 2019-04-15 12:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20190415_1522'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='task_list',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tasks', to='api.TaskList'),
        ),
    ]
