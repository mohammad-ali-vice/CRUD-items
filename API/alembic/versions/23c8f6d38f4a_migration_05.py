"""migration 05

Revision ID: 23c8f6d38f4a
Revises: ecf342c2bfe0
Create Date: 2024-07-19 18:33:44.156789

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '23c8f6d38f4a'
down_revision: Union[str, None] = 'ecf342c2bfe0'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###
