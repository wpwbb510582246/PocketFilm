import sys
import os

curPath = os.path.abspath(os.path.dirname(__file__))
rootPath = os.path.split(curPath)[0]
sys.path.append(rootPath)

from PocketLifeSpider.util.CommonUtils import *

if __name__ == '__main__':
    modify_movie_type2(get_exclude_type2_list())