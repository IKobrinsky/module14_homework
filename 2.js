function checkObjectProperty(obj, propertyName)
{
	if (typeof(obj)!="object") return false;
	return propertyName in obj;
}