#!/bin/bash

# Arguments: (RegionName, StartYear, EndYear)
# Example: Have netCDF data for Mongolia from 2010 to 2024 -> "./concatenate.sh Mongolia 2010 2024"

# File assumes it's in the same directory as the data being concatenated.

# NCKS, NCRA, and NCRCAT all require the netCDF Operators (NCO) software installation
# https://nco.sourceforge.net/nco.html

# A windows path to the conda.sh file. Used for activating the conda environment.
source C:/Users/sguti/miniconda3/etc/profile.d/conda.sh base
conda activate base || { echo "Failed to activate conda environment"; exit 1; }

for ((i = $2; i < $3 + 1; i++))
do
	# Add a time record dimension to each yearly dataset; necessary for concatenating with ncrcat. Change the base file name to fit your data. Example output: T_Mongolia_2D_ERA5_2010.nc 
	ncks -O --mk_rec_dmn time $1_2D_ERA5_$i.nc T_$1_2D_ERA5_$i.nc
done

# Concatenate all years into one dataset. On windows, you'll have to prefix the ncrcat command with ncra -Y due to the way symbolic links work compared to UNIX systems. Example output: Mongolia_2D_ERA5_2010_2024.nc 
ncra -Y ncrcat T_$1_2D_ERA5_*.nc $1_2D_ERA5_$2_$3.nc

conda deactivate