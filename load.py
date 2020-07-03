import boto3
from uuid import uuid4

db = boto3.resource('dynamodb')
table = db.Table('State-3pqwgrg7krgn5lkjhyp4pakgyu-dev')

with table.batch_writer() as batch:
    batch.put_item(Item = {'id': uuid4().hex, 'name': 'Florida'})