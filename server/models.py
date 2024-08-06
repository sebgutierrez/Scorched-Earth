from tensorflow import keras
import os

class Model:
	def __init__(self, region_name: str, model_name: str):
		self.region_name = region_name
		self.model_name = model_name

	def get_name(self):
		return self.model_name
	
	def get_region(self):
		""" Returns the name of the region the model is trained on"""
		return self.region_name

	def get_predictions(self, input_data: list):
		""" Calls predict on the model and returns a list of floats """

		# predict() returns a NumPy array of type float32
		predictions = self.model.predict(input_data).tolist()

		return predictions
	
	def get_metrics(self):
		""" Returns all of a model's metric scores as a dictionary """

		metrics = self.model.get_metrics_result()
		return {"Mean Squared Error (MSE): ": round(metrics['loss'], 3), "Mean Absolute Error (MAE): ": round(metrics['mean_absolute_error'], 3)}
	
	def load_model(self):
		file_name = self.region_name + '_' + self.model_name + '.keras'
		model_path = os.path.join(os.getcwd(), 'models', file_name)
		try: 
			self.model = keras.models.load_model(model_path)
		except FileNotFoundError:
			print(f"The file/model {file_name} does not exist!")

def load_models(models: list):
	"""
	 	Loads all available models and returns a dictionary with the key-value pair: (region_name, model_name): keras_model 
		@param models: a list of tuples with the name of the region and type of model
	"""
	model_dict = {}
	for region_model_pair in models:
		model = Model(region_model_pair[0], region_model_pair[0])
		model.load_model()
		model_dict[region_model_pair] = model
	return model_dict
